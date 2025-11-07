import { useState } from "react";
import { navLinks } from "../constants";
import About from "./About.jsx";

const NavBar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleClick = (nav) => {
    if (nav.label === "About") {
      setAboutOpen(true);
    } else {
      window.open(nav.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <header>
        <nav className="container mx-auto flex-between px-5 2xl:px-0 py-4">
          <img src="/logo.png" alt="Mustang Logo" className="h-10 w-auto" />

          <ul className="flex gap-8">
            {navLinks.map((nav) => (
              <li key={nav.label}>
                <button
                  onClick={() => handleClick(nav)}
                  className="text-white opacity-80 hover:text-red-500 hover:drop-shadow-[0_0_8px_#ff0000] transition-all duration-300 ease-in-out"
                >
                  {nav.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex-center gap-3">
            <button>
              <img src="/search.svg" alt="Search" />
            </button>
            <button>
              <img src="/cart.svg" alt="Cart" />
            </button>
          </div>
        </nav>
      </header>

      <About isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  );
};

export default NavBar;
