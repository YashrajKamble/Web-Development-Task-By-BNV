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
  return (
    <>
      <Header />
      <Nav />
      <HeroSection />
      <SubHeroSection />
      <TrendingSection />
      <ColorSection />
      <Feedback />
      <BlogSection />
      <Footer />
    </>
  );
};

export default App;
