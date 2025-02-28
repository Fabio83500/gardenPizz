import React from 'react'

export default function layout() {
  return (
    <div>
         <div id="apropos" className='px-4 md:px-8 lg:px-0'>
            <h2 className='text-4xl text-center text-[#EC5F34] my-10 '>A propos de nous </h2>
            <div className='flex items-center justify-center'>
              <p className='text-white text-xl text-center xl:px-20'>Bienvenue sur notre site ! Nous sommes une pizzeria située à Six-Fours-les-Plages, ouverte 7 jours
                sur 7, où vous pouvez déguster nos délicieuses pizzas sur place ou profiter de notre service de
                livraison dans les communes de Six-Fours-les-Plages, Sanary-sur-Mer, Ollioules
                et La Seyne-sur-Mer.<br /><br />
                Pour vous régaler tout en faisant des économies, nous vous proposons une offre spéciale : pour l'achat de
                deux pizzas, la troisième est offerte.
                Notre équipe passionnée met un point d'honneur à vous servir des plats de qualité,
                préparés avec des ingrédients frais et savoureux.<br /><br />

                Nous vous invitons à découvrir notre menu varié et à profiter de nos services pour une expérience
                culinaire agréable.</p>
            </div>
          </div>
    </div>
  )
}
