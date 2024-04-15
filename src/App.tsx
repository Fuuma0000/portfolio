import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Links from '@/components/Links';
import Profile from '@/components/Profile';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollTopButton';
import Test from '@/components/Test';
import NotFound from './components/NotFound';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const components = [Header, Profile, About, Links, Projects, Footer, Test];

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // 2秒後にロードを非表示にする
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoaded ? (
            <div className="mx-auto">
              {components.map((Component, index) => (
                <Component key={index} index={index} />
              ))}
              <ScrollToTopButton />
            </div>
          ) : (
            <Loader />
          )
        }
      />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
