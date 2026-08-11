import { FiCpu, FiGift, FiHeadphones, FiTruck } from "react-icons/fi";

const highlights = [
  {
    icon: FiCpu,
    title: "Desempenho",
    description: "Hardware potente para jogar sem travar.",
  },
  {
    icon: FiHeadphones,
    title: "Periféricos",
    description: "Áudio e precisão para cada partida.",
  },
  {
    icon: FiTruck,
    title: "Entrega",
    description: "Envio rápido e seguro para todo Brasil.",
  },
  {
    icon: FiGift,
    title: "Ofertas",
    description: "Promoções especiais em produtos premium.",
  },
];

function Destaques() {
  return (
    <section
      id="destaques"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black text-slate-900">Destaques</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-lg text-white">
              <Icon />
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destaques;
