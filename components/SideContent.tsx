import Bio from "./Bio";
import Projects from "./Projects";

export default function SideContent() {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:w-1/2 lg:flex-col lg:justify-between lg:pt-24 pt-16 ">
      <Bio />
      <Projects />
    </div>
  );
}
