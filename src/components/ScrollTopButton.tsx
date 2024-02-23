import { animateScroll as scroll } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const ScrollToTopButton = () => {
  const controls = useAnimation();

  const scrollToTop = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 一旦下に少しボタンが移動する
    await controls.start({ y: 50 });

    // トップにスクロール
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });

    // ボタンを上に移動させるアニメーション
    await controls.start({
      y: -1980,
      transition: { duration: 2 },
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

  return (
    <motion.button
      initial={{ y: 0 }}
      animate={controls}
      className={`bg-icon fixed bottom-4 right-4 h-24 w-24 rounded-full px-8 py-4 `}
      onClick={() => {
        scrollToTop();
      }}
    >
      <div className="flex h-full w-full items-center justify-center">
        {/* 白い楕円 */}
        <div
          className="relative z-10 h-9 w-14 flex-shrink-0"
          style={{
            borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50% ',
            backgroundColor: 'white',
          }}
        ></div>
        {/* 黒い丸 */}
        <div className="absolute left-1/2 top-1/2 z-20 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black"></div>
      </div>
    </motion.button>
  );
};

export default ScrollToTopButton;
