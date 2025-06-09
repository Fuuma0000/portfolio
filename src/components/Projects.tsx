import kisyoutenketuImg1 from '@/assets/projects/kisyoutenketu/kisyoutenketu1.webp';
import kisyoutenketuImg2 from '@/assets/projects/kisyoutenketu/kisyoutenketu2.webp';
import kisyoutenketuImg3 from '@/assets/projects/kisyoutenketu/kisyoutenketu3.webp';
import kisyoutenketuImg4 from '@/assets/projects/kisyoutenketu/kisyoutenketu4.webp';
import kisyoutenketuImg5 from '@/assets/projects/kisyoutenketu/kisyoutenketu5.webp';
import kisyoutenketuImg6 from '@/assets/projects/kisyoutenketu/kisyoutenketu6.webp';
import kisyoutenketuImg7 from '@/assets/projects/kisyoutenketu/kisyoutenketu7.webp';
import kisyoutenketuImg8 from '@/assets/projects/kisyoutenketu/kisyoutenketu8.webp';

import koteAlertImg1 from '@/assets/projects/kotealert/kotealert1.webp';
import koteAlertImg2 from '@/assets/projects/kotealert/kotealert2.webp';
import portfolioImg1 from '@/assets/projects/portfolio/portfolio1.webp';
import portfolioImg2 from '@/assets/projects/portfolio/portfolio2.webp';
import pixiv_botImg1 from '@/assets/projects/pixiv_bot/pixiv_bot1.webp';
import pixiv_botImg2 from '@/assets/projects/pixiv_bot/pixiv_bot2.webp';
import pixiv_botImg3 from '@/assets/projects/pixiv_bot/pixiv_bot3.webp';
import ePlusPlusImg from '@/assets/projects/e-plus-plus.webp';
import tunaGariImg1 from '@/assets/projects/tunagari/tunagari1.webp';
import tunaGariImg2 from '@/assets/projects/tunagari/tunagari2.webp';
import shakeNekoMemeImg from '@/assets/projects/shake-neko-meme.webp';
import { useRecoilState } from 'recoil';
import { isDarkModeState } from '@/state/isDarkModeState';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Link {
  url: string;
  displayName: string;
}

interface ProjectProps {
  images: string[];
  title: string;
  description: string;
  duration: string;
  technologies: string[];
  links: Link[];
}

const Project: React.FC<
  ProjectProps & { index: number; isDarkMode: boolean }
