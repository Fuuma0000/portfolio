// App.js
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Links from './components/Links';
import Profile from './components/Profile';
import Footer from './components/Footer';

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
