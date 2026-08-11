function Hero() {
  return (
    <section className="bg-linear-to-br from-emerald-900 via-emerald-800 to-green-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-100">
            Catálogo
          </span>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Produtos da nossa loja
          </h1>
          <p className="mt-4 max-w-lg text-base text-emerald-50/90">
            Equipamentos gamer selecionados para performance, conforto e estilo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;