import Image from "next/image";
import React from "react";
import Sobre from "../../public/Sobre.png"

function Footer() {
  return (
    <footer className="footer">
                <div className="scroll-section flex">
            <h3 className="font-mainFont text-center text-4xl w-1/3">Bárbara Lopes</h3>
            <div className="relative w-2/3 h-[70vh]">
              <Image
                src={Sobre}
                alt="image1"
                fill
                className="object-contain md:h-96"
              />
              
            </div>
          </div>
    </footer>
  );
}

export default Footer;