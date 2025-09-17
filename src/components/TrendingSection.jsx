import React, { useEffect, useRef } from "react";

const money = (v) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    v
  );

export default function TrendingSection({
  products,
  categories,
  selectedCat,
  setSelectedCat,
  loading,
  error,
}) {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    const attach = (el) => {
      if (!el) return;
      const onWheel = (e) => {
        const canScrollHorizontally =
          el.scrollWidth > el.clientWidth && (e.deltaY !== 0 || e.deltaX !== 0);
        if (!canScrollHorizontally) return;
        el.scrollLeft += e.deltaY;
        if (e.cancelable) e.preventDefault();
      };
      el.addEventListener("wheel", onWheel, { passive: false });
      return () => el.removeEventListener("wheel", onWheel);
    };

    const detachDesktop = attach(desktopRef.current);
    const detachMobile = attach(mobileRef.current);

    return () => {
      if (typeof detachDesktop === "function") detachDesktop();
      if (typeof detachMobile === "function") detachMobile();
    };
  }, []);

  if (error)
    return <div className="p-6 text-center text-red-600">Error: {error}</div>;

  return (
    <section className="px-4 md:px-0 py-8 max-w-[1225px] mx-auto">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar{ display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-normal">Trending</h2>

        <div
          ref={desktopRef}
          className="hidden md:flex gap-3 overflow-x-auto hide-scrollbar w-xl cursor-pointer"
        >
          <button
            className={`px-4 py-2 rounded-full border text-sm cursor-pointer ${
              !selectedCat ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => setSelectedCat(null)}
            aria-pressed={!selectedCat}
          >
            ALL
          </button>
          {categories.length > 0 ? (
            categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-4 py-2 rounded-full border text-sm cursor-pointer ${
                  selectedCat === c.id ? "bg-black text-white" : "bg-white"
                }`}
                aria-pressed={selectedCat === c.id}
              >
                {c.name}
              </button>
            ))
          ) : (
            <span className="px-4 py-2 rounded-full border text-sm bg-white text-gray-500">
              Loading...
            </span>
          )}
        </div>
      </div>

      <div
        ref={mobileRef}
        className="flex gap-2 overflow-x-auto md:hidden pb-4 hide-scrollbar"
      >
        <button
          onClick={() => setSelectedCat(null)}
          className={`px-3 py-1.5 rounded-full border text-sm ${
            !selectedCat ? "bg-black text-white" : "bg-white"
          }`}
        >
          All
        </button>
        {categories.length > 0 ? (
          categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCat(c.id)}
              className={`px-3 py-1.5 rounded-full border text-sm ${
                selectedCat === c.id ? "bg-black text-white" : "bg-white"
              }`}
            >
              {c.name}
            </button>
          ))
        ) : (
          <span className="px-3 py-1.5 rounded-full border text-sm bg-white text-gray-500">
            Loading...
          </span>
        )}
      </div>

      <div className="mt-4">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-100 rounded-2xl h-44 md:h-60"
              />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center text-gray-500 bg py-12">
            Not available
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 cursor-pointer">
            {products.map((p) => (
              <article key={p.id} className="relative">
                <div className=" w-full h-44 md:h-60 rounded-4xl overflow-hidden bg-gray-200">
                  <img
                    src={p.images && p.images[0]}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                  <button
                    aria-label="favorite"
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 21s-7-4.35-9-7.27C1.28 10.7 4 6 7.5 6c1.74 0 3.02.99 4.5 2.6C13.48 6.99 14.76 6 16.5 6 20 6 22.72 10.7 21 13.73 19 16.65 12 21 12 21z"
                        stroke="#444"
                        strokeWidth="0.8"
                        fill="none"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-1 mb-2">
                  <h3 className="text-sm md:text-base font-medium line-clamp-2 font-inter">
                    {p.title}
                  </h3>
                  <div className="mt-2 text-sm text-gray-600">
                    {money(p.price)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
