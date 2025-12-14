import {
  DriveToday,
  Feature,
  FirtsBlock,
  OurFleet,
  SliderBrands,
} from "@/components/home";

import { Navbar } from "@/components/shared";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirtsBlock />
      <SliderBrands />
      <Feature />
      <OurFleet />
      <DriveToday />
    </div>
  );
}
