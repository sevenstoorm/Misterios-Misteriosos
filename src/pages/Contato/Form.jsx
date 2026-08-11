import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Label from "./Label";

function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    setEnviado(true);
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden">
      {/* card */}
      <div className="bg-emerald-800 text-white px-6 py-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <FaPaperPlane className="text-emerald-300" />
          Envie sua mensagem
        </h2>
      </div>

      <div className="p-6 md:p-8">
        {enviado && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-center font-medium">
            Mensagem enviada com sucesso! Entraremos em contato em breve.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              placeholder="Nome completo"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200 bg-white text-black placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="cibongos@exemplo.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200 bg-white text-black placeholder-gray-400"
            />
          </div>

          {/* assanto */}
          <div className="space-y-2">
            <Label htmlFor="assunto">Assunto</Label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              placeholder="Assunto"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200 bg-white text-black placeholder-gray-400"
            />
          </div>

          {/* Mensagem */}
          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Mensagem"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all duration-200 bg-white text-black placeholder-gray-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaPaperPlane />
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;