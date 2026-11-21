

const HeroSection = () => {
  return (
   <div className=" bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat">
   {/* Background Overlay */}
<div className="absolute inset-0 bg-black/30"></div>
  {/* Hero Content */}
  <div className="relative z-10 flex min-h-162.5 md:min-h-187.5 lg:min-h-212.5 items-center">
    <div className="w-full px-6 sm:px-10 md:px-[8%] lg:px-[10%] py-24 md:py-32">

      <span className="uppercase text-sm sm:text-base md:text-lg lg:text-xl tracking-widest text-gray-200">
        New <span className="mx-2">|</span> Autumn Collection
      </span>

      <h1 className="mt-5 max-w-3xl font-serif font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-white">
        Lights that makes a house, a <span className="text-amber-500">home</span>.
      </h1>

      <p className="mt-5 max-w-xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
        Clean-burning soy candles, poured by hand with natural fragrance oils and cotton wicks.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="/products"
          className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#a25d44] hover:bg-amber-500 transition duration-500 rounded-full text-white"
        >
          Shop All Candles
        </a>

        <a
          href="/our-story"
          className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#a25d44] hover:bg-amber-500 transition duration-500 rounded-full text-white"
        >
          Our Story
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default HeroSection;