import { FiShoppingCart, FiStar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "Headset Storm V2",
    description:
      "Drivers de 50mm, cancelamento de ruído e microfone destacável com qualidade de estúdio.",
    price: "R$ 549",
    image:
      "https://images.pexels.com/photos/12304813/pexels-photo-12304813.jpeg?_gl=1*cxmb03*_ga*MTY1MzA4MTg1Ni4xNzY0MDk1NTIy*_ga_8JE65Q40S6*czE3ODY0NjU0MzMkbzMkZzEkdDE3ODY0NjU1MzAkajU5JGwwJGgw",
    tag: "Áudio",
    rating: 4.7,
  },
  {
    name: "Teclado Phantom TKL",
    description:
      "Formato tenkeyless, switches brown e iluminação RGB com 16.8 milhões de cores.",
    price: "R$ 629",
    image:
      "https://images.pexels.com/photos/29593536/pexels-photo-29593536.jpeg?_gl=1*k0yxcy*_ga*MTY1MzA4MTg1Ni4xNzY0MDk1NTIy*_ga_8JE65Q40S6*czE3ODY0NjU0MzMkbzMkZzEkdDE3ODY0NjU0ODgkajUkbDAkaDA.",
    tag: "Mecânico",
    rating: 4.8,
  },
  {
    name: "Mouse Nova Pro",
    description:
      "Sensor óptico de 18.000 DPI, peso ajustável e 6 botões programáveis.",
    price: "R$ 289",
    image:
      "https://images.pexels.com/photos/34396238/pexels-photo-34396238.jpeg?_gl=1*6codkt*_ga*MTY1MzA4MTg1Ni4xNzY0MDk1NTIy*_ga_8JE65Q40S6*czE3ODY0NjU0MzMkbzMkZzEkdDE3ODY0NjU0NDAkajUzJGwwJGgw",
    tag: "Leve",
    rating: 4.6,
  },
  {
    name: 'Monitor UltraWide 34"',
    description:
      "Resolução 3440x1440, 144Hz e curvatura 1500R para imersão total.",
    price: "R$ 2.499",
    image:
      "https://images.pexels.com/photos/9300739/pexels-photo-9300739.jpeg?_gl=1*ccyci3*_ga*MTY1MzA4MTg1Ni4xNzY0MDk1NTIy*_ga_8JE65Q40S6*czE3ODY0NjA0MDIkbzIkZzEkdDE3ODY0NjEwNDUkajExJGwwJGgw",
    tag: "UltraWide",
    rating: 4.9,
  },
  {
    name: "PC Gamer Shadow",
    description:
      "RTX 4060, Intel i5 14ª geração, 16GB RAM e SSD 512GB. Excelente custo-benefício.",
    price: "R$ 4.799",
    image:
      "https://images.pexels.com/photos/38388049/pexels-photo-38388049.jpeg?_gl=1*1b4ohqv*_ga*MTY1MzA4MTg1Ni4xNzY0MDk1NTIy*_ga_8JE65Q40S6*czE3ODY0NjA0MDIkbzIkZzEkdDE3ODY0NjA5OTckajU5JGwwJGgw",
    tag: "Custo-benefício",
    rating: 4.8,
  },
  {
    name: "Cadeira Hyper Comfort",
    description:
      "Espuma de alta densidade, ajuste de altura e apoio de cabeça removível.",
    price: "R$ 999",
    image:
      "https://media.istockphoto.com/id/1263458593/pt/foto/black-and-red-comfortable-gaming-chair-isolated-on-a-white-background-furniture-for-computer.jpg?b=1&s=612x612&w=0&k=20&c=967pBKjLmXKBIA0deKVdcLKIxUdZcW8XWvg4VHRbkf0=",
    tag: "Conforto",
    rating: 4.5,
  },
  {
    name: "Mousepad Extended Pro",
    description:
      "Tamanho 90x40cm, costura reforçada e base de borracha antiderrapante.",
    price: "R$ 119",
    image:
      "https://images.pexels.com/photos/9469522/pexels-photo-9469522.jpeg?_gl=1*12w93z4*_ga*MTY1MzA4MTg1Ni4xNzY0MDk1NTIy*_ga_8JE65Q40S6*czE3ODY0NjA0MDIkbzIkZzEkdDE3ODY0NjA5MjEkajQ5JGwwJGgw",
    tag: "Acessório",
    rating: 4.6,
  },
  {
    name: "Controle Dual Force",
    description:
      "Vibração háptica, gatilhos adaptáveis e conexão sem fio de baixa latência.",
    price: "R$ 449",
    image:
      "https://images.pexels.com/photos/10680035/pexels-photo-10680035.jpeg?_gl=1*1seos68*_ga*MTY1MzA4MTg1Ni4xNzY0MDk1NTIy*_ga_8JE65Q40S6*czE3ODY0NjA0MDIkbzIkZzEkdDE3ODY0NjA4NjkkajMwJGwwJGgw",
    tag: "Wireless",
    rating: 4.7,
  },
  {
    name: "Webcam Full HD Pro",
    description:
      "Resolução 1080p 60fps, autofoco e microfone com redução de ruído.",
    price: "R$ 379",
    image:
      "https://media.istockphoto.com/id/1355196396/pt/foto/3d-rendering-object-close-up-of-web-camera-placed-on-laptop-screen-and-blue-wall-with-sun-light.jpg?b=1&s=612x612&w=0&k=20&c=nROsGMosEJrodhwQ-45yMmBGFGLfL44njmgMlnPw5rQ=",
    tag: "Stream",
    rating: 4.6,
  },
];

function Cards() {
  const navigate = useNavigate()
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Nossos produtos
          </span>
          <h2 className="mt-4 text-3xl font-black">Catálogo completo</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map(({ name, description, price, image, tag, rating }) => (
            <article
              key={name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-emerald-950/10 transition hover:-translate-y-1 hover:border-emerald-400/30"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={name}
                  className="h-56 w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-emerald-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-950">
                  {tag}
                </span>
              </div>

              <div className="flex flex-col space-y-4 p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{name}</h3>
                  <div className="flex shrink-0 items-center gap-1 text-amber-300">
                    <FiStar className="text-sm" />
                    <span className="text-sm">{rating}</span>
                  </div>
                </div>

                <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
                  {description}
                </p>

                <p className="text-2xl font-black text-emerald-300">{price}</p>

                <button onClick={() => navigate("/*")} className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300">
                  <FiShoppingCart />
                  Comprar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
