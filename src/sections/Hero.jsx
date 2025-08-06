import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from '../components/HeroText';
import ParallaxBackground from '../components/ParallaxBackground';
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
     
  return (
    <section id = "home" className="flex items-start justify-center md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure 
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh"}}
      >
        <Canvas camera={{ position: [0, 1, 3]}}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.2 : 0.3}
                position={isMobile ? [0.2, -1.8, 0] : [1.3, -1, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  )
}

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position, 
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
  
  return null;
}

export default Hero;