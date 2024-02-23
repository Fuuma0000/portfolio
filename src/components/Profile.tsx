import heroImg from '@/assets/eye.png';
import '@/styles.css';

const Profile = ({ index }: { index: number }) => {
  return (
    <div className={`bg-${index % 2 === 0 ? 'even' : 'odd'} `} id="profile">
      {/* 真ん中に大きく表示する */}
      <div className="mx-auto flex h-screen max-w-7xl  flex-col justify-center pt-8 md:pt-0">
        <h1 className="relative pb-8 text-center text-3xl font-semibold text-primary ">
          Profile
        </h1>
        {/* レスポンシブ用のdiv */}
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          {/* 画像を表示 */}
          <div className="relative order-first">
            <img src={heroImg} alt="" className="no-drag w-64 md:w-96" />
          </div>
          {/* NameとJobとMainを表示 */}
          <div className="mb-4 lg:pr-32">
            <table className="w-full">
              <tbody>
                <tr className="mb-4 flex flex-col items-center md:mb-16">
                  <td className="text-sm text-white md:text-base">Name</td>
                  <td className="text-lg text-white md:text-2xl">Fuuma</td>
                </tr>
                <tr className="mb-4 flex flex-col items-center md:mb-16">
                  <td className="text-sm text-white md:text-base">Job</td>
                  <td className="text-lg text-white md:text-2xl">学生(26卒)</td>
                </tr>
                <tr className="mb-4 flex flex-col items-center md:mb-16">
                  <td className="text-sm text-white md:text-base">AboutMe</td>
                  <td className="max-w-[400px] text-lg text-white md:text-2xl">
                    よろしくお願いします。よろしくお願いします。よろしくお願いします。
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
