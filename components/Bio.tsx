export default function Bio() {
  return (
    <div id="bio">
      <p className="text-slate-400 mb-8 ">
        It all started 10 years ago, creating{" "}
        <span className="text-slate-50 font-semibold">HTML/CSS</span> pages for
        local small businesses and soon enough discovered{" "}
        <span className="text-slate-50 font-semibold">WORDPRESS</span> which got
        me into web development in the first place, months after I got recruited
        by an agency based in Leeds UK developing e-commerce website, web
        applications and solutions.
      </p>
      <p className="text-slate-400 mb-8">
        I{"'"}ve been working as a freelance web developer for nearly a year now
        which gave me the opportunity to explore new technologies and chalenges,
        but mainly focusing on making{" "}
        <span className="text-slate-50 font-semibold">REACT</span> and{" "}
        <span className="text-slate-50 font-semibold">REACT NATIVE</span> apps
        all that with{" "}
        <span className="text-slate-50 font-semibold">TYPESCRIPT</span> when and
        regularily working on my side projects.
      </p>
      <p className="text-slate-400">
        When I am not making website I usually switch to my childhood dream
        which is developing videos games, and learning new languages.
      </p>

      <div className="flex flex-col gap-2 mt-8">
        <div>Certificates</div>
        <div className="flex gap-2 items-center flex-wrap">
          <p className="text-green-500 font-semibold ">
            Google - Foundations of User Experience (UX) Design
          </p>
          <p className="text-sm text-slate-400"> - 2023</p>
        </div>
        <div className="flex gap-2 items-center flex-wrap">
          <p className="text-yellow-300 font-semibold ">
            AWS Cloud Practitioner
          </p>
          <p className="text-sm text-slate-400"> - 2023</p>
        </div>
        <div className="flex gap-2 items-center flex-wrap  ">
          <p className="text-yellow-300 font-semibold ">
            AWS Cloud Architect Associate
          </p>
          <p className="text-sm text-slate-400"> - 2023</p>
        </div>
        <div className="flex gap-2 items-center flex-wrap  ">
          <p className="text-slate-400 font-semibold ">
            AWS Developer Associate
          </p>
          <p className="text-sm text-slate-400"> - In Progress</p>
        </div>
      </div>
    </div>
  );
}
