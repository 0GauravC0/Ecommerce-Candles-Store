

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "Glass Candles (small)",
      fragrance: "Soy · Paraffin ",
      price: 10,
      image: "/glass-candles.jpg",
    },
    {
      id: 2,
      name: "Yellow Matki",
      fragrance: "Musk · White tea · Pear",
      price: 32,
      image: "/matki candle.jpg",
    },
    {
      id: 3,
      name: "Pillar Candles (large)",
      fragrance: "Herbal · Fresh · Green",
      price: 36,
      image: "/pillar candles.jpg",
    },
    {
      id: 4,
      name: "Sunflower Candles",
      fragrance: "Oud · Amber · Smoke",
      price: 42,
      image: "/small pink roses.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#FAF5EF] py-12 sm:py-16 lg:py-20">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="flex items-end justify-between mb-8 sm:mb-10">

          <div>
            <h4 className="text-xs sm:text-sm tracking-[0.25em] uppercase font-medium text-amber-900">
              Best Sellers
            </h4>

            <h2 className="text-3xl sm:text-4xl font-serif font-normal lg:text-5xl mt-3 text-[#625147]">
              Loved by candle lovers
            </h2>
          </div>

          <a
            href="/shop"
            className="hidden sm:inline-block text-sm text-[#302722] border-b border-[#302722] pb-1 hover:text-amber-800 hover:border-amber-800 transition-colors"
          >
            View all
          </a>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >

              {/* Product Image */}
              <div className="w-full aspect-square overflow-hidden rounded-xl bg-[#E9DFD3]">

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>

              {/* Product Details */}
              <div className="mt-4 space-y-1">

                <h3 className="text-base sm:text-lg font-medium text-[#302722]">
                  {product.name}
                </h3>

                <p className="text-sm text-stone-500">
                  {product.fragrance}
                </p>

                <p className="text-base font-medium text-[#302722] pt-1">
                  ${product.price}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Mobile View All */}
        <div className="mt-10 text-center sm:hidden">
          <a
            href="/shop"
            className="inline-block text-sm text-[#302722] border-b border-[#302722] pb-1"
          >
            View all products
          </a>
        </div>

      </div>
    </section>
  );
};

export default BestSellers;
