

import { ArrowRight } from "lucide-react";

const OurCraft = () => {
  const stats = [
    {
      number: "50h",
      label: "Burn time",
    },
    {
      number: "40",
      label: "Per batch",
    },
    {
      number: "0%",
      label: "Paraffin",
    },
  ];

  return (
    <section className="w-full bg-[#a25d44] py-16 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* Left Side - Images */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 items-center">

            {/* First Image */}
            <div className="w-full h-65 sm:h-87.5 lg:h-77.5 xl:h-90 overflow-hidden rounded-xl">
              <img
                src="/decorative-glass-candle.webp"
                alt="Hand poured Reverie candle"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Second Image */}
            <div className="w-full h-65 sm:h-87.5 lg:h-77.5 xl:h-90 overflow-hidden rounded-xl mt-8 sm:mt-10">
              <img
                src="/mix-candles.jpg"
                alt="Reverie Candles handcrafted packaging"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col">

            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D6C4B3] font-medium">
              Our Craft
            </span>

            <h2 className="mt-4 text-3xl font-serif font-normal sm:text-4xl lg:text-4xl xl:text-5xl leading-tight text-[#F8F1E9]">
              Slow-poured, small batch,
              thoughtfully scented.
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#cecece] max-w-xl">
              Every Reverie candle is thoughtfully crafted in small
              batches using carefully selected ingredients.
              We believe in creating beautiful fragrances,
              clean-burning candles, and moments worth slowing
              down for.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-8">

              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center border border-[#ffffff] rounded-xl py-5 px-2 sm:py-6"
                >
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#f6f6f6]">
                    {stat.number}
                  </h3>

                  <p className="text-[10px] sm:text-xs mt-1 text-[#ffffff]">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="/our-story"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#F8F1E9] text-[#29211E] rounded-full text-sm font-medium hover:bg-[#C87545] hover:text-white transition-all duration-300 group"
              >
                Read our story

                <ArrowRight
                  size={17}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurCraft;
