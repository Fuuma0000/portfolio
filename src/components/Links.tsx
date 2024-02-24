import githubImg from '@/assets/logos/github.webp';
import qiitaImg from '@/assets/logos/qiita.webp';
import twitterImg from '@/assets/logos/twitter.webp';
import connpassImg from '@/assets/logos/connpass.webp';
import atcoderImg from '@/assets/logos/atcoder.webp';
import growiImg from '@/assets/logos/growi.webp';
import mailImg from '@/assets/logos/mail.webp';

const Links = ({ index }: { index: number }) => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('メールアドレスをコピーしました');
    } catch (err) {
      alert('コピーに失敗しました');
    }
  };
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
      href: 'https://twitter.com/Fuum_a',
      src: twitterImg,
      text: 'Twitter',
    },
    {
      href: 'https://connpass.com/user/Fuuma_4/',
      src: connpassImg,
      text: 'connpass',
    },
    {
      href: 'https://atcoder.jp/users/Fuuma_8',
      src: atcoderImg,
      text: 'AtCoder',
    },
    {
      href: 'https://growi.fuuma.net/',
      src: growiImg,
      text: 'Growi',
    },
  ];

  return (
    <div className={`bg-${index % 2 === 0 ? 'even' : 'odd'}`} id="links">
      <div className="mx-auto flex h-screen max-w-7xl flex-col justify-center">
        {/* 真ん中に大きく表示する */}
        <h1 className="mb-8 text-center text-3xl font-semibold text-primary md:mb-0">
          Links
        </h1>
        {/* レスポンシブ用のdiv */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center">
          {linkData.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              className="mx-2 mb-4 flex flex-col items-center"
            >
              <img
                src={link.src}
                alt=""
                className="h-[60px] w-[60px] rounded-full md:h-[80px] md:w-[80px]"
              />
              <span className="mt-2 text-xs text-white opacity-60 md:text-sm">
                {link.text}
              </span>
            </a>
          ))}
          {/* メールのみ別で実装 */}
          <a
            key={index}
            // href={}
            target="_blank"
            className="mx-2 mb-4 flex flex-col items-center"
            onClick={() => {
              copyToClipboard('masa81hiro69@gmail.com');
            }}
          >
            <img
              src={mailImg}
              alt=""
              className="h-[60px] w-[60px] rounded-full md:h-[80px] md:w-[80px]"
            />
            <span className="mt-2 text-xs text-white opacity-60 md:text-sm">
              Mail
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
