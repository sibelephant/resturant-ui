import Featured from "@/components/Featured";
import Image from "next/image";
import Slider from "@/components/Slider";
import Offer from "@/components/Offer"

export default function Home() {
  return (
    <main className="">
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  );
}
