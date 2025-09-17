import React, { useEffect, useRef } from "react";
import { money } from "../hooks/Currency";
import { FavoriteIcon } from "../hooks/Icons";

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

  if (error) {
    return (
      <section className="px-4 md:px-0 py-8 max-w-[1225px] mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="text-red-600 font-medium mb-2">
            Unable to load content
          </div>
          <div className="text-red-500 text-sm">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className="px-4 md:px-0 py-8 max-w-[1225px] mx-auto"
      id="categories"
    >
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
            disabled={loading}
          >
            ALL
          </button>
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-200 rounded-full h-9 w-20"
              />
            ))
          ) : categories.length > 0 ? (
            categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-4 py-2 rounded-full border text-sm cursor-pointer ${
                  selectedCat === c.id ? "bg-black text-white" : "bg-white"
                }`}
                aria-pressed={selectedCat === c.id}
                disabled={loading}
              >
                {c.name}
              </button>
            ))
          ) : (
            <div className="px-4 py-2 rounded-full border text-sm bg-gray-50 text-gray-400">
              No categories available
            </div>
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
          disabled={loading}
        >
          All
        </button>
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-200 rounded-full h-7 w-16 flex-shrink-0"
            />
          ))
        ) : categories.length > 0 ? (
          categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCat(c.id)}
              className={`px-3 py-1.5 rounded-full border text-sm ${
                selectedCat === c.id ? "bg-black text-white" : "bg-white"
              }`}
              disabled={loading}
            >
              {c.name}
            </button>
          ))
        ) : (
          <div className="px-3 py-1.5 rounded-full border text-sm bg-gray-50 text-gray-400 flex-shrink-0">
            No categories
          </div>
        )}
      </div>

      <div className="mt-4">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-4xl h-44 md:h-60 mb-2" />
                <div className="p-1">
                  <div className="bg-gray-200 h-4 rounded mb-2" />
                  <div className="bg-gray-200 h-3 rounded w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="text-gray-400 text-lg mb-2">No products found</div>
            <div className="text-gray-500 text-sm">
              {selectedCat
                ? "Try selecting a different category"
                : "No products available at the moment"}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {products.map((p) => (
              <article key={p.id} className="relative cursor-pointer group">
                <div className="w-full h-44 md:h-60 rounded-4xl overflow-hidden bg-gray-200">
                  <img
                    src={p.images && p.images[0]}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: "4/3" }}
                    onError={(e) => {
                      e.target.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f3f4f6"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" fill="%23d1d5db"%3ENo Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <button
                    aria-label="Add to favorites"
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition-colors"
                  >
                    <FavoriteIcon />
                  </button>
                </div>

                <div className="p-1 mb-2">
                  <h3 className="text-sm md:text-base font-medium line-clamp-2 font-inter">
                    {p.title}
                  </h3>
                  <div className="mt-2 text-sm text-gray-600 font-medium">
                    {p.price ? money(p.price) : "Price unavailable"}
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
