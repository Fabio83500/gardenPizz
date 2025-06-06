import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gardenPizz from '../../public/assets/images/gardenPizz.png'

export default function Footer() {
    return (
        <>
            <footer className=" bg-[#131615] shadow-sm ">
          <div className="w-full text-white max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="#accueil" className="flex justify-center items-center mb-4 sm:mb-0 space-x-3 ">
                <Image src={gardenPizz} className='w-40' alt="Logo" />
              </a>
              <ul className="font-medium text sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="/#apropos" className="hover:underline me-4 md:me-6">A propos</a>
                </li>
                <li>
                  <a href="/#carte" className="hover:underline me-4 md:me-6">La carte</a>
                </li>
                <li>
                  <a href="/mentions-legales" className="hover:underline me-4 md:me-6">Mention légales</a>
                </li>
              </ul>
            </div>
            <div className='flex space-x-4 items-center mt-4 lg:mt-0 justify-center '>
              <Link href="https://www.facebook.com/p/Garden-Pizz-61550604661358/?locale=fr_FR">
                <svg xmlns="http://www.w3.org/2000/svg" fill='white' x="0px" y="0px" width="30" height="30"
                  viewBox="0 0 50 50">
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg></Link>
              <Link href="https://www.instagram.com/garden_pizz/">
                <svg xmlns="http://www.w3.org/2000/svg" fill='white' x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg></Link>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm ">© 2025
              <a href="#accueil" className="hover:underline"> GardenPizz </a>.Tous droits réservés .</span>
          </div>
        </footer>
        </>
    )
}
