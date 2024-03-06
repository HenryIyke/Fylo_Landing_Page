import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Production from "./components/Production";

export default function App() {
  return (
    <div className="text-base font-openSans overflow-x-hidden pt-10">
      <Navbar />
      <Hero />
      <Production />
      <Cta />
      <Footer/>
    </div>
  );
}
