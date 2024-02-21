import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};
export default App;
