import React from 'react'
import flyTel1 from "@/public/assets/images/flyTel1.png"
import flyTel2 from "@/public/assets/images/flyTel2.png"
import Image from 'next/image'
import flyVerso from "@/public/assets/images/flyVerso.png"

export default function layout() {
    return (
        <div>
            <div id="carte" className='mt-10'>
                <h2 className='text-4xl text-center text-[#EC5F34] mb-10 '>Notre carte</h2>
                <Image className='hidden lg:block ' alt='la carte' width={9000} height={9000} quality={99} src={flyVerso} />
                <Image className='lg:hidden' alt='carte page 1' src={flyTel1} />
                <Image className='lg:hidden' alt='carte page 1' src={flyTel2} />

            </div>
        </div>
    )
}
