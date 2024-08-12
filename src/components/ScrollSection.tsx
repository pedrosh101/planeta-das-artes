"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import capaImp from "../../public/capaImp.png";
import capaOrig from "../../public/capaOrig.jpg";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer font-font2 text-white sm:text-4xl text-2xl">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section flex flex-col space-y-8 sm:tracking-[40px] tracking-[10px] ">
            <h3 className="ml-10">Impressões</h3>
            <div className="relative w-full h-[70vh]">
              <Image
                src={capaImp}
                alt="image1"
                fill
                className="object-contain md:h-96 mx-4 sm:mx-0"
              />
            </div>
          </div>
          <div className="scroll-section px-16 sm:px-0">
            <div className="flex flex-col sm:w-[48vw] w-[90vw]">
              <h3 className="font-mainFont sm:text-5xl text-xl tracking-wider mb-4">
                IMPRESSÕES DE ALTA QUALIDADE
              </h3>
              <h2 className="sm:text-2xl text-lg font-font3">
                São as reproduções das minhas ilustrações originais, produzidos
                em baixa tiragem, os prints são impressoes em impressora
                profissional depois das etapas de digitalização, edição das
                imagens. os prints são uma forma de democratizar, de maneira
                justa, o acesso à minha arte.
              </h2>
              <button className="w-fit font-font3 mt-3 hover:bg-amber-400/30 text-base text-white font-semibold hover:text-white py-2 px-4 border border-ehite hover:border-transparent rounded">
                Ver Todas
              </button>
            </div>
          </div>
          <div className="scroll-section flex flex-col space-y-8 sm:tracking-[40px] tracking-[10px] ">
            <h3 className="ml-10">Originais</h3>
            <div className="relative w-full h-[70vh]">
              <Image
                src={capaOrig}
                alt="image1"
                fill
                className="object-contain md:h-96 mx-4 sm:mx-0"
              />
            </div>
          </div>
          <div className="scroll-section px-16 sm:px-0">
            <div className="flex flex-col sm:w-[48vw] w-[90vw]">
              <h3 className="font-mainFont sm:text-5xl text-xl tracking-wider mb-4">
                AO &quot;VIVO&quot; E A &quot;CORES&quot;
              </h3>
              <h2 className="sm:text-2xl text-lg font-font3">
                Minha produção artística de concentra na técnica da aquarela,
                porém pode ser que você encontre por aqui alguns trabalhos em
                guache e acrílica sobre papel ou tela. Os preços diferem dos
                prints, pois apresentam qualidade superior, tanto em termos de
                pigmento, quanto de superfície.
              </h2>
              <button className="w-fit font-font3 mt-3 hover:bg-amber-400/30 text-base text-white font-semibold hover:text-white py-2 px-4 border border-ehite hover:border-transparent rounded">
                Ver Todas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
