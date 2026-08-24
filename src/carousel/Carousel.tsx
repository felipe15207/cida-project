import { useEffect, useState } from "react";
import "./carousel.css";

type Slide = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop&q=80",
    title: "Tecnologia que transforma",
    description: "Soluções modernas para criar experiências digitais.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=720&h=480&fit=crop&q=80",
    title: "O futuro é digital",
    description: "Infraestrutura, inovação e conectividade em um só lugar.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=720&h=480&fit=crop&q=80",
    title: "Desenvolva suas ideias",
    description: "Transforme código em produtos e experiências incríveis.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=720&h=480&fit=crop&q=80",
    title: "Dados e inteligência",
    description: "Use dados para tomar decisões melhores.",
  },
];


export function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="carousel" aria-label="Galeria de imagens">
      <div
        className="carousel__track"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <article className="carousel__slide" key={slide.id}>
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel__image"
            />

            <div className="carousel__overlay">
              <div className="carousel__content">
                

                <button className="carousel__button">
                  Saiba mais
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        className="carousel__arrow carousel__arrow--left"
        onClick={previousSlide}
        aria-label="Slide anterior"
      >
        ‹
      </button>

      <button
        className="carousel__arrow carousel__arrow--right"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        ›
      </button>

      <div className="carousel__dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`carousel__dot ${
              index === current ? "carousel__dot--active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={index === current}
          />
        ))}
      </div>
    </section>
  );
}
