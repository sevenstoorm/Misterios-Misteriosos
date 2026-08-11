import { FaMapMarkerAlt } from "react-icons/fa";
import lucasboy from "/public/femlucasboy.png";
function Mapa() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl border border-emerald-100">
      <div className="bg-emerald-800 text-white px-5 py-3 font-semibold flex items-center gap-2">
        <FaMapMarkerAlt />
        Nossa Localização
      </div>
      <div className="relative bg-gray-200 h-64 md:h-72">
        <img
          src={lucasboy}
          alt="Mapa ideias"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-emerald-900/20 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg text-center">
            <p className="font-bold text-emerald-900">Av. Gionicios, 1945</p>
            <p className="text-sm text-gray-700">C</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mapa;