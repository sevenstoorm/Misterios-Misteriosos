function SectionHistory() {
  return (
    <>
      <main className="w-full pb-10 flex flex-col lg:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-25">

        <section className="mt-20 lg:mt-35 w-full lg:w-1/2">
          <h2 className="border-b-2 border-emerald-600 w-fit mb-2">
            SOBRE NÓS
          </h2>

          <h1 className="text-[26px] md:text-[30px] font-semibold mb-1">
            NEXUS há 50 Anos <br />
            transformando sonhos em realidades
          </h1>

          <p className="mt-5 mb-5 w-full lg:w-[90%]">
            Há 50 anos, a Nexus constrói sua história com dedicação, inovação e
            compromisso com seus clientes. Ao longo de cinco décadas no mercado,
            desenvolvemos nossa experiência e evoluímos junto com as novas
            tecnologias e necessidades do público. Nossa missão é oferecer
            produtos e soluções de qualidade, combinando confiança, tecnologia
            e excelência em cada experiência. Mais do que acompanhar as mudanças
            do mercado, buscamos estar sempre à frente, criando novas
            possibilidades para nossos clientes.
          </p>
        </section>

        <img
          src="/empresa.jpg"
          alt="imagem_empresa"
          className="w-full mt-20 max-w-[340px] md:max-w-[400px] lg:w-85 rounded-3xl"
        />

      </main>

      <div className="w-[70%] h-[2px] bg-emerald-600 mx-auto my-20"></div>
    </>
  );
}

export default SectionHistory;