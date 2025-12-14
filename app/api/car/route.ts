"use server";

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth(); // Clerk te devuelve userId
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();

    const car = await prisma.car.create({
      data: {
        userId,
        ...data,
      },
    });

    return NextResponse.json(car, { status: 201 });
  } catch (error) {
    console.error("[CAR]", error);
    return NextResponse.json(
      { error: "Something went wrong", details: error },
      { status: 500 }
    );
  }
}
