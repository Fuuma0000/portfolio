import { useEffect, useState } from 'react';
import heroImg from '@/assets/eye.webp';
import mobileHeroImg from '@/assets/mobile-eye.webp';
import '@/styles.css';
import { useRecoilState } from 'recoil';
import { isDarkModeState } from '@/state/isDarkModeState';

const Profile = ({ index }: { index: number }) => {
  const [isDarkMode] = useRecoilState(isDarkModeState);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // 画像をプリロード
    const img = new Image();
    img.src = window.innerWidth < 768 ? mobileHeroImg : heroImg;
    img.onload = () => {
      setImageUrl(img.src);
    };
  }, []);

  return (
    <div
      className={`bg-${isDarkMode ? 'dark-' : ''}${index % 2 === 0 ? 'even' : 'odd'}`}
      id="profile"
    >
      {/* 真ん中に大きく表示する */}
      <div className="mx-auto flex h-screen max-w-7xl  flex-col justify-center pt-8 md:pt-0">
        <h1 className="pb-8 text-center text-3xl font-semibold text-primary">
          Profile
        </h1>
        {/* レスポンシブ用のdiv */}
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          {/* 画像を表示 */}
          <div className="order-first">
            {imageUrl && (
              <div
                className="no-drag h-64 w-64 bg-cover bg-center md:h-96 md:w-96"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                }}
              />
            )}
          </div>
          {/* NameとJobとMainを表示 */}
          <div className="mb-4 mt-4 lg:pr-32">
            <table className="w-full">
              <tbody>
                <tr className="mb-6 flex flex-col items-center md:mb-16">
                  <td
                    className={`text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-black'}`}
                  >
                    Name
                  </td>
                  <td
                    className={`text-lg md:text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}
                  >
                    Fuuma
                  </td>
                </tr>
                <tr className="mb-6 flex flex-col items-center md:mb-16">
                  <td
                    className={`md:text-base" text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}
                  >
                    Job
                  </td>
                  <td
                    className={`text-lg md:text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}
                  >
                    学生(26卒)
                  </td>
                </tr>
                <tr className="mb-6 flex flex-col items-center md:mb-16">
                  <td
                    className={`text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-black'}`}
                  >
                    AboutMe
                  </td>
                  <td
                    className={`max-w-[300px] text-center text-lg md:max-w-[400px] md:text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}
                  >
                    よろしくお願いします。
                    <br /> (サイトの中身は書き換え途中です)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
