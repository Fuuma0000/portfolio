import kisyoutenketuImg from '../assets/kisyoutenketu.webp';
import koteAlertImg from '../assets/kotealert.webp';
import portfolioImg from '../assets/portfolio.webp';
import ePlusPlusImg from '../assets/e-plus-plus.webp';

interface Link {
  url: string;
  displayName: string;
}

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  links: Link[];
}

const Project: React.FC<ProjectProps & { index: number }> = ({
  image,
  title,
  description,
  technologies,
  links,
  index,
}) => {
  const borderClass = index % 2 === 1 ? 'border-primary' : '';

  return (
    <div className={`my-2 rounded-lg border p-8 shadow-lg ${borderClass}`}>
      <img src={image} alt={title} className="mb-4 h-auto w-full rounded-lg" />
      <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
      <p className="mb-4 text-white">{description}</p>
      <div className="mb-4 text-white">
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
  // Sample project data
  const projects: ProjectProps[] = [
    {
      image: kisyoutenketuImg,
      title: '起床転結RTA',
      description:
        '2度寝をするのをNFCをタッチすることで防ぐことができるアプリです。',
      technologies: ['Flutter', 'Firebase', 'Sqlite'],
      links: [
        {
          url: 'https://github.com/Jin2003/kishoutenketsu_rta',
          displayName: 'Github',
        },
        {
          url: 'https://example.com/project1',
          displayName: 'Demo',
        },
      ],
    },
    {
      image: koteAlertImg,
      title: 'KoteAlert',
      description: 'はんだごての切り忘れを検知しユーザーと管理者に通知する',
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
      ],
    },
    {
      image: ePlusPlusImg,
      title: 'E++',
      description: '展示会のための企業と学生を繋ぐ作品表示アプリ',
      technologies: ['Next', 'Express', 'AWS'],
      links: [
        {
          url: 'https://github.com/Fuuma0000/e-ten',
          displayName: 'Github',
        },
        {
          url: 'https://example.com/project1',
          displayName: 'Demo',
        },
      ],
    },
    {
      image: portfolioImg,
      title: 'ポートフォリオ',
      description: '新しい技術を試しつつ、ポートフォリオ作りました',
      technologies: ['React', 'Tailwind CSS', 'Bun', 'Vite'],
      links: [
        {
          url: 'https://github.com/Jin2003/kishoutenketsu_rta',
          displayName: 'Github',
        },
        {
          url: 'https://example.com/project1',
          displayName: 'Demo',
        },
      ],
    },
  ];

  return (
    <div className={`bg-${index % 2 === 0 ? 'even' : 'odd'}`} id="projects">
      <div className="mx-auto h-full max-w-7xl p-8">
        <h1 className="mb-8 text-center text-3xl font-semibold text-primary">
          Projects
        </h1>

        {/* プロジェクトを3つずつ横に表示 */}
        <div className="-mx-4 flex flex-wrap justify-start">
          {projects.map((project, index) => (
            <div key={index} className="mb-8 w-full px-4 sm:w-1/2 lg:w-1/3">
              <Project {...project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
