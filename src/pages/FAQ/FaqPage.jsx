import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import Hero from "./Hero";

const faqData = [
  {
    id: 1,
    pergunta: "Qual o prazo de entrega dos produtos?",
    resposta:
      "O prazo de entrega varia de acordo com a sua região. Para capitais e regiões metropolitanas, a entrega costuma ocorrer entre 3 e 7 dias úteis. Para demais localidades, o prazo pode chegar a 12 dias úteis. Você recebe o código de rastreio assim que o pedido é despachado.",
  },
  {
    id: 2,
    pergunta: "Os produtos têm garantia?",
    resposta:
      "Sim! Todos os produtos da NEXUS possuem garantia do fabricante, que varia de 12 a 36 meses dependendo do item. Além disso, oferecemos 7 dias de garantia de satisfação: se não gostar, pode devolver sem custo adicional.",
  },
  {
    id: 3,
    pergunta: "Posso montar um PC gamer sob encomenda?",
    resposta:
      "Claro! Temos a opção de montagem personalizada. Você escolhe processador, placa de vídeo, memória, armazenamento e gabinete. Nossa equipe monta, testa e envia o PC pronto para usar, com garantia de 12 meses na montagem.",
  },
  {
    id: 4,
    pergunta: "Quais formas de pagamento são aceitas?",
    resposta:
      "Aceitamos Pix (com desconto especial), cartão de crédito em até 12x, boleto bancário e transferência. Todas as transações são processadas em ambiente seguro.",
  },
  {
    id: 5,
    pergunta: "Como funciona a troca ou devolução?",
    resposta:
      "Você tem até 7 dias corridos após o recebimento para solicitar a devolução, desde que o produto esteja na embalagem original e sem sinais de uso. Para trocas por defeito, o prazo é o da garantia. Basta entrar em contato pelo WhatsApp ou e-mail de suporte.",
  },
  {
    id: 6,
    pergunta: "Vocês fazem frete grátis?",
    resposta:
      "Sim! Oferecemos frete grátis para compras acima de R$ 499,00 em todo o Brasil. Em algumas promoções e combos, o frete grátis é liberado independente do valor.",
  },
  {
    id: 7,
    pergunta: "Os periféricos são originais?",
    resposta:
      "100% originais e com nota fiscal. Trabalhamos apenas com marcas oficiais (Logitech, Razer, HyperX, Redragon, Corsair, etc.). Não vendemos produtos paralelos ou recondicionados sem identificação clara.",
  },
  {
    id: 8,
    pergunta: "Como entro em contato com o suporte?",
    resposta:
      "Você pode falar conosco pelo WhatsApp, e-mail ou formulário da página de Contato. Nosso horário de atendimento é de segunda a sexta, das 9h às 18h. Respondemos em até 24 horas úteis.",
  },
];

function FAQItem({ pergunta, resposta, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:shadow-md">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-semibold text-slate-900">{pergunta}</span>
        <FiChevronDown
          className={`flex-shrink-0 text-emerald-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-emerald-50 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-600">
          {resposta}
        </div>
      </div>
    </div>
  );
}

function FaqPage() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <Hero />

      <section
        id="faq"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-2xl text-white">
            <FiHelpCircle />
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            Tire suas dúvidas
          </h2>
          <p className="mt-2 text-slate-600">
            Clique em uma pergunta para ver a resposta completa
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              pergunta={item.pergunta}
              resposta={item.resposta}
              isOpen={openId === item.id}
              onToggle={() => toggleItem(item.id)}
            />
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-500 p-6 text-center text-white sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-100">
            Ainda tem dúvidas?
          </p>
          <h3 className="mt-3 text-2xl font-black">
            Fale com nosso time de suporte
          </h3>
          <p className="mt-2 text-emerald-50">
            Estamos prontos para te ajudar a montar o setup ideal.
          </p>
          <a
            href="/contato"
            className="mt-5 inline-block rounded-full bg-white px-6 py-3 font-bold text-emerald-800 transition hover:bg-emerald-50"
          >
            Ir para Contato
          </a>
        </div>
      </section>
    </>
  );
}

export default FaqPage;