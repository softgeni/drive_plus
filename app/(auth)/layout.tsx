import Image from "next/image";
import { JSON, TEXT } from "@/constants";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid lg:grid-cols-2 h-full items-center justify-center ">
        <div className=" flex items-center justify-center">{children}</div>
        <div className=" hidden lg:flex lg:bg-slate-300 h-full justify-center items-center flex-col">
          <Image
            src={JSON.LOGO}
            alt={JSON.ALT}
            width={JSON.WIDTH}
            height={JSON.HEIGHT}
          />
          <h1 className="text-xl font-bold">{TEXT.TITLE}</h1>
        </div>
      </div>
    </>
  );
}