> = ({
  images,
  title,
  description,
  duration,
  technologies,
  links,
  index,
  isDarkMode,
}) => {
  const borderClass =
    index % 2 === 1
      ? 'border-primary'
      : isDarkMode
        ? 'border-white'
        : 'border-black';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className={`my-2 rounded-lg border p-8 shadow-lg ${borderClass} ${isDarkMode ? '' : 'bg-white'}`}
    >
      <div className="slider-container mb-8">
        <Slider {...settings}>
          {(images.length === 1 ? [...images, ...images] : images).map(
            (image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            ),
          )}
        </Slider>
      </div>
      <h2
        className={`mb-2 text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}
      >
        {title}
      </h2>
      <p className={`mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        {description}
      </p>
      <div className={`mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <strong>期間:</strong> {duration}
      </div>
      <div className={`mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <strong>technologies:</strong>
        <ul className="list-disc pl-4">
          {technologies.map((tech: string, index: number) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="">
        <ul className="list-none">
          {links.map((link: Link, index: number) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {link.displayName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Projects = ({ index }: { index: number }) => {
  const [isDarkMode] = useRecoilState(isDarkModeState);
  const projects: ProjectProps[] = [
    {
      images: [
        kisyoutenketuImg1,
        kisyoutenketuImg2,
        kisyoutenketuImg3,
        kisyoutenketuImg4,
        kisyoutenketuImg5,
        kisyoutenketuImg6,
        kisyoutenketuImg7,
        kisyoutenketuImg8,
      ],
      title: '起床点結RTA',
      description:
        '技育キャンプで作成。2度寝をするのをNFCをタッチすることで防ぐことができるアプリです。',
      duration: '4月21日 〜 4月29日',
      technologies: ['Flutter', 'Firebase', 'Sqlite'],
      links: [
        {
          url: 'https://github.com/Jin2003/kishoutenketsu_rta',
          displayName: 'Github',
        },
        {
          url: 'https://youtu.be/0Cw5oNwYR0c?t=6757',
          displayName: 'Youtube',
        },
      ],
    },
    {
      images: [koteAlertImg1, koteAlertImg2],
      title: 'KoteAlert',
      description:
        'HackU名古屋で作成。\nはんだごての切り忘れを検知しユーザーと管理者に通知する',
      duration: '8月7日 〜 8月25日',
      technologies: ['Flutter', 'Node.js', 'Tailwind CSS'],
      links: [
        {
          url: 'https://github.com/Fuuma0000/smart_handagote',
          displayName: 'Github',
        },
        {
          url: 'https://protopedia.net/prototype/4905',
          displayName: 'Protopedia(詳細情報)',
        },
        {
          url: 'https://youtu.be/uI0KZHE8qAg?t=2301',
          displayName: 'Youtube',
        },
      ],
    },
    {
      images: [ePlusPlusImg],
      title: 'E++',
      description:
        '授業内で作成。\n展示会のための企業と学生を繋ぐ作品表示アプリ',
      duration: '10月1日 〜 2月9日',
      technologies: ['Next', 'Express', 'AWS'],
      links: [
        {
          url: 'https://github.com/Fuuma0000/e-ten',
          displayName: 'Github',
        },

        {
          url: 'https://github.com/Fuuma0000/e-ten/blob/main/docs/infra2.png',
          displayName: 'インフラ構成図',
        },
      ],
    },
    {
      images: [tunaGariImg1, tunaGariImg2],
      title: 'TunaGari',
      description:
        'Qiitaハッカソンで作成。\n2つの単語の繋がりから出来た画像で新しいアイデアを出す。アイデアを出し支援アプリ',
      duration: '2月10日 〜 2月11日',
      technologies: ['React', 'Tailwind', 'Firebase'],
      links: [
        {
          url: 'https://www.canva.com/design/DAF8dLcZ3Tk/17gs2jMhqitEm00o3vwF7Q/view?utm_content=DAF8dLcZ3Tk&utm_campaign=designshare&utm_medium=link&utm_source=editor',
          displayName: 'Canva',
        },
      ],
    },
    {
      images: [shakeNekoMemeImg],
      title: 'ShakeNekoMeme',
      description:
        '授業のIoTハッカソンで作成。\n首に付けたM5StickCの加速度を取り、首が振られる時に猫ミームの音楽を再生するのを作りたかった。しかし、M5StickCでは音楽が流せなかったため、スマホで代替',
      duration: '2月20日 〜 2月20日',
      technologies: ['Flutter'],
      links: [
        {
          url: 'https://github.com/Fuuma0000/ShakeNekoMeme',
          displayName: 'Github',
        },
      ],
    },
    {
      images: [portfolioImg1, portfolioImg2],
      title: 'ポートフォリオ',
      description:
        '新しい技術を試しつつ、ポートフォリオ作りました。\n右下のスクロールボタンと404ページがお気に入りです。',
      duration: '2月21日 〜 2月24日',
      technologies: ['React', 'Tailwind CSS', 'Bun', 'Vite'],
      links: [
        {
          url: 'https://github.com/Fuuma0000/portfolio',
          displayName: 'Github',
        },
        {
          url: 'https://portfolio.fuuma.net/404',
          displayName: '404ページ',
        },
      ],
    },
  ];

  const dotsStyle = {
    color: isDarkMode ? 'white' : '',
  };
  const allowStyle = {
    color: isDarkMode ? '' : '#B7B7BB',
  };

  return (
    <div
      className={`bg-${isDarkMode ? 'dark-' : ''}${index % 2 === 0 ? 'even' : 'odd'}`}
      id="projects"
    >
      {/* <SlickStyles /> */}
      <div className="mx-auto h-full max-w-7xl p-8">
        <h1 className="mb-8 text-center text-3xl font-semibold text-primary">
          Projects
        </h1>

        {/* プロジェクトを3つずつ横に表示 */}
        <div className="-mx-4 flex flex-wrap justify-start">
          {projects.map((project, index) => (
            <div key={index} className="mb-8 w-full px-4 sm:w-1/2 lg:w-1/3">
              <Project {...project} index={index} isDarkMode={isDarkMode} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .slick-dots li button:before {
          color: ${dotsStyle.color};
        }

        .slick-prev:before, .slick-next:before{
          color: ${allowStyle.color};
        }
      `}</style>
    </div>
  );
};

export default Projects;
