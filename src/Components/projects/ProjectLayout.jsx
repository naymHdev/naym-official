import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({
  name,
  description,
  date,
  demoLink,
  clientCode,
  serverCode,
}) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className=" text-sm md:text-base w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="">
        <p className="text-muted sm:text-foreground font-medium">{date}</p>
        <h1 className="text-foreground text-xl font-semibold mt-6">{name}</h1>
        <p className="text-muted sm:inline-block mt-2">{description}</p>
        <div className=" flex items-center justify-evenly mt-8">
          <button className="border rounded-xl shadow-md custom-bg px-5 py-3 text-foreground">
            Server Site
          </button>
          <button className="border rounded-xl shadow-md custom-bg px-5 py-3 text-foreground">
            Client Site
          </button>
          <button className="border rounded-xl shadow-md custom-bg px-5 py-3 text-foreground">
            Demo
          </button>
        </div>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
