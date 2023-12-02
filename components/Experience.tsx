import ExpElement from "./ExpElement";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <div className="py-32" id="experience">
      <SectionHeading title="Experience" />
      <div>
        <ExpElement
          company="Validus Media"
          year="2013 - 2023"
          title="Front End developer"
          description="During my decade-long stint at Validus Media, my journey morphed from being a dedicated WordPress developer to diving headfirst into ReactJS as a front-end maestro. Adapting swiftly to client demands, I immersed myself in crafting dynamic interfaces and leveled up by delving into global state management tools like Redux and Zustand. This evolution catapulted me into the realm of full-stack wizardry, architecting seamless applications that merged aesthetic finesse with robust functionality, tailored to the distinct needs of diverse clientele. Validus Media became my playground for continuous growth, allowing me to sculpt digital landscapes that not only met but exceeded client expectations."
        />
        <ExpElement
          year="2010 - 2013"
          title="Freelance Web Developer"
          description="With three years dedicated to freelance web development, my focus has been sculpting WordPress landscapes through custom themes and plugins. Each project embodies a fusion of functionality and aesthetics, tailored to meet unique client needs. This journey is a testament to my passion for transforming ideas into seamless digital experiences."
        />
        <ExpElement
          company="Eureka adventising"
          year="2007 - 2010"
          title="Lead graphic designer"
          description="As the Lead Graphic Designer at Eureka Advertising, I curated captivating visual stories, amplifying brand identities and fostering audience connections. Leading a dedicated team, I championed innovation, sculpting designs that transcended conventional boundaries."
        />
      </div>
    </div>
  );
}
