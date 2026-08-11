import { NavLink } from "react-router-dom";
import {
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiYoutube,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
                N
              </div>
              <span className="text-sm font-bold tracking-[0.2em] text-emerald-300">
                NEXUS
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Loja gamer com produtos para desempenho, conforto e estilo.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <NavLink to="/" className="transition hover:text-emerald-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sobre"
                  className="transition hover:text-emerald-300"
                >
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/produtos"
                  className="transition hover:text-emerald-300"
                >
                  Produtos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className="transition hover:text-emerald-300"
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <FiPhone className="text-emerald-300" />
                <a
                  href="tel:+551140028922"
                  className="transition hover:text-white"
                >
                  (11) 4002-8922
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-emerald-300" />
                <a
                  href="mailto:contato@nexusgames.com.br"
                  className="transition hover:text-white"
                >
                  contato@nexusgames.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-emerald-300" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">© 2026 Nexus Games</p>
          <div className="flex items-center gap-4 text-lg text-slate-300">
            <FiInstagram />
            <FiYoutube />
            <FiMail />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
