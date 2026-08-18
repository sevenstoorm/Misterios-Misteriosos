import Card from "../../components/Card";

function SectionHistory() {
  return (
    <>
      <main className="w-[80%] pb-10 bg-emerald-50 px-6 md:px-12 lg:px-25">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <Card>
            <div className="flex items-center gap-3 mb-3">
              <h2 className="border-b-2 border-emerald-600 w-fit mb-0">SOBRE NÓS</h2>
              <span className="ml-auto text-sm text-gray-500">Desde 1976</span>
            </div>

            <h1 className="text-[26px] md:text-[30px] font-semibold mb-2">
              NEXUS há 50 Anos
              <br />
              transformando sonhos em realidades
            </h1>

            <p className="mt-4">
              Há 50 anos, a Nexus constrói sua história com dedicação, inovação
              e compromisso com seus clientes. Ao longo de cinco décadas no
              mercado, desenvolvemos experiência e evoluímos com novas
              tecnologias. Atuamos com excelência e foco em soluções que geram
              valor real para nossos parceiros.
            </p>

            <div className="mt-6">
              <h3 className="text-sm text-gray-600 mb-2">Destaques</h3>
              <div className="flex gap-2">
               
               
              </div>
            </div>
          </Card>

          <Card className="p-0">
            <img
              src="/empresa.jpg"
              alt="imagem_empresa"
              className="w-full h-[320px] lg:h-[450px] object-cover rounded-2xl"
            />
          </Card>
        </div>
      </main>
    </>
  );
}

export default SectionHistory;