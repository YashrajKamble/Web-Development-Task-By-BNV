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
  return (
    <>
      <Header />
      <Nav searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <HeroSection />
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
    </>
  );
};

export default App;
