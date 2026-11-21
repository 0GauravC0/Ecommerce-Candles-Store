
const Footer = () => {
  return (
    <footer className="bg-[#a25d44] text-[#C8BEB5]">
      <div className="max-w-6xl mx-auto px-6 md:px-[10%] py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <a href="/" className="inline-block">
              <img
                src="/reverie logo.png"
                alt="Reverie Candles"
                className="h-16 w-auto object-contain invert brightness-200"
              />
            </a>
            <p className="mt-3 text-sm text-[#ffffff] leading-relaxed max-w-xs">
              Hand-poured candles for slow evenings.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-md font-medium text-[#ffffff] mb-4">Shop</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#all-candles" className="hover:text-[#F5EFEA] transition-colors">
                  All candles
                </a>
              </li>
              <li>
                <a href="#gift-sets" className=" hover:text-[#fdfdfd] transition-colors">
                  Gift sets
                </a>
              </li>
              <li>
                <a href="#best-sellers" className="hover:text-[#F5EFEA] transition-colors">
                  Best sellers
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-sm font-medium text-[#F5EFEA] mb-4">Help</h3>
            <ul className="space-y-2.5 text-sm text-[#B5ABA2]">
              <li>
                <a href="#shipping" className="hover:text-[#F5EFEA] transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-[#F5EFEA] transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5EFEA] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Column */}
          <div>
            <h3 className="text-sm font-medium text-[#F5EFEA] mb-4">Follow</h3>
            <div className="flex items-center gap-4 text-[#C8BEB5]">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-[#F5EFEA] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="hover:text-[#F5EFEA] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8.5 21.2l1.8-7.4" />
                  <path d="M10.7 13.8c.4-.8 1.4-2.4 1.4-3.7 0-1.3-.8-2.3-2-2.3-1.4 0-2.5 1.1-2.5 2.7 0 1 .4 1.7.7 2.2" />
                  <path d="M9.8 11.5c.6 1.8 2.2 3.1 4.2 3.1 2.5 0 4.5-2 4.5-4.6 0-2.8-2.3-4.9-5.3-4.9-3.2 0-5.7 2.4-5.7 5.5 0 1.4.5 2.7 1.4 3.6" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="hover:text-[#F5EFEA] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-[#382B24] py-5 px-6 text-center text-xs text-[#1e1e1e]">
        © {new Date().getFullYear()} Reverie Candle Co.
      </div>
    </footer>
  );
};

export default Footer;