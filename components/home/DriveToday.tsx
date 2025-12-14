import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Reveal } from "../shared";

export const DriveToday = () => {
  return (
    <div className=" p-6 lg:my-32 max-w-7xl mx-auto">
      <div className="bg-[url('/images/background-2.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative ">
        <div className=" lg:flex gap-x-6">
          <div>
            <h3 className="text-4xl text-white">Drive your card Today</h3>
            <p className=" text-white text-xl my-5">
              Register and Explore the world of premiun cars
            </p>
            <Link href={"/sign-in"}>
              <Button variant={"outline"} size={"lg"}>
                Register here
              </Button>
            </Link>{" "}
          </div>
          <Reveal position="bottom" className="lg:absolute lg:-right-32 top-4">
            <Image
              src={"/images/audi.png"}
              alt={"Car drive "}
              width={550}
              height={250}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};
