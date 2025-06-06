import Head from 'next/head'
import React, { useState } from 'react';
import Image from 'next/image';
import Hero from "@/components/Hero/layout"
import Carte from "@/components/Carte/layout"
import Localisation from "@/components/Localisation/layout"
import Apropos from "@/components/Apropos/layout"
import Carroussel from "@/components/Caroussel/layout"
import gardenPizz from "@/public/assets/images/gardenPizz.png"

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>GardenPizz</title>
        <meta name="description" content="Bienvenue sur notre site ! Nous sommes une pizzeria située à Six-Fours-les-Plages, ouverte 7 jours
                sur 7, où vous pouvez déguster nos délicieuses pizzas sur place ou profiter de notre service de
                livraison dans les communes de Six-Fours-les-Plages, Sanary-sur-Mer, Ollioules" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#EB3A3A"></meta>
        <link rel="icon" href="/engine.ico" />
      </Head>
      
      <section id="accueil">
        <nav className="bg-[#131615] z-50 relative sticky top-0 shadow-lg">
          <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-0">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src={gardenPizz} alt='logo garden pizz' width={100} height={100} />
            </a>
            <button onClick={handleClick} className="md:hidden text-white">
              {isOpen ? (
                // Icône croix
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icône burger
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
            <div className='hidden md:block'>
              <ul className="flex space-x-10 items-center text-white ">
                <li><a className="w-full hover:text-[#EB3A3A]" href="/#accueil">Accueil</a></li>
                <li><a className="w-full hover:text-[#EB3A3A]" href="/#carte">La carte</a></li>
                <li><a className="w-full hover:text-[#EB3A3A]" href="/#apropos">A propos</a></li>
              </ul>
            </div>
            {/* Menu Mobile */}
            <div className={`${isOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-[#131615] 
      text-white md:hidden`}>
              <ul className="flex flex-col p-4 space-y-2">
                <li><a href="/#carte" className="block py-2 px-3">La carte</a></li>
                <li><a href="/#apropos" className="block py-2 px-3">A propos</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <Hero />

        <div className='max-w-7xl mx-auto'>
          <Carte />
          <Apropos />
          <Localisation />
        </div>
        <Carroussel />
      </section>
    </>
  );
}
