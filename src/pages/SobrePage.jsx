import SectionHistory from "./Sobre/SectionHistory";
import SectionMission from "./Sobre/SectionMission";
import SectionVision from "./Sobre/SectionVision";
import SectionValue from "./Sobre/SectionValue";
import SectionGroup from "./Sobre/SectionGroup";
import Divider from "../components/Divider";
import Stats from "../components/Stats";
import Badge from "../components/Badge";
import DecorativeBlob from "../components/DecorativeBlob";

function SobrePage() {
  return (
    <main className="bg-emerald-50 flex flex-col items-center justify-center">
      <header className="w-full bg-emerald-100 py-12 mb-6 relative overflow-hidden">
        <DecorativeBlob className="absolute -top-20 -left-20 w-72 opacity-60" />
        <div className="w-[80%] mx-auto text-center relative z-10">
          <h1 className="text-3xl font-semibold mb-2">Sobre a Nexus</h1>
          <p className="max-w-2xl mx-auto mb-4">
            Conheça nossa história, missão, visão e os valores que
            orientam nossas ações todos os dias.
          </p>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge>50 anos</Badge>
            <Badge>Inovação</Badge>
            <Badge>Parcerias</Badge>
          </div>

          <Stats
            items={[
              { label: "Anos", value: "50+" },
              { label: "Projetos", value: "200+" },
              { label: "Clientes", value: "1k+" },
            ]}
          />
        </div>
      </header>

      <div className="w-full flex flex-col items-center gap-10 pb-20">
        <SectionHistory />
        <Divider />
        <SectionMission />
        <Divider />
        <SectionVision />
        <Divider />
        <SectionValue />
        <Divider />
        <SectionGroup />
      </div>
    </main>
  );
}
export default SobrePage;
