import React, { useState } from "react";

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
      <path d="M6 6h" />
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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="w-full bg-white"
      style={{
        fontFamily: "Inter",
        //   'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      }}
    >
      {!isMenuOpen && (
        <div className="hidden md:block border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-9 text-gray-500 text-[13px] font-medium">
              <div className="hidden md:flex items-center gap-6 mt-0">
                <div className="flex items-center gap-1">
                  <span>English</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Dollar</span>
                </div>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a className="text-sm hover:text-gray-900" href="#">
                  Tracking Package
                </a>
                <a className="text-sm hover:text-gray-900" href="#">
                  FAQ
                </a>
                <a className="text-sm hover:text-gray-900" href="#">
                  About Us
                </a>
                <a className="text-sm hover:text-gray-900" href="#">
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold tracking-tight">
              ECOMMERCE
            </h1>
          </div>

          <div className="flex-1 mx-6 hidden md:flex items-center justify-center ">
            <div className="w-full max-w-2xl">
              <label htmlFor="site-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <input
                  id="site-search"
                  type="search"
                  placeholder="Search here"
                  className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  aria-label="Search"
                  className="absolute right-1 mt-1 -translate-y-1/2 px-3 py-2 rounded-full hover:bg-gray-100"
                >
                  <SearchIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-800 text-sm font-medium">
                <span>All Category</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-600" />
              </button>

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

            <div className="hidden md:flex items-center gap-3">
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
              <button
                className="p-2 rounded-full hover:bg-gray-100 relative"
                aria-label="Cart"
              >
                <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
              </button>
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
                className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg ">
                <SearchIcon className="h-5 w-5 text-gray-500 " />
              </button>
            </div>

            <button className="flex items-center gap-2 text-gray-800 text-sm font-medium">
              <span>All Category</span>
              <ChevronDownIcon className="h-4 w-4 text-gray-600" />
            </button>

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
    </header>
  );
}
