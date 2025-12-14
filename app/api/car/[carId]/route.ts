"use server";

import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// PUBLICAR O ELIMINAR UN COCHE POR ID
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ carId: string }> }
) {
  try {
    const { userId } = await auth();
    const { carId } = await params; // 👈 IMPORTANTE

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { isPublish } = await req.json();

    const updatedCar = await prisma.car.update({
      where: { id: carId, userId },
      data: {
        isPublish: isPublish,
      },
    });

    return NextResponse.json(updatedCar, { status: 200 });
  } catch (error) {
    console.error("[CAR_PUBLISH_ERROR]", error);
    return NextResponse.json(
      { error: "Error updating publish status", details: error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ carId: string }> }
) {
  try {
    const { userId } = await auth();
    const { carId } = await params;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const deletedCar = await prisma.car.delete({
      where: {
        id: carId,
      },
    });

    return NextResponse.json(deletedCar, { status: 201 });
  } catch (error) {
    console.error("[CAR_DELETE_ID]", error);
    return NextResponse.json(
      { error: "Internal error to delete the car", details: error },
      { status: 500 }
    );
  }
}
