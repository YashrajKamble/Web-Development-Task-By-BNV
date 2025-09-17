import Header from "../src/components/Header";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
import BlogSection from "../src/components/BlogSection";
import Feedback from "../src/components/Feedback";
import ColorSection from "../src/components/ColorSection";
import HeroSection from "../src/components/HeroSection";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <HeroSection />
      <ColorSection />
      <Feedback />
      <BlogSection />
      <Footer />
    </>
  );
};

export default App;
