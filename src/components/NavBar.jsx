import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/sobre" },
  { label: "Produtos", path: "/produtos" },
  { label: "Contato", path: "/contato" },
  { label: "FAQ", path: "/faq" },
];

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur-md shadow-sm">
      
      <div className="
        mx-auto
        flex
        max-w-6xl
        items-center
        justify-between
        gap-4
        px-4
        py-3
        sm:px-6
        sm:py-4
        lg:px-8
      ">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex shrink-0 items-center gap-2 sm:gap-3"
        >
          <div className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-emerald-500
            text-xs
            font-black
            text-white
            sm:h-10
            sm:w-10
            sm:text-sm
          ">
            N
          </div>

          <span className="
            text-xs
            font-bold
            tracking-[0.15em]
            text-slate-900
            sm:text-sm
            sm:tracking-[0.25em]
          ">
            NEXUS
          </span>
        </NavLink>

        {/* Links */}
        <nav className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-x-4
          gap-y-2
          text-sm
          font-medium
          text-slate-600
          lg:gap-x-8
        ">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `whitespace-nowrap transition hover:text-emerald-700 ${
                  isActive
                    ? "font-semibold text-emerald-700"
                    : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Botão */}
        <NavLink
          to="/produtos"
          className="
            shrink-0
            rounded-full
            bg-emerald-600
            px-3
            py-2
            text-xs
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-emerald-700
            sm:px-4
            sm:text-sm
          "
        >
          Loja agora
        </NavLink>

      </div>
    </header>
  );
}

export default NavBar;