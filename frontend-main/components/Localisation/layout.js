import React from 'react'

export default function layout() {
    return (
        <div>
            <div className='px-4 md:px-8 lg:px-0'>
                <h2 className='text-4xl text-center text-[#EC5F34]  my-10'>Ou nous trouvez</h2>
                <div className='flex items-center justify-center'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.523691430775!2d5.842617276532981!3d43.11452378710338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c90545bc6616a1%3A0xb1c82c8b92889c3!2sGarden%20Pizz!5e0!3m2!1sfr!2sfr!4v1740067112604!5m2!1sfr!2sfr"
                        height="550" className='w-full rounded-md' loading="lazy" ></iframe>
                </div>
            </div>
        </div>
    )
}
