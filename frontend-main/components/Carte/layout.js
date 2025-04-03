import React from 'react'
import flyTel1 from "@/public/assets/images/flyTel1.jpg"
import flyTel2 from "@/public/assets/images/flyTel2.jpg"
import flyTel3 from "@/public/assets/images/flyTel3.jpg"

import Image from 'next/image'
import newFly from "@/public/assets/images/newFly3.jpg"


export default function layout() {
    return (
        <div>
            <div id="carte" className='mt-10'>
                <h2 className='text-4xl text-center text-[#EC5F34] mb-10 '>Notre carte</h2>
                <Image className='hidden lg:block rounded-xl' alt='la carte' width={9000} height={9000}
                 quality={99} src={newFly} />
                <Image className='lg:hidden' alt='carte page 1' src={flyTel1} />
                <Image className='lg:hidden' alt='carte page 2' src={flyTel2} />
                <Image className='lg:hidden' alt='carte page 3' src={flyTel3} />


            </div>
        </div>
    )
}
