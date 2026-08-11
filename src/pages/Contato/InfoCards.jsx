import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

function InfoCards() {
  const cards = [
    {
      icon: <FaMapMarkerAlt size={20} />,
      titulo: "Endereço",
      texto: (
        <>
          Av. Principal, 1234
          <br />
          Centro – São Paulo/SP
        </>
      ),
    },
    {
      icon: <FaPhone size={20} />,
      titulo: "Telefone",
      texto: (
        <>
          <a
            href="tel:+551134567890"
            className="text-emerald-700 hover:text-emerald-900 transition"
          >
            (11) 3456-7890
          </a>
          <br />
          <a
            href="tel:+5511987654321"
            className="text-emerald-700 hover:text-emerald-900 transition"
          >
            (11) 98765-4321
          </a>
        </>
      ),
    },
    {
      icon: <FaEnvelope size={20} />,
      titulo: "E-mail",
      texto: (
        <>
          <a
            href="mailto:contato@empresa.com"
            className="text-emerald-700 hover:text-emerald-900 transition"
          >
            contato@empresa.com
          </a>
          <br />
          <a
            href="mailto:suporte@empresa.com"
            className="text-emerald-700 hover:text-emerald-900 transition"
          >
            suporte@empresa.com
          </a>
        </>
      ),
    },
    {
      icon: <FaClock size={20} />,
      titulo: "Horário",
      texto: (
        <>
          Seg – Sex: 08h às 18h
          <br />
          Sáb: 09h às 13h
        </>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
        >
          <div className="bg-emerald-600 text-white p-3 rounded-xl">
            {card.icon}
          </div>
          <div>
            <h3 className="font-bold text-emerald-900">{card.titulo}</h3>
            <p className="text-sm text-gray-700 mt-1">{card.texto}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
