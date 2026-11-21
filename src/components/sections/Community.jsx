import { useState } from "react";


const testimonials = [
  {
    id: 1,
    quote:
      "“Amber Hearth fills my whole apartment without being overpowering. Absolutely my favourite.”",
    name: "Sophie M.",
    image: "/communityImage1.jpg",
  },
  {
    id: 2,
    quote:
      "“Burns evenly for ages and the packaging is gorgeous. Perfect gift set.”",
    name: "Daniel R.",
    image: "/communityImage2.avif",
  },
  {
    id: 3,
    quote:
      "“Finally a candle that doesn’t give me a headache. Clean, cozy, beautiful.”",
    name: "Priya K.",
    image: "/communityImage3.jpg",
  },
];

const StarRating = () => (
  <div className="flex items-center gap-1 text-[#A44A1D]" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, idx) => (
      <svg
        key={idx}
        className="w-4 h-4 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Community = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="bg-[#FAF5EE] px-6 md:px-[10%] py-16 md:py-24 text-[#231F1E]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-serif font-normal tracking-tight mb-12 md:mb-16">
          Words from our community
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
            >
              <div>
                <StarRating />
                <p className="mt-5 font-serif text-[17px] leading-relaxed text-[#2C2725]">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-3.5 mt-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-[#3B3532]">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Banner */}
        <div className="bg-[#EFE5D6] rounded-3xl px-6 py-12 md:py-16 text-center">
          <h3 className="text-3xl md:text-[34px] font-serif font-normal text-[#231F1E]">
            Get 10% off your first order
          </h3>
          <p className="mt-2.5 text-sm md:text-base text-[#5E5650]">
            Join the Lumera list for new scents and seasonal drops.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (subscribed) setSubscribed(false);
              }}
              placeholder="Your email"
              className="w-full sm:flex-1 bg-white text-[#231F1E] placeholder-[#9C948D] text-sm px-5 py-3.5 rounded-full outline-none focus:ring-2 focus:ring-[#2A2421]/20"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#2A2421] hover:bg-[#1A1614] text-white text-sm font-medium px-8 py-3.5 rounded-full transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="mt-3 text-sm text-[#A44A1D] font-medium">
              Thanks for joining! Check your inbox for your 10% off code.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Community;