import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Profile from './components/Profile';
import Links from './components/LInks';

const App = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <Profile />
      <About />
      <Links />
      <Projects />
      <Footer />
    </div>
  );
};
export default App;
