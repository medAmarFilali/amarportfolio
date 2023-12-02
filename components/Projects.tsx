import Image from "next/image";
import adventure from "../public/images/adv.png";
import ProjectElement from "./ProjectElement";

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 group/list">
      <ProjectElement image={adventure} />
      <ProjectElement image={adventure} />
      <ProjectElement image={adventure} />
      <ProjectElement image={adventure} />
      <ProjectElement image={adventure} />
      <ProjectElement image={adventure} />
    </div>
  );
}
