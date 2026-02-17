import React from 'react'

export default function layout() {
    return (
        <div>
            <div className='px-4 md:px-8 lg:px-0'>
                    <h2 className="text-4xl font-bold text-[#e53032] text-center mt-16 tracking-wider">
                    Ou nous trouvez</h2>
                <div className='md:flex space-x-14 items-center justify-center'>
                    <div className='md:w-1/2'>
                      <span className='text-white text-lg block text-center font-semiebold mb-4'>Garden Pizz Six fours </span>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.523691430775!2d5.842617276532981!3d43.11452378710338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c90545bc6616a1%3A0xb1c82c8b92889c3!2sGarden%20Pizz!5e0!3m2!1sfr!2sfr!4v1740067112604!5m2!1sfr!2sfr"
                            height="550" className='w-full rounded-lg' loading="lazy" ></iframe>
                              <div className="flex items-center justify-center ">
                            <a
                                onClick={() => {
                                    event({
                                        action: "call_button_click",
                                        category: "Contact",
                                        label: "Bouton Appeler",
                                        value: 1,
                                    });
                                }}

                                id="numTel" href="tel:07 68 78 18 26"
                                className="shadow-none w-fit mt-8 rounded-md
                                                     border-none flex items-center space-x-2 text-sm px-4 py-2.5
                                                 font-medium text-white hover:bg-red-600 bg-[#e53032] transition
                                                  duration-150 ease-in-out">
                                <svg id="numTel" className="w-5 h-5 text-white" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14
                                                         0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 
                                                         48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"></path>
                                </svg><span id="numTel" className="block text-xl">07 68 78 18 26</span>
                            </a>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                      <span className='text-white text-lg block font-semiebold text-center mb-4'>Garden Pizz Mar vivo</span>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.0823657784235!2d5.880852476337553!3d43.08176368920171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c903473da047cd%3A0x8d2751db225754b0!2sGarden%20Pizz%20Mar%20vivo!5e0!3m2!1sfr!2sfr!4v1771342649320!5m2!1sfr!2sfr"
                            height="550" className='w-full rounded-lg' loading="lazy" ></iframe>
                              <div className="flex items-center justify-center ">
                            <a
                                onClick={() => {
                                    event({
                                        action: "call_button_click",
                                        category: "Contact",
                                        label: "Bouton Appeler",
                                        value: 1,
                                    });
                                }}

                                id="numTel" href="tel:07 69 48 48 33"
                                className="shadow-none w-fit mt-8 rounded-md
                                                     border-none flex items-center space-x-2 text-sm px-4 py-2.5
                                                 font-medium text-white hover:bg-red-600 bg-[#e53032] transition
                                                  duration-150 ease-in-out">
                                <svg id="numTel" className="w-5 h-5 text-white" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14
                                                         0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 
                                                         48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"></path>
                                </svg><span id="numTel" className="block text-xl">07 69 48 48 33</span>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
