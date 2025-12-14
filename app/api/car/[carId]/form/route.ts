"use server";

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ carId: string }> }
) {
  try {
    const { userId } = await auth();
    const { carId } = await params;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const values = await req.json();

    const updatedCar = await prisma.car.update({
      where: { id: carId }, // 👈 YA NO ES undefined
      data: values,
    });

    return NextResponse.json(updatedCar, { status: 200 });
  } catch (error) {
    console.log("[CAR_FORM_PATCH]", error);

    return NextResponse.json(
      { error: "Failed to edit car", details: error },
      { status: 500 }
    );
  }
}
