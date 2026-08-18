import Card from "../../components/Card";

function SectionValue() {
  return (
    <main className="w-[80%] mx-auto py-20 bg-emerald-50 px-6 md:px-12 lg:px-25">
      <div className="max-w-3xl mx-auto">
        <Card>
          <h2 className="border-b-2 border-emerald-600 w-fit mx-auto mb-4 text-center">
            NOSSOS VALORES
          </h2>

          <h1 className="text-[30px] font-semibold mb-4 text-center">
            Princípios que fazem parte da nossa história
          </h1>

          <p className="text-center">
            Na Nexus, nossos valores são baseados em ética, respeito, inovação
            e compromisso. Agimos com transparência e responsabilidade,
            valorizando clientes, colaboradores e parceiros. Esses princípios
            guiam nossas decisões e ações diariamente.
          </p>
        </Card>
      </div>
    </main>
  );
}

export default SectionValue;