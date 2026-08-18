import Card from "../../components/Card";

function SectionVision() {
  return (
    <main className="w-[80%] mx-auto py-20 bg-emerald-50 px-6 md:px-12 lg:px-25">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <Card>
          <h2 className="border-b-2 border-emerald-600 w-fit mb-2">NOSSO GRUPO</h2>
          <p className="mt-4">
            O Grupo Nexus reúne empresas e talentos que atuam de forma integrada
            para oferecer soluções completas e inovadoras. Compartilhamos
            conhecimento, tecnologia e recursos para entregar valor escalável e
            sustentado aos nossos clientes.
          </p>
        </Card>

        <Card className="p-0">
          <img
            src="/empresa.jpg"
            alt="Nosso Grupo"
            className="w-full h-[320px] lg:h-[450px] object-cover rounded-2xl"
          />
        </Card>
      </div>
    </main>
  );
}

export default SectionVision;