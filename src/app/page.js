import Image from "next/image";
import bg from "../../public/background/home-background.png";
import Navigation from "@/Components/navigation/Navigation";
import dynamic from "next/dynamic";
import RenderModel from "@/Components/RenderModel";

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
        className="-z-50 w-full h-full object-cover object-center opacity-50"
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
