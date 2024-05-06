import Image from "next/image";
// import dynamic from "next/dynamic";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/Components/projects/ProjectList";
import RenderModel from "@/Components/RenderModel";
import { projectsData } from "@/app/data";
import Staff from "@/Components/models/Staff";

// const Staff = dynamic(() => import("@/components/models/Staff"), {
//   ssr: false,
// });

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
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
