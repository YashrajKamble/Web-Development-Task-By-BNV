import React, { useState, useRef, useEffect } from "react";

const Icon = ({ children, className = "h-5 w-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const SearchIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </Icon>
);

const HeartIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </Icon>
);

const UserIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </Icon>
);

const ShoppingCartIcon = (props) => (
  <Icon {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 5h2l2 9h9.5a1.5 1.5 0 001.42-1.03L21 8H7.5" />
      <circle cx="10" cy="18" r="1.5" />
      <circle cx="18" cy="18" r="1.5" />
    </g>
  </Icon>
);

const ChevronDownIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </Icon>
);

const MenuIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </Icon>
);

const XIcon = (props) => (
  <Icon {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </Icon>
);

export default function Nav({ searchQuery, onSearchChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = `#${id}`;
    }
    setOpen(false);
    setMobileCatOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="w-full bg-white"
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-5">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-2xl lg:text-2xl font-extrabold tracking-tight">
              ECOMMERCE
            </h1>
          </div>

          <div className="flex-1 mx-6 hidden md:flex items-center justify-start">
            <div className="w-full max-w-[640px]">
              <form onSubmit={(e) => e.preventDefault()} className="relative">
                <label htmlFor="site-search" className="sr-only">
                  Search
                </label>

                <input
                  id="site-search"
                  type="search"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full rounded-full border border-gray-300 px-5 py-2 pr-14 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black-100 focus:border-black-300 transition-shadow"
                  aria-label="Search site"
                />

                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-white border-gray-200 hover:bg-gray-50"
                >
                  <SearchIcon className="h-4 w-4 text-gray-600" />
                </button>
              </form>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6 ">
            <div className="hidden md:flex items-center gap-6 mr-60 justify-start">
              <div className="relative inline-block" ref={dropdownRef}>
                <button
                  onClick={() => setOpen((s) => !s)}
                  aria-haspopup="true"
                  aria-expanded={open}
                  className="flex items-center gap-2 text-gray-800 text-sm font-medium"
                >
                  <span>All Category</span>
                  <ChevronDownIcon className="h-4 w-4 text-gray-600" />
                </button>

                {open && (
                  <div className="absolute mt-2 w-44 bg-white border rounded-lg shadow-lg z-20">
                    <a
                      href="#home"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate("home");
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Home
                    </a>
                    <a
                      href="#categories"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate("categories");
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Categories
                    </a>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate("contact");
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Contact
                    </a>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="text-gray-800 text-sm hover:text-black font-medium"
              >
                Gift Cards
              </a>
              <a
                href="#"
                className="text-gray-800 text-sm hover:text-black font-medium"
              >
                Special Event
              </a>
            </div>

            <div className="hidden md:flex items-center gap-1">
              <button
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Wishlist"
              >
                <HeartIcon className="h-6 w-6 text-gray-600" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Account"
              >
                <UserIcon className="h-6 w-6 text-gray-600" />
              </button>

              <div className="relative">
                <button
                  className="p-2 rounded-full hover:bg-gray-100 relative"
                  aria-label="Cart"
                >
                  <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
                </button>

                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white bg-red-500 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <div className="flex">
              <input
                type="search"
                placeholder="Search here"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="flex-1 rounded-l-lg border border-gray-300 px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black-100"
                aria-label="Mobile search"
              />
              <button
                className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg"
                aria-label="Search"
              >
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div>
              <button
                onClick={() => setMobileCatOpen((s) => !s)}
                className="flex items-center gap-2 text-gray-800 text-md font-medium"
              >
                <span>All Category</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-600" />
              </button>

              {mobileCatOpen && (
                <div className="mt-2 space-y-1">
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate("home");
                    }}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Home
                  </a>
                  <a
                    href="#categories"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate("categories");
                    }}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Categories
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate("contact");
                    }}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Contact
                  </a>
                </div>
              )}
            </div>

            <div className="space-y-2 border-b border-gray-200 pb-3">
              <a href="#" className="block py-2 text-gray-700 font-medium">
                Gift Cards
              </a>
              <a href="#" className="block py-2 text-gray-700 font-medium">
                Special Event
              </a>
            </div>

            <div className="flex items-center justify-around pt-3">
              <button className="flex flex-col items-center text-gray-600">
                <HeartIcon className="h-6 w-6" />
                <span className="text-xs mt-1">Wishlist</span>
              </button>
              <button className="flex flex-col items-center text-gray-600">
                <UserIcon className="h-6 w-6" />
                <span className="text-xs mt-1">Account</span>
              </button>
              <button className="flex flex-col items-center text-gray-600">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="text-xs mt-1">Cart</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
