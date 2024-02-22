import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Header = () => {
  let Links = [
    { name: 'Profile', link: 'profile' },
    { name: 'About', link: 'about' },
    { name: 'Projects', link: 'projects' },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="items-center justify-between px-7 py-4 md:flex md:px-10">
        {/* サイトのロゴ */}
        <div className="flex cursor-pointer text-2xl font-bold">
          <span className=" text-primary hover:text-white">Fuuma.net</span>
        </div>

        {/* モバイルの時のハンバーガー */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 h-7 w-7 cursor-pointer text-white md:hidden"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* ナビゲーション*/}
        <ul
          className={`absolute left-0 z-10 mt-4 w-full bg-slate-400 pl-9 transition-all duration-500 ease-linear sm:bg-transparent md:static md:z-auto md:mt-0 md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? 'top-12' : 'top-[-490px]'
          } `}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-7 font-semibold md:my-0 md:ml-8">
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="hover:text-primary text-white transition-all duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
