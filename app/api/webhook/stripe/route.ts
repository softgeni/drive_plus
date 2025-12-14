import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { stripe } from "@/lib";
import Stripe from "stripe";

export const runtime = "nodejs"; // obligatorio en Next.js 13/14

export async function POST(req: Request) {
  // 1️⃣ Leer el body crudo
  const buf = Buffer.from(await req.arrayBuffer());
  const sig = req.headers.get("stripe-signature")!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.log("Webhook error:", err.message);
    return NextResponse.json(
      { error: "Webhook signature failed" },
      { status: 400 }
    );
  }

  // 2️⃣ Procesar eventos
  const session = event.data.object as Stripe.Checkout.Session;
  const orderId = session?.metadata?.orderId;

  if (orderId) {
    switch (event.type) {
      case "checkout.session.completed":
        await prisma.order.update({
          where: { id: orderId },
          data: { status: "Approved" },
        });
        console.log("Orden aprobada:", orderId);
        break;

      case "checkout.session.expired":
        await prisma.order.update({
          where: { id: orderId },
          data: { status: "Rejected" },
        });
        console.log("Orden rechazada:", orderId);
        break;

      default:
        console.log("Evento ignorado:", event.type);
    }
  }

  return NextResponse.json({ received: true });
}
