import Card from "../../components/Card";

function SectionMission() {
  return (
    <main className="w-[80%] mx-auto py-20 bg-emerald-50 px-6 md:px-12 lg:px-25">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <Card className="p-0">
          <img
            src="/people.jpg"
            alt="Equipe Nexus"
            className="w-full h-[320px] lg:h-[450px] object-cover rounded-2xl"
          />
        </Card>

        <Card>
          <h2 className="border-b-2 border-emerald-600 w-fit mb-2">NOSSA MISSÃO</h2>
          <p className="mt-4">
            Nossa missão é entregar soluções de alta qualidade que gerem valor
            real aos clientes e à comunidade. Atuamos com foco na excelência,
            atendimento humano e inovação contínua, garantindo serviços
            confiáveis e adaptados às necessidades de cada parceiro.
          </p>
        </Card>
      </div>
    </main>
  );
}

export default SectionMission;
