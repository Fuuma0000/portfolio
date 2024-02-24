import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
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

const NotFound = () => {
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

    console.log(targetRotationX, targetRotationY);

    setRotation({
      x: targetRotationX,
      y: targetRotationY,
    });
  };

  return (
    <div className="h-screen w-screen">
      <Canvas
        style={{ cursor: 'grab', position: 'absolute' }}
        onPointerMove={handleMouseMove}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <Eye rotation={rotation} />
      </Canvas>
    </div>
  );
};

export default NotFound;
