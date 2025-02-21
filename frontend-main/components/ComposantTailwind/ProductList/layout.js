import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function layout(props) {
  console.log(props);
  const products = [
    {
      id: 1,
      name: "Zip Tote Basket",
      color: "White and black",
      href: "#",
      imageSrc: "/../public/assets/images/product.jpg",
      imageAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
      price: "$140",
    },
    {
      id: 1,
      name: "Zip Tote Basket",
      color: "White and black",
      href: "#",
      imageSrc: "/../public/assets/images/product.jpg",
      imageAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
      price: "$140",
    },
    {
      id: 1,
      name: "Zip Tote Basket",
      color: "White and black",
      href: "#",
      imageSrc: "/../public/assets/images/product.jpg",
      imageAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
      price: "$140",
    },
    {
      id: 1,
      name: "Zip Tote Basket",
      color: "White and black",
      href: "#",
      imageSrc: "/../public/assets/images/product.jpg",
      imageAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
      price: "$140",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2
          className={`${props.style.font_title.font_size} ${props.style.font_title.font_family} ${props.style.font_title.font_weight}`}
        >
          Customers also bought
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className={`relative h-72 w-full overflow-hidden `}>
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={500}
                    height={500}
                    className={`h-full w-full object-cover object-center `}
                  />
                </div>
                <div className="relative mt-4">
                  <h3
                    className={`${props.style.font_text.font_family} ${props.style.font_text.font_size} ${props.style.font_text.font_weight}`}
                  >
                    {product.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm text-gray-500 ${props.style.font_paragraphe.font_size} ${props.style.font_paragraphe.font_family} ${props.style.font_paragraphe.font_weight}`}
                  >
                    {product.color}
                  </p>
                </div>
                <div
                  className={`absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden  p-4 ${props.style.image.border_radius} ${props.style.image.border_color} ${props.style.image.border_style} ${props.style.image.border_width} ${props.style.image.box_shadow}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href={product.href}
                  className={`relative flex items-center justify-center bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 ${props.style.button.border_color} ${props.style.button.border_radius} ${props.style.button.border_style} ${props.style.button.border_width} ${props.style.button.box_shadow}`}
                >
                  Add to bag<span className="sr-only">, {product.name}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
