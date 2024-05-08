import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/Components/projects/ProjectList";
import RenderModel from "@/Components/RenderModel";
import { projectsData } from "../../data";
import dynamic from "next/dynamic";

const Designs = dynamic(() => import("@/Components/models/Design"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Designs />
        </RenderModel>
      </div>
    </>
  );
}
