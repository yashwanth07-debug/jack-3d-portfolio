import React, { useEffect, useRef } from 'react';

const row1Images = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const row2Images = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      const x1 = offset - 200;
      const x2 = -(offset - 200);

      row1Ref.current.style.transform = `translate3d(${x1}px, 0, 0)`;
      row2Ref.current.style.transform = `translate3d(${x2}px, 0, 0)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full animate-fade-in"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1 - Moves Right */}
        <div className="w-full overflow-hidden">
          <div
            ref={row1Ref}
            className="flex gap-3 flex-nowrap w-max"
            style={{ willChange: 'transform' }}
          >
            {tripledRow1.map((url, index) => (
              <img
                key={`r1-${index}`}
                src={url}
                alt={`Creative render preview ${index + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 select-none border border-white/5"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Left */}
        <div className="w-full overflow-hidden">
          <div
            ref={row2Ref}
            className="flex gap-3 flex-nowrap w-max"
            style={{ willChange: 'transform' }}
          >
            {tripledRow2.map((url, index) => (
              <img
                key={`r2-${index}`}
                src={url}
                alt={`Creative render preview ${index + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 select-none border border-white/5"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
