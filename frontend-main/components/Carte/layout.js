import React from 'react'
import deuxtrois from "@/public/assets/images/deuxtrois.png"
import quatresix from "@/public/assets/images/quatresix.png"
import sixneuf from "@/public/assets/images/sixneuf.png"



import Image from 'next/image'


export default function layout() {
    return (
        <div>
            <div id="carte" className='mt-10'>
                <div className="min-h-screen  text-white px-6 py-12">

                    <h1 className="text-4xl font-bold text-[#e53032] text-center mb-16 tracking-wider">
                        Notre Carte
                    </h1>

                    {/* ================= GRID PRINCIPAL ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

                        {/* ================================================= */}
                        {/* ================= TRADITIONNELLES ============== */}
                        {/* ================================================= */}
                        <div>
                            <div className='flex items-center  justify-between'>

                                <h2 className="text-2xl font-semibold text-white">
                                    Traditionnelles
                                </h2>
                                <Image src={deuxtrois} className='w-40' />
                            </div>

                            <div className="space-y-5 text-sm">

                                {[
                                    ["JC", "Sauce tomate, anchois, origan", "12€"],
                                    ["Margarita", "Sauce tomate, emmental, mozza, origan", "12€"],
                                    ["Napolitaine", "Sauce tomate, anchois, emmental, mozza, origan", "12€"],
                                    ["Jambon Fromage", "Sauce tomate ou crème fraîche, jambon cuit, emmental, mozza, origan", "13€"],
                                    ["Reine", "Crème fraîche, jambon cuit, champignons, emmental, mozza, origan", "14€"],
                                    ["Royale", "Sauce tomate, jambon cuit, champignons, emmental, mozza, origan", "14€"],
                                    ["JDL", "Sauce tomate, chèvre, emmental, mozza, origan", "14€"],
                                    ["Chorizo", "Sauce tomate, chorizo, emmental, mozza, origan", "14€"],
                                    ["Merguez", "Sauce tomate, merguez, emmental, mozza, origan", "14€"],
                                    ["Figatelli", "Sauce tomate, figatelli, emmental, mozza, origan", "14€"],
                                    ["Bolo", "Sauce tomate, viande hachée, emmental, mozza, origan", "14€"],
                                    ["Moussaka", "Sauce tomate, viande hachée, aubergines, oignons, emmental, mozza, origan", "14€"],
                                    ["Carbonara", "Crème fraîche parmesan, lardons, oeuf, emmental, mozza, origan", "14€"],
                                    ["L’Italienne", "Sauce tomate, jambon cru, emmental, mozza, parmesan, persillade, origan", "14€"],
                                    ["Cocorico", "Crème fraîche, poulet, champignons frais, emmental, mozza, origan", "14€"],
                                    ["Parma", "Sauce tomate, jambon cru, oeuf, emmental, mozza, origan", "15€"],
                                ].map((pizza, i) => (
                                    <div key={i} className="border-b border-white/10 pb-3">
                                        <div className="flex justify-between font-semibold uppercase tracking-wide">
                                            <span>{pizza[0]}</span>
                                            <span>{pizza[2]}</span>
                                        </div>
                                        <p className="text-gray-300 mt-1 normal-case">
                                            {pizza[1]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <h2 className="text-xl font-semibold text-white mt-12 mb-6">
                                Softs
                            </h2>

                            <div className="space-y-3 text-sm">
                                {[
                                    ["Coca Zero, Oasis, Coca, Ice tea, Coca Cherry, Perrier, 7up, Orangina", "2€"],
                                    ["Red Bull", "3€"],
                                    ["Eau 50cl", "1€"],
                                    ["Coca / Ice Tea 1,25L", "3,50€"],
                                    ["Oasis 2L", "4€"],
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between border-b border-white/10 pb-2">
                                        <span>{item[0]}</span>
                                        <span className="font-semibold">{item[1]}</span>
                                    </div>
                                ))}
                            </div>


                        </div>

                        {/* ================================================= */}
                        {/* ================= SIGNATURES =================== */}
                        {/* ================================================= */}
                        <div>
                            <div className='flex items-center  justify-between'>

                                <h2 className="text-2xl font-semibold text-white">
                                    SIGNATURES
                                </h2>
                                <Image src={quatresix} className='w-40' />
                            </div>

                            <div className="space-y-5 text-sm">

                                {[
                                    ["Fedele", "Crème fraîche, chèvre, miel, emmental, mozza, pignons, origan", "15€"],
                                    ["Salamone", "Crème fraîche, saumon, emmental, mozza, origan", "15€"],
                                    ["Indienne", "Crème fraîche, poulet curry, poivrons, emmental, mozza, origan", "15€"],
                                    ["Végé", "Sauce tomate, aubergines grillées, champignons, poivrons, emmental, mozza, origan", "15€"],
                                    ["Tartiflette", "Crème fraîche, lardons, pommes de terre, oignons, reblochon, fromage tartiflette, emmental, mozza, origan", "15€"],
                                    ["4 Fromages", "Sauce tomate, chèvre, roquefort, emmental, mozza, origan", "15€"],
                                    ["Sudiste", "Sauce tomate, chorizo, merguez, poivrons, emmental, mozza, origan", "15€"],
                                    ["Corse", "Sauce tomate, figatelli, chèvre, emmental, mozza, origan", "15€"],
                                    ["Kebab", "Crème fraîche, kebab, oignons, emmental, mozza, roquette, tomates cerise, sauce pitta, origan", "15€"],
                                    ["Atomique", "Sauce tomate, merguez, chorizo, figatelli, emmental, mozza, origan", "15€"],
                                    ["Tenders", "Sauce tomate (poivre ou samouraï), poulet pané, cheddar, emmental, mozza, origan", "15€"],
                                    ["Aoste", "Crème fraîche, jambon cru, pommes de terre, oignons, reblochon, fromage tartiflette, emmental, mozza, origan", "15€"],
                                    ["Burger", "Sauce tomate, viande hachée, cornichons king-size, cheddar, emmental, mozza, sauce burger, oignons frits, origan", "15€"],
                                    ["Poulet Tandoori", "Crème fraîche, poulet tandoori, poivrons, emmental, mozza, origan", "15€"],
                                ].map((pizza, i) => (
                                    <div key={i} className="border-b border-white/10 pb-3">
                                        <div className="flex justify-between font-semibold uppercase tracking-wide">
                                            <span>{pizza[0]}</span>
                                            <span>{pizza[2]}</span>
                                        </div>
                                        <p className="text-gray-300 mt-1 normal-case">
                                            {pizza[1]}
                                        </p>
                                    </div>
                                ))}
                            </div>


                            <h2 className="text-xl font-semibold text-white mt-12 mb-6">
                                Alcools
                            </h2>

                            <div className="space-y-3 text-sm">
                                {[
                                    ["Bière Heineken / Desperados 33cl", "3€"],
                                    ["Vin du pays (peut remplacer la pizza offerte)", "8€"],
                                    ["Côtes de Provence AOC", "12€"],
                                    ["Syrah (peut remplacer la pizza offerte)", "9€"],
                                    ["Côtes du Rhône AOC", "14€"],
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between border-b border-white/10 pb-2">
                                        <span>{item[0]}</span>
                                        <span className="font-semibold">{item[1]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ================================================= */}
                        {/* ================= SPÉCIALES ==================== */}
                        {/* ================================================= */}
                        <div>


                            <div className="text-sm">

                                <div className='flex items-center  justify-between'>
                                    <h2 className="text-2xl font-semibold text-white">

                                    </h2>
                                    <Image src={sixneuf} className='w-40' />
                                </div>
                                <div className="space-y-5 text-sm">


                                    {[
                                        ["Texane", "Sauce tomate, viande hachée, cheddar, tomates fraîches, sauce barbecue, emmental, mozza, origan", "15€"],
                                        ["La Garden", "Huile d’olive, jambon cuit, chèvre, roquefort, emmental, mozza, origan", "15€"],
                                        ["Camembert", "Crème fraîche, jambon cuit, camembert, emmental, mozza, origan", "15€"],
                                        ["Burrata", "Sauce tomate, burrata, roquette, tomate cerise, basilic, balsamique, parmesan, jambon cru, origan", "15€"],
                                        ["Burrata à la Truffe", "Sauce tomate, burrata truffe, roquette, tomate cerise, basilic, parmesan, jambon cuit, huile de truffe, origan", "16€"],
                                        ["L’Artichaut", "Crème d’artichaut, artichaut, lardons, pommes de terre, champignons, emmental, mozza, origan", "16€"],
                                        ["La Roma", "Sauce tomate, jambon cru, champignons, emmental, mozza, parmesan, roquette, tomates séchées, balsamique, origan", "16€"],
                                    ].map((pizza, i) => (
                                        <div key={i} className="border-b border-white/10 pb-3">
                                            <div className="flex justify-between font-semibold uppercase tracking-wide">
                                                <span>{pizza[0]}</span>
                                                <span>{pizza[2]}</span>
                                            </div>
                                            <p className="text-gray-300 mt-1 normal-case">
                                                {pizza[1]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CALZONES */}
                            <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
                                Calzones
                            </h2>

                            <div className="space-y-5 text-sm">
                                {[
                                    ["Rouge", "Sauce tomate, jambon, champignons, oeuf, emmental, mozza, origan", "15€"],
                                    ["Blanche", "Crème fraîche, jambon, champignons, oeuf, emmental, mozza, origan", "15€"],
                                ].map((pizza, i) => (
                                    <div key={i} className="border-b border-white/10 pb-3">
                                        <div className="flex justify-between font-semibold uppercase tracking-wide">
                                            <span>{pizza[0]}</span>
                                            <span>{pizza[2]}</span>
                                        </div>
                                        <p className="text-gray-300 mt-1 normal-case">
                                            {pizza[1]}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* SUPPLÉMENTS */}
                            <h2 className="text-xl font-semibold text-white mt-12 mb-6">
                                Suppléments
                            </h2>

                            <div className="space-y-3 text-sm">
                                {[
                                    ["Légumes", "1€"],
                                    ["Fromages", "1,50€"],
                                    ["Viandes", "2€"],
                                    ["Burrata", "4€"],
                                    ["Burrata truffe", "5€"],
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between border-b border-white/10 pb-2">
                                        <span>{item[0]}</span>
                                        <span className="font-semibold">{item[1]}</span>
                                    </div>
                                ))}
                            </div>


                            <h2 className="text-xl font-semibold text-white mt-12 mb-6">
                                Desserts
                            </h2>

                            <div className="space-y-3 text-sm">
                                {[
                                    ["Pizza Nutella", "11€"],
                                    ["Supplément Smarties", "1€"],
                                    ["Supplément Coco", "1€"],
                                    ["Tiramisu (classique, spéculos…)", "4€"],
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between border-b border-white/10 pb-2">
                                        <span>{item[0]}</span>
                                        <span className="font-semibold">{item[1]}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>





            </div>
        </div>
    )

}

