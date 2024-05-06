import Image from "next/image";
import bg from "../../public/background/home-background.png";
import dynamic from "next/dynamic";
import RenderModel from "@/Components/RenderModel";
import Navigation from "@/Components/navigation/Navigation";

const Wizard = dynamic(() => import("@/Components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
