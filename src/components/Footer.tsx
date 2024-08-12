import Image from "next/image";
import React from "react";
import Sobre from "../../public/Sobre.png";

function Footer() {
  return (
    <footer className="footer text-white">
      <div className="scroll-section flex flex-col sm:flex-row">
        <div className="font-mainFont text-center text-4xl sm:w-1/3">

        <h3 className="">
          Bárbara Lopes
        </h3>
        <p className="text-xl font-font3 mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium delectus sunt doloribus officiis tempora deleniti, harum eligendi perferendis vero, eum, nam laboriosam? Excepturi nulla quos libero ad? Odit, hic pariatur!</p>
        </div>

        <div className="relative sm:w-2/3 w-96 h-[70vh]">
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
