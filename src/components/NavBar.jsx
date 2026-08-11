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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-black text-white">
            N
          </div>
          <span className="text-sm font-bold tracking-[0.25em] text-slate-900">
            NEXUS
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `transition hover:text-emerald-700 ${
                  isActive ? "text-emerald-700 font-semibold" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/produtos"
          className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
        >
          Loja agora
        </NavLink>
      </div>
    </header>
  );
}

export default NavBar;
