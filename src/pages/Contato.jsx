import Formulario from "./Contato/Form";
import InfoCards from "./Contato/InfoCards";
import Mapa from "./Contato/Mapa";

function ContatoPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <Formulario />
          <div className="space-y-8">
            <InfoCards />
            <Mapa />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContatoPage;
