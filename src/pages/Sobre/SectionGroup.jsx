import Card from "../../components/Card";

function SectionGroup() {
  return (
    <main className="w-[80%] mx-auto py-20 bg-emerald-50 px-6 md:px-12 lg:px-25">
      <div className="max-w-3xl mx-auto">
        <Card>
          <h2 className="border-b-2 border-emerald-600 w-fit mx-auto mb-4 text-center">
            NOSSO GRUPO
          </h2>

          <h1 className="text-[30px] font-semibold mb-4 text-center">
            Um grupo forte, preparado para o futuro
          </h1>

          <p className="text-center">
            O Grupo Nexus reúne experiência, inovação e dedicação para oferecer
            soluções de qualidade aos nossos clientes. Ao longo da trajetória,
            crescemos e nos adaptamos mantendo os valores e buscando novas
            oportunidades.
          </p>
        </Card>
      </div>
    </main>
  );
}

export default SectionGroup;