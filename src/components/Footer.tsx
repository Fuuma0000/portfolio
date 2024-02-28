import { useRecoilState } from 'recoil';
import { isDarkModeState } from '@/state/isDarkModeState';

const Footer = ({ index }: { index: number }) => {
  const [isDarkMode] = useRecoilState(isDarkModeState);

  return (
    <div
      className={`bg-${isDarkMode ? 'dark-' : ''}${index % 2 === 0 ? 'even' : 'odd'}`}
      id="footer"
    >
      <footer className="mx-auto max-w-7xl py-1">
        <p
          className={`text-center ${isDarkMode ? 'text-white' : 'text-black'}`}
        >
          © 2024 - Copyright Fuuma.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
