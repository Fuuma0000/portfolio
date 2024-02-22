// App.js
import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Profile from './components/Profile';
import Links from './components/Links';

const App = () => {
  const components = [Header, Profile, About, Links, Projects, Footer];

  return (
    <div className="mx-auto">
      {components.map((Component, index: number) => (
        <Component key={index} index={index} />
      ))}
    </div>
  );
};

export default App;
