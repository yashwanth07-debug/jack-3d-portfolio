import React from 'react';
import FadeIn from './FadeIn';

const services = [
  {
    number: '01',
    name: '3D Modeling',
    description: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services-section"
      className="relative bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-15"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 0.9 }}
          >
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {services.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className="border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 md:gap-16 w-full">
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                <div className="flex flex-col justify-center flex-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-tight mb-2"
                    style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C]/60 max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
