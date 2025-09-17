export default function Header() {
  return (
    <header
      className="w-full bg-white"
      id="home"
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      <div className="hidden md:block border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-gray-500 text-[13px] font-medium">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <span>English</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Dollar</span>
              </div>
            </div>

            <nav className="flex items-center gap-6">
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
    </header>
  );
}
