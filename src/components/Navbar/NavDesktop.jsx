import { useEffect } from "react";
import { routes } from "./routes";

export const NavDesktop = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      // Add any additional logic here if needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (event, href) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-6">
      <span className="text-lg lg:text-xl text-white font-poppins mb-2 lg:mb-0">
        TECH
        <span style={{ color: "#27A5EF" }}>NICA</span>
      </span>
      <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
        {routes.map((route) => {
          const { href, title } = route;
          return (
            <li key={title}>
              <a
                href={href}
                className="flex items-center gap-1 hover:text-neutral-400 transition-all text-white"
                onClick={(e) => handleNavLinkClick(e, href)}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
