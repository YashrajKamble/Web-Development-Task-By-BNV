import { useState, useEffect, useMemo } from "react";
import { fetchCategories, fetchProducts } from "../src/services/ProductApi";
import Header from "../src/components/Header";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import BlogSection from "../src/components/BlogSection";
import Feedback from "../src/components/Feedback";
import ColorSection from "../src/components/ColorSection";
import HeroSection from "../src/components/HeroSection";
import SubHeroSection from "../src/components/SubHeroSection";
import TrendingSection from "../src/components/TrendingSection";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    Promise.all([fetchCategories(), fetchProducts(100)])
      .then(([cats, prods]) => {
        if (!mounted) return;
        setCategories(cats || []);
        setAllProducts(prods || []);
      })
      .catch((e) => {
        if (!mounted) return;
        setError(e.message || "Failed");
      })
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, []);

  const filteredProducts = useMemo(() => {
    let tempProducts = allProducts;

    if (selectedCat) {
      tempProducts = tempProducts.filter((p) => {
        if (!p?.category) return false;
        if (typeof p.category === "object")
          return p.category.id === selectedCat;
        return p.category === selectedCat;
      });
    }

    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      tempProducts = tempProducts.filter((p) => {
        const titleMatches = p.title?.toLowerCase().includes(lowerCaseQuery);
        const descriptionMatches = p.description
          ?.toLowerCase()
          .includes(lowerCaseQuery);
        return titleMatches || descriptionMatches;
      });
    }

    return tempProducts;
  }, [allProducts, selectedCat, searchQuery]);

  const scrollToTop = () => {
    const el = document.getElementById("home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <Nav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <section id="home">
        <HeroSection />
      </section>

      <SubHeroSection />
      <TrendingSection
        products={filteredProducts}
        categories={categories}
        selectedCat={selectedCat}
        setSelectedCat={setSelectedCat}
        loading={loading}
        error={error}
      />
      <ColorSection />
      <Feedback />
      <BlogSection />
      <Footer />

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        className={`fixed right-4 bottom-6 z-50 p-3 rounded-full shadow-lg transition-opacity transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black bg-black text-white ${
          showScroll ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
};

export default App;
