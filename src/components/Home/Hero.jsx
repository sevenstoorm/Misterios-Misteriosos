import { FiArrowRight, FiShield, FiZap } from "react-icons/fi";

const features = [
  { icon: FiZap, text: "Entrega rápida" },
  { icon: FiShield, text: "Garantia premium" },
];

function Hero() {
  return (
    <header className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
              Setup gamer
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">
                Equipamentos para você jogar melhor.
              </h1>
              <p className="max-w-md text-base text-slate-300">
                PCs, periféricos e acessórios com performance, conforto e estilo
                para o seu setup.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950">
                Ver catálogo
                <FiArrowRight />
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white">
                Saiba mais
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {features.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                >
                  <Icon className="text-cyan-300" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80"
              alt="Setup gamer"
              className="h-90 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
