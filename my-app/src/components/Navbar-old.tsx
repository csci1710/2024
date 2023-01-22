type navItem = {
  dispalyText: string;
  link: string;
};

// Used to scroll sections of the page into view, otherwise navbar covers title when using a raw #href
export function scrollIntoView(id: string) {
  const yOffset = -120;
  const element = document.querySelector(id);
  if (element != null) {
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Navbar() {
  return (
    // className="fixed w-full top-0 h-96
    <nav className="">
      <div className="flex items-center justify-around p-2 bg-primary-800">
        <div className="flex w-1/3 justify-around">
          <Navlink dispalyText="About" sectionID="#about" />
          <Navlink dispalyText="Assignments" sectionID="#assignments" />
          <Navlink dispalyText="About" sectionID="#about" />
          <Navlink dispalyText="About" sectionID="#about" />
          <Navlink dispalyText="About" sectionID="#about" />
        </div>

        <button
          onClick={() => scrollIntoView("#intro")}
          className="text-5xl text-center justify-center blackstroke-sm text-neutral-100 font-title"
        >
          CSCI1710
        </button>

        <div className="flex w-1/3 justify-around">
          <Navlink
            dispalyText="Gradescope"
            sectionID="#about"
            overrideClassName="text-4xl font-title bg-blue-700 text-neutral-50 px-2 py-[.05rem] rounded-xl shadow-lg"
          />
          <Navlink
            dispalyText="EdStem"
            sectionID="#about"
            overrideClassName="text-4xl font-title bg-purple-700 text-neutral-50 px-2 py-[.05rem] rounded-xl shadow-lg"
          />
          <Navlink
            dispalyText="FORGE DOCS"
            sectionID="#"
            href="https://csci1710.github.io/forge-documentation/"
            overrideClassName="text-4xl font-title bg-primary-200 text-neutral-800 px-2 py-[.05rem] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </nav>
  );
}

type NavlinkProps = {
  dispalyText: string;
  sectionID: string; //#... (if external site link {.href} provided, this field will remain unusued)
  href?: string; // Will turn it into an <a> tag and override sectionID
  overrideClassName?: string;
};
function Navlink(props: NavlinkProps) {
  const realClassName = props.overrideClassName
    ? props.overrideClassName
    : "blackstroke-sm text-neutral-50 font-title text-3xl hover:cursor-pointer";
  return (
    <div className="">
      {props.href ? (
        <a href={props.href} className={realClassName}>
          {props.dispalyText}
        </a>
      ) : (
        <button
          className={realClassName}
          onClick={() => scrollIntoView(props.sectionID)}
        >
          {props.dispalyText}
        </button>
      )}
    </div>
  );
}
