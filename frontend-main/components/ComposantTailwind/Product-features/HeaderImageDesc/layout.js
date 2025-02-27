import React from "react";
import Image from "next/image";
export default function layout(props) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className={` text-gray-900 ${props.style.font_title.font_size} ${props.style.font_title.font_family} ${props.style.font_title.font_weight}`}
            >
              The Fine Details
            </h2>
            <p
              className={`mt-3 max-w-3xl text-gray-600 ${props.style.font_text.font_size} ${props.style.font_text.font_family} ${props.style.font_text.font_weight}`}
            >
              Our patented padded snack sleeve construction protects your
              favorite treats from getting smooshed during all-day adventures,
              long shifts at work, and tough travel schedules.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div
                className={`aspect-h-2 aspect-w-3 w-full overflow-hidden ${props.style.image.border_radius} ${props.style.image.box_shadow} ${props.style.image.border_width} ${props.style.image.border_style} ${props.style.image.border_color} `}
              >
                <Image
                  src="/../public/assets/images/product-page-04-detail-product-shot-01.jpg"
                  width={500}
                  height={500}
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p
                className={`mt-8 text-gray-500 ${props.style.font_paragraphe.font_family} ${props.style.font_paragraphe.font_size} ${props.style.font_paragraphe.font_weight}`}
              >
                The 20L model has enough space for 370 candy bars, 6 cylinders
                of chips, 1220 standard gumballs, or any combination of
                on-the-go treats that your heart desires. Yes, we did the math.
              </p>
            </div>
            <div>
              <div
                className={`aspect-h-2 aspect-w-3 w-full overflow-hidden ${props.style.image.border_radius} ${props.style.image.box_shadow} ${props.style.image.border_width} ${props.style.image.border_style} ${props.style.image.border_color}`}
              >
                <Image
                  src="/../public/assets/images/product-page-04-detail-product-shot-01.jpg"
                  width={500}
                  height={500}
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p
                className={`mt-8 text-gray-500 ${props.style.font_paragraphe.font_family} ${props.style.font_paragraphe.font_size} ${props.style.font_paragraphe.font_weight}`}
              >
                Up your snack organization game with multiple compartment
                options. The quick-access stash pouch is ready for even the most
                unexpected snack attacks and sharing needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
