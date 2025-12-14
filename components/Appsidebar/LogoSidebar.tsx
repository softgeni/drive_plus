import Link from "next/link";
import { JSON, REDIRED, TEXT } from "@/constants";
import Image from "next/image";

export const LogoSidebar = () => {
  return (
    <>
      <Link
        href={REDIRED.LOGO_INIT}
        className="flex items-center h-20 gap-2 border-b rounded-3xl shadow-2xl  cursor-pointer min-h-20 px-6"
      >
        <Image src={JSON.LOGO} alt={JSON.ALT} width={30} height={30} priority />
        <h1 className=" text-xl font-bold">{TEXT.TITLE}</h1>
      </Link>
    </>
  );
};
