import { FiArrowRight, FiHelpCircle, FiMessageCircle } from "react-icons/fi";

const features = [
  { icon: FiHelpCircle, text: "Respostas rápidas" },
  { icon: FiMessageCircle, text: "Suporte dedicado" },
];

function Hero() {
  return (
    <header className="bg-linear-to-br from-emerald-900 via-emerald-800 to-green-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-100">
              Central de ajuda
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">
                Perguntas Frequentes
              </h1>
              <p className="max-w-md text-base text-emerald-50/90">
                Tire suas dúvidas sobre produtos, entregas, garantias e tudo que
                você precisa saber para montar o setup perfeito.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-emerald-800 shadow-md transition hover:bg-emerald-50"
              >
                Ver perguntas
                <FiArrowRight />
              </a>
              <a
                href="/contato"
                className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Falar com suporte
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {features.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-emerald-50"
                >
                  <Icon className="text-lime-300" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl shadow-emerald-950/20">
            <img
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80"
              alt="Setup gamer e suporte"
              className="h-90 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;