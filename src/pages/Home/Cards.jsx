import { FiShoppingCart, FiStar } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";

const products = [
  {
    name: "Headset Pulse X",
    price: "R$ 899",
    oldPrice: "R$ 1.199",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    tag: "Popular",
  },
  {
    name: "Teclado Aurora",
    price: "R$ 749",
    oldPrice: "R$ 999",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80",
    tag: "Novo",
  },
  {
    name: "Mouse Drift",
    price: "R$ 399",
    oldPrice: "R$ 599",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
    tag: "Best",
  },
  {
    name: 'Monitor 27"',
    price: "R$ 1.799",
    oldPrice: "R$ 2.299",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",
    tag: "4K",
  },
  {
    name: "PC Titan",
    price: "R$ 6.499",
    oldPrice: "R$ 8.199",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80",
    tag: "RTX",
  },
  {
    name: "Cadeira Apex",
    price: "R$ 1.299",
    oldPrice: "R$ 1.699",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    tag: "Ergo",
  },
];

function Cards() {
  const navigate = useNavigate()
  return (
    <section id="produtos" className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Catálogo
            </span>
            <h2 className="mt-4 text-3xl font-black">Produtos em destaque</h2>
          </div>

          <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Ver todos
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map(({ name, price, oldPrice, image, tag }) => (
            <article
              key={name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-emerald-950/10"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={name}
                  className="h-60 w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-emerald-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-950">
                  {tag}
                </span>
              </div>

              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{name}</h3>
                  <div className="flex items-center gap-1 text-amber-300">
                    <FiStar />
                    <span className="text-sm">4.9</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <p className="text-2xl font-black text-emerald-300">
                    {price}
                  </p>
                  <span className="text-sm text-slate-400 line-through">
                    {oldPrice}
                  </span>
                </div>

                <button onClick={() => navigate("/*")} className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">
                  <FiShoppingCart />
                  Comprar
                </button>
              </div>
            </article>
          ))}
        </div>

        <div
          id="ofertas"
          className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-500 p-6 text-center text-white sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-100">
            Oferta relâmpago
          </p>
          <h3 className="mt-3 text-2xl font-black">
            Combo setup gamer por R$ 2.499
          </h3>
          <button onClick={() => navigate("/*")} className="mt-5 rounded-full bg-white px-5 py-3 font-bold text-emerald-800">
            Aproveitar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cards;
