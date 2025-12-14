"use client";

import { Button } from "@/components/ui/button";
import { useLoveCars } from "@/hooks";

import { useAuth, UserButton } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const { userId } = useAuth();
  const { lovedItems } = useLoveCars();
  return (
    <>
      <div className="max-w-5xl py-5 mx-auto">
        <div className=" justify-between lg:flex">
          <Link
            href={"/"}
            className=" flex items-center justify-center gap-x-2"
          >
            <Image
              src={"/logo.svg"}
              alt={"Drive Plus"}
              width={50}
              height={50}
            />
            <span className=" text-xl font-bold">Drive Plus</span>
          </Link>
          <div className=" flex items-center justify-center gap-x-7">
            <Link href={"/cars"}>List Cars</Link>
            <Link href={"/dashboard"}>Dashboard</Link>
            {userId ? (
              <>
                <Link href={"/love-cars"}>
                  <Heart
                    strokeWidth={1}
                    className={`cursor-pointer ${
                      lovedItems.length > 0 && "fill-red-500"
                    }`}
                  />
                </Link>
                <UserButton />
              </>
            ) : (
              <Link href={"/sign-in"} className=" flex gap-x-3">
                <Button>
                  Iniciar sesion
                  <User className=" ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
