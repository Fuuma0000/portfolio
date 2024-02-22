import heroImg from '@/assets/eye.png';
import '@/styles.css';

const Profile = () => {
  return (
    <div className="my-14 px-7 md:h-full md:px-10" id="profile">
      {/* 真ん中に大きく表示する */}
      <h1 className="text-primary mb-8 text-center text-6xl font-semibold md:mb-0">
        Profile
      </h1>
      {/* レスポンシブ用のdiv */}
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        {/* 画像を表示 */}
        <div className="relative order-first">
          <img src={heroImg} alt="" className="no-drag w-80 md:w-96" />
        </div>
        {/* NameとJobとMainを表示 */}
        <div className="mb-4 lg:pr-32">
          <div className="mb-8 flex">
            <p className="mr-2 text-lg text-white md:text-3xl">Name:</p>
            <h2 className="text-lg text-white md:text-3xl">Fuuma</h2>
          </div>
          <div className="mb-8 flex">
            <p className="mr-2 text-lg text-white md:text-3xl">Job:</p>
            <p className="text-lg text-white md:text-3xl">学生(26卒)</p>
          </div>
          <div className="mb-8 flex">
            <p className="mr-2 text-lg text-white md:text-3xl">Main:</p>
            <p className="text-lg text-white md:text-3xl">インフラ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
