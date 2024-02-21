import heroImg from '@/assets/eye.png';
import '@/styles.css';

const Profile = () => {
  return (
    <div className="my-14 px-7 md:h-screen md:px-10" id="profile">
      {/* 真ん中に大きく表示する */}
      <h1 className="mb-8 text-center text-6xl font-semibold text-white md:mb-0">
        Profile
      </h1>
      {/* レスポンシブ用のdiv */}
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
        {/* 画像を表示 */}
        <div className="relative order-first">
          <img src={heroImg} alt="" className="no-drag" />
        </div>
        {/* NameとJobとMainを表示 */}
        <div className="">
          <h2 className="text-5xl text-white">Name: Fuuma</h2>
          <p className="text-5xl text-white">Job: 学生(26卒)</p>
          <p className="text-5xl text-white">Main: インフラエンジニア</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
