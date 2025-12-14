"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { stripe } from "@/lib";
import Stripe from "stripe";

//cors

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(
  req: Request,
  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params,
  }: {
    params: {
      carId: string;
      priceDay: string;
      carName: string;
      startDate: Date;
      endDate: Date;
    };
  }
) {
  // user authentication
  const { userId } = await auth();
  // get body data
  const { carId, priceDay, carName, startDate, endDate } = await req.json();
  // validate user
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  // validate carId
  if (!carId) {
    return NextResponse.json(
      { message: "Car ID is required" },
      { status: 400 }
    );
  }
  // validate priceDay
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in milliseconds
  const numberOfDays = Math.ceil(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  const totalAmount = Number(priceDay) * 100 * numberOfDays;

  // linea de produccion
  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    {
      quantity: 1,
      price_data: {
        currency: "USD",
        product_data: {
          name: carName,
        },
        unit_amount: totalAmount,
      },
    },
  ];

  // crear base de datos de la sesion
  const order = await prisma.order.create({
    data: {
      carId,
      carName: carName,
      userId: userId,
      status: "Approve",
      totalAmount: totalAmount.toString(),
      orderDate: startDate,
      orderEndDate: endDate,
    },
  });
  // crear sesion de pago
  const sessionParams: Stripe.Checkout.SessionCreateParams = {
    payment_method_types: ["card", "sepa_debit", "us_bank_account"],
    mode: "payment",
    line_items,
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    payment_method_options: {
      card: {
        request_three_d_secure: "any",
      },
      sepa_debit: {},
      us_bank_account: {
        financial_connections: {
          permissions: ["payment_method"],
        },
        verification_method: "automatic",
      },
    },
    success_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-confirmation`,
    cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_STORE_URL}/order-error`,
    metadata: {
      orderId: order.id,
      carId: carId,
      startDate,
      endDate,
      numberOfDays,
      userId,
    },
  };

  const session = await stripe.checkout.sessions.create(sessionParams);
  return NextResponse.json(
    { url: session.url },
    { status: 200, headers: corsHeaders }
  );
}
