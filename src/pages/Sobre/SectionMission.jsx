function SectionMission() {
  return (
    <main className="flex mb-30">
      {/* Imagens */}
      <div className="relative w-[450px] h-[450px]">
        {/* Imagem de trás */}
        <img
          src="/vision.jpg"
          alt="Visão Nexus"
          className="absolute top-20 left-20 w-65 h-100 object-cover rounded-3xl"
        />

        {/* Imagem da frente */}
        <img
          src="/people.jpg"
          alt="Empresa Nexus"
          className="absolute border-10 border-emerald-50 border-solid top-50 left-60 right-0 w-50 h-50 object-cover rounded-3xl "
        />
      </div>

      <section className="mt-15 mr-25 p-1 w-full flex flex-col items-end ">
        <h2 className="border-b-2 border-emerald-600 w-30 mb-2 text-right ">
          NOSSA VISÃO
        </h2>
        <p className="mt-5 mb-5 w-200 text-right">
          Na Nexus, nossa visão é construir um futuro baseado em inovação,
          qualidade e confiança. Buscamos evoluir constantemente, acompanhando
          as transformações do mercado e oferecendo soluções que atendam às
          necessidades dos nossos clientes. Queremos continuar crescendo sem
          perder os valores que construímos ao longo de 50 anos, tornando a
          Nexus uma empresa cada vez mais moderna, reconhecida e preparada para
          os desafios do futuro.
        </p>
      </section>
    </main>
  );
}
export default SectionMission;
