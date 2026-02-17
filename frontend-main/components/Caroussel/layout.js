import React from 'react'
import logo2 from '@/public/assets/images/logo2.png'
import logo3 from '@/public/assets/images/logo3.png'
import logo4 from '@/public/assets/images/logo4.png'
import logo5 from '@/public/assets/images/logo5.png'
import logo6 from '@/public/assets/images/logo6.png'
import logo7 from '@/public/assets/images/logo7.png'
import logo9 from '@/public/assets/images/logo9.png'
import Image from 'next/image'

export default function layout() {
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-[#e53032] mt-10 text-center mb-16 tracking-wider">

        Nos partenaires
      </h2>

      <div className="bg-[#e53032] overflow-hidden flex flex-col items-center  justify-center">

        {/* Conteneur de défilement */}
        <div className="flex animate-marquee py-10 space-x-24">
          {/* Répéter les images pour éviter le vide */}
          <div className="flex space-x-24">
            <Image src={logo2} alt="Logo 2" className=" shrink-0 w-40 object-contain " />
            <Image src={logo3} alt="Logo 3" className=" shrink-0 w-40 object-contain " />
            <Image src={logo4} alt="Logo 4" className=" shrink-0 w-40 object-contain " />
            <Image src={logo5} alt="Logo 5" className=" shrink-0 w-40 object-contain " />
            <Image src={logo6} alt="Logo 6" className=" shrink-0 w-40 object-contain " />
            <Image src={logo7} alt="Logo 7" className=" shrink-0 w-40 object-contain " />
            <Image src={logo9} alt="Logo 9" className=" shrink-0 w-40 object-contain " />
            <Image src={logo2} alt="Logo 2" className=" shrink-0 w-40 object-contain " />
            <Image src={logo3} alt="Logo 3" className=" shrink-0 w-40 object-contain " />
            <Image src={logo4} alt="Logo 4" className=" shrink-0 w-40 object-contain " />
            <Image src={logo5} alt="Logo 5" className=" shrink-0 w-40 object-contain " />
            <Image src={logo6} alt="Logo 6" className=" shrink-0 w-40 object-contain " />
            <Image src={logo7} alt="Logo 7" className=" shrink-0 w-40 object-contain " />
            <Image src={logo9} alt="Logo 9" className=" shrink-0 w-40 object-contain " />
          </div>
        </div>
      </div>
    </div>
  )
}
