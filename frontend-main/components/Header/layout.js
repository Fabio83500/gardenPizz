import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gardenPizz from '../../public/assets/images/gardenPizz.png'

export default function Header() {
    return (
        <>
            <section className="hidden relative w-full px-4 text-gray-700 bg-white py-3 body-font shadow-lg">
                <div className="container flex flex-row items-center justify-between mx-auto  max-w-7xl">

                    <Link href="/" className="">
                        <Image src={gardenPizz} width="52" height="52" />
                    </Link>

                    <nav className="top-0 left-0 z-0 flex items-center justify-end w-full h-full space-x-10 text-base ">
                        <Link href="/" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-purple-500" >
                            <span className="block">Accueil</span>
                        </Link>
                        <Link href="/blog" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-purple-500" >
                            <span className="block">Blog</span>
                        </Link>
                        <Link href="/liste" className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-purple-500" >
                            <span className="block">Contact</span>
                        </Link>
                    </nav>
                </div>
            </section>
        </>
    )
}
