import githubImg from '@/assets/github.png';
import qiitaImg from '@/assets/qiita.png';
import twitterImg from '@/assets/twitter.png';

const Links = ({ index }: { index: number }) => {
  // Array to manage link data
  const linkData = [
    {
      href: 'https://github.com/Fuuma0000',
      src: githubImg,
      text: 'Github',
    },
    {
      href: 'https://qiita.com/Fuuma',
      src: qiitaImg,
      text: 'Qiita',
    },
    {
      href: 'https://github.com/Fuuma0000',
      src: twitterImg,
      text: 'Twitter',
    },
  ];

  return (
    <div className={`bg-${index % 2 === 0 ? 'even' : 'odd'}`} id="links">
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center md:h-screen">
        {/* 真ん中に大きく表示する */}
        <h1 className="mb-8 text-center text-3xl font-semibold text-primary md:mb-0">
          Links
        </h1>
        {/* レスポンシブ用のdiv */}
        <div className="mt-8">
          {/* リンクを表示 */}
          <ul className="flex flex-row items-center justify-center gap-10">
            {linkData.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="flex cursor-pointer flex-col items-center"
                >
                  <img
                    src={link.src}
                    alt=""
                    className="h-[120px] w-[120px] rounded-full"
                  />
                  <span className="text-sm text-white opacity-60">
                    {link.text}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Links;
