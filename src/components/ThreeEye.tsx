import React from 'react';

import { Canvas, useThree } from '@react-three/fiber';
import { useState, useEffect } from 'react';
import { TextureLoader } from 'three';
import eyeSvg from '@/assets/textures/eye.svg';

interface EyeProps {
  rotation: {
    x: number;
    y: number;
  };
}

const Eye: React.FC<EyeProps> = ({ rotation }) => {
  const textureLoader = new TextureLoader();
  const eyeTexture = textureLoader.load(eyeSvg);

  return (
    <mesh rotation={[rotation.x, rotation.y, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial map={eyeTexture} />
    </mesh>
  );
};

const Scene = ({ children }: { children: React.ReactNode }) => {
  const { gl } = useThree();

  useEffect(() => {
    // WebGLRendererにアクセスして背景色を変更
    gl.setClearColor('black');
  }, [gl]);

  return <>{children}</>;
};

const ThreeEye = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const mouse = {
      x: (clientX / window.innerWidth) * 2 - 1,
      y: -(clientY / window.innerHeight) * 2 + 1,
    };

    // マウスの位置に合わせてボールを回転させる
    const targetRotationX = -mouse.y * Math.PI * 0.25;
    const targetRotationY = mouse.x * Math.PI * 0.25;

    setRotation({
      x: targetRotationX,
      y: targetRotationY,
    });
  };
  return (
    <Canvas
      style={{ cursor: 'grab', position: 'absolute' }}
      onPointerMove={handleMouseMove}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Scene>
        <Eye rotation={rotation} />
      </Scene>
    </Canvas>
  );
};

export default ThreeEye;
