import {
  Bars3BottomRightIcon,
  XMarkIcon,
  MoonIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isDarkModeState } from '@/state/isDarkModeState';

const Header = ({ index }: { index: number }) => {
  let Links = [
    { name: 'Profile', link: 'profile' },
    { name: 'About', link: 'about' },
    { name: 'Links', link: 'links' },
    { name: 'Projects', link: 'projects' },
  ];

  let [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkModeState);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    localStorage.setItem('isDarkMode', String(!isDarkMode));
  };

  // 初回レンダリング時にlocalStorageの値を読み込み、Recoilの状態を初期化する
  useEffect(() => {
    const storedValue = localStorage.getItem('isDarkMode');
    console.log(storedValue);
    if (storedValue !== null) {
      setIsDarkMode(storedValue === 'true' ? true : false);
    } else {
      console.log('set');
      console.log(isDarkMode);
      localStorage.setItem('isDarkMode', isDarkMode.toString());
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`bg-${isDarkMode ? '' : 'dark-'}${index % 2 === 0 ? 'even' : 'odd'} w-full`}
    >
      <div className=" mx-auto max-w-7xl">
        <div className="items-center justify-between px-7 py-4 md:flex md:px-10">
          {/* サイトのロゴ */}
          <div className="flex cursor-pointer text-2xl font-bold">
            <span className={`hover:text-white" text-primary `}>Fuuma.net</span>
          </div>

          <div className="flex flex-row">
            <div
              className={`absolute right-20 top-6 font-semibold md:static md:right-0 md:my-0 md:ml-8 ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              <button onClick={toggleDarkMode}>
                <img src="" alt="" />
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* モバイルの時のハンバーガー */}
            <div
              onClick={() => setOpen(!open)}
              className={`absolute right-8 top-6 h-7 w-7 cursor-pointer  md:hidden ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
            </div>

            {/* ナビゲーション*/}
            <ul
              className={`absolute left-0 z-10 mt-4 w-full  pl-9 transition-all duration-500 ease-linear sm:bg-transparent md:static md:z-auto md:mt-0 md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
                open ? 'top-12' : 'top-[-490px]'
              } bg-${isDarkMode ? '' : 'dark-'}${index % 2 === 0 ? 'even' : 'odd'}  `}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="my-7 font-semibold md:my-0 md:ml-8"
                >
                  <Link
                    to={link.link}
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className={`transition-all duration-500 hover:text-primary ${
                      isDarkMode ? 'text-white ' : 'text-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
