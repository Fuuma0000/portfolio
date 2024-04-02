import { animateScroll as scroll } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';
// import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
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

  return (
    <motion.button
      initial={{ y: 0 }}
      animate={controls}
      className={`fixed bottom-4 right-4 h-20  w-20 rounded-full bg-icon px-6 md:h-24 md:w-24 md:px-8 md:py-4 `}
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
    </motion.button>
  );
};

export default ScrollToTopButton;
