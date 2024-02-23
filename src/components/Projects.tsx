import kisyoutenketuImg from '../assets/kisyoutenketu.png';

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

const Project: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  technologies,
  links,
}) => {
  return (
    <div className="my-8 rounded-lg border p-8 shadow-lg">
      <img src={image} alt={title} className="mb-4 rounded-lg" />
      <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
      <p className="mb-4 text-white">{description}</p>
      <div className="mb-4 text-white">
        <strong>Technologies:</strong>
        <ul className="list-disc pl-4">
          {technologies.map((tech: string, index: number) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <strong>Links:</strong>
        <ul className="list-disc pl-4">
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
      technologies: ['React', 'Node.js', 'Tailwind CSS'],
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
    <div className={`bg-${index % 2 === 0 ? 'even' : 'odd'}`} id="profile">
      <div className="mx-auto h-full max-w-7xl p-8">
        <h1 className="mb-8 text-4xl font-semibold">My Projects</h1>

        {/* Render each project */}
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
