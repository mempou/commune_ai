"use client"

import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars2Icon, CheckIcon } from "@heroicons/react/24/outline";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Logo from "@/public/images/Logo.jpg";
import Image from "next/image";
import ContentSection from "./ContentSection";
import Button from "./ui/Button";
import GenerationForm from "./ui/IGenerateInput";
import Link from "next/link";

const navigation = [
  { name: "Nouveautés ✨ ", href: "/ComingSoon" },
  { name: "Rejoindre l’aventure", href: "JoinUs" },
];

const HeroSection = () => {
  const [loading, setLoading] = useState(false)


  return (
    <>
      <div className="relative bg-gray-50 overflow-hidden">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center w-30  px-4 md:mx-16 mt-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <Image className="h-8 w-auto sm:h-10" src={Logo} alt="" />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <div className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <Bars2Icon className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10 ">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${item.name === 'Nouveautés ✨' ?'text-SECONDARY' : ' font-medium text-gray-500 hover:text-gray-900 cursor-pointer '}  `}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 bg-white z-30 md:right-0">
            <span className="inline-flex rounded-md shadow">
              <a
                href="/login"
                className="inline-flex    "
              >
                <Button title=' Se connecter' /> 
               
              </a>
            </span>
          </div>
        </nav>

        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-5xl  xl:text-6xl">
                <span className="block md:inline ">
                  Boostez votre présence  <br/>sur les
                </span>{" "}
               
                <span className="block text-PRIMARY xl:inline">
                  réseaux sociaux
                </span>
              </h1>
              <p className=" mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Notre outil magique génère pour vous des posts optimisés pour
                Facebook à partir de n'importe quel thème, texte ou URL. Gagnez
                du temps et améliorez votre engagement dès aujourd'hui !
              </p>
              <div className="mt-5 max-w-xl  mx-auto sm:flex items-baseline sm:justify-center md:mt-8">
               <input 
                placeholder="Entrez votre theme ou url "
                type="text"
                className="text-slate-600 w-full p-2 border border-Slate-200 ring-transparent ring-slate-100" 
                />
                <button type="submit" disabled={loading} className="bg-PRIMARY text-white border  whitespace-nowrap mt-6 bg-red-1 px-[38.5px] py-2">Générer le post</button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <ContentSection /> 
    </>
  );
};

export default HeroSection;
