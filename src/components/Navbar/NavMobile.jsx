import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { routes } from "./routes";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden">
      <div className="flex items-center justify-between p-5 ">
        <span className="text-lg text-white font-poppins">TECH
        <span style={{ color: "#27A5EF" }}>NICA</span>
        </span>
        <Hamburger
          toggled={isOpen}
          size={20}
          toggle={setOpen}
          color="#fff"
        />
      </div>
      <div className={`fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-[2rem] bg-neutral-950 opacity-95 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="grid gap-2">
          {routes.map((route, idx) => (
            <li
              key={route.title}
              className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
            >
              <a
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center justify-center w-full p-5 rounded-xl bg-neutral-950"
                href={route.href}
              >
                <span className="text-lg text-white">{route.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
