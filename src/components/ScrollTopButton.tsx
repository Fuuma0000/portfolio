import { animateScroll as scroll } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showBalloon, setShowBalloon] = useState(false); // 吹き出しの表示状態を管理するstate
  const controls = useAnimation();

  const scrollToTop = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    controls.stop();
    // 一旦下に少しボタンが移動する
    await controls.start({ y: 50 });

    // トップにスクロール
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });

    // ボタンを上に移動させるアニメーション
    await controls.start({
      y: -1000, // 画面下端よりも上に位置する
      transition: { duration: 1 },
    });

    // アニメーションが完了したら非表示にし、画面の下側に移動させる
    await controls.start({
      y: 30,
      visibility: 'hidden',
    });

    // 見えるようにして、画面外から元の位置に移動させる
    controls.start({
      y: 0,
      visibility: 'visible',
    });
  };

  useEffect(() => {
    // ページがスクロールされるたびに吹き出しの表示を更新
    // 200は少し前から表示する調整用の値
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY + 200 >=
        document.body.offsetHeight
      ) {
        setShowBalloon(true);
      } else {
        setShowBalloon(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // コンポーネントがアンマウントされるときにイベントリスナーをクリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.button
      initial={{ y: 0 }}
      animate={controls}
      className={`fixed bottom-4 right-4 h-20 w-20 rounded-full bg-icon px-6 md:h-24 md:w-24 md:px-8 md:py-4 `}
      onClick={() => {
        scrollToTop();
      }}
      aria-label="トップへスクロール"
    >
      <div className="flex h-full w-full items-center justify-center">
        {/* 白い楕円 */}
        <div
          className="relative z-10 h-7 w-12 flex-shrink-0 overflow-hidden md:h-9 md:w-16"
          style={{
            borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
            backgroundColor: 'white',
          }}
        ></div>
        {/* 黒い丸 */}
        <div className="absolute z-20 h-4 w-4 rounded-full bg-black md:h-5 md:w-5"></div>
      </div>

      {/* 吹き出しの表示 */}
      <div
        className={`absolute -left-28 bottom-5 -translate-x-1/2 transform rounded-lg bg-white p-4 shadow-md transition-opacity duration-500 ${
          showBalloon ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        Click Me to Scroll Top
        {/* 三角形 */}
        <div className="absolute -right-1 top-[21px] h-0 w-0 rotate-[-45deg] transform border-8 border-solid border-white border-l-transparent border-t-transparent"></div>
      </div>
    </motion.button>
  );
};

export default ScrollToTopButton;
