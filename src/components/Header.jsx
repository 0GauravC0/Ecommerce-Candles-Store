import { useState } from "react";
import {
  Search,
  ShoppingBasket,
  UserRound,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "Our Story", href: "/our-story" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-50 w-full bg-amber-50 shadow-md">

      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4">

        {/* Logo */}
        <a href="/" onClick={closeMenu} className="shrink-0">
          <img
            src="/reverie%20logo.png"
            alt="Reverie Candles"
            className="w-24 sm:w-28 h-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wider text-gray-600 hover:text-amber-800 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-4 sm:gap-5">

          <a
            href="/search"
            aria-label="Search"
            className="text-gray-600 hover:text-amber-800 transition-colors"
          >
            <Search size={21} strokeWidth={1.7} />
          </a>

          <a
            href="/account"
            aria-label="My Account"
            className="hidden sm:block text-gray-600 hover:text-amber-800 transition-colors"
          >
            <UserRound size={21} strokeWidth={1.7} />
          </a>

          <a
            href="/cart"
            aria-label="Shopping Cart"
            className="text-gray-600 hover:text-amber-800 transition-colors"
          >
            <ShoppingBasket size={22} strokeWidth={1.7} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="lg:hidden text-gray-700 hover:text-amber-800 transition-colors"
          >
            {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-80 opacity-100 border-t border-amber-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-sm font-medium uppercase tracking-wider text-gray-600 hover:text-amber-800 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className="sm:hidden border-t border-amber-200 pt-4">
              <a
                href="/account"
                onClick={closeMenu}
                className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gray-600"
              >
                <UserRound size={18} />
                My Account
              </a>
            </li>

          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Header;