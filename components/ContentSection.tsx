import { SellContent } from "@/constants";
import React from "react";
import SellsText from "./ui/SellsText";
import Image from "next/image";
import Feature from '@/public/images/Feature.png'

const ContentSection = () => {
  return (
    <section className="px-14  ">
      <div className="text-center max-w-md mx-auto md:justify-center  md:text-xl md:max-w-3xl ">
        <h1 className="text-black-1 font-extrabold md:text-4xl sm:text-2xl">
          Votre compagnon idéal pour créer des contenus captivants
        </h1>
        <p className="mt-4 text-gray-500 font-normal text-xl ">
          Augmentez votre productivité de manière exponentielle et libérez votre
          créativité avec notre assistant avancé pour des contenus captivants
          sur tous vos canaux.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 px-16 mt-32">
        <div className="grid-cols-1">
          <h2 className="font-extrabold text-3xl tracking-tight text-black-1 ">Intégrer notre outil dans votre processus créatif</h2>
          <p className="mt-3 text-Slate-200 text-lg font-normal">
            Grâce à notre outil magique et intuitif, vous pouvez maintenant
            générer des posts captivants en quelques instants, libérant ainsi du
            temps pour vous concentrer sur d&apos;autres aspects stratégiques de
            votre entreprise. En intégrant notre solution dans votre workflow,
            vous pouvez maximiser votre efficacité et augmenter l&apos;engagement de
            votre audience de manière significative.
          </p>
          <div className="mt-10">
            {SellContent.map((item, index) => (
              <div key={index} className=" flex flex-col gap-10">
                <SellsText
                  titre={item.title}
                  content={item.content}
                  icons={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" grid-cols-1 px-[51px] py-3 ">
          <Image src={Feature} alt="faeture" className="w-full h-full object-contain"  /> 
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
