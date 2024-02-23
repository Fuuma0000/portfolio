const About = ({ index }: { index: number }) => {
  return (
    <div className={`bg-${index % 2 === 0 ? 'even' : 'odd'} `} id="about">
      <div className="mx-auto flex h-screen  max-w-7xl flex-col justify-center ">
        {/* 真ん中に大きく表示する */}
        <h1 className="mb-8 text-center text-3xl font-semibold text-primary md:mb-0">
          About
        </h1>
        {/* レスポンシブ用のdiv */}
        <div className="mt-8 flex items-center justify-center text-white">
          {/* 自己紹介 */}
          <p className="max-w-[300px] text-base md:max-w-[600px]">
            2022年にECCコンピュータ専門学校に入学し、プログラミングを学び始めました。
            <br />
            インフラエンジニアを志望しているのですが、フロント・バック・モバイルなども触っています。
            <br />
            サーバー側が好きなのですが、最近はAWSも面白いと思い、勉強しています。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
