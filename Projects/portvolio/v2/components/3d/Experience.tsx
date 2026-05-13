"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import Avatar from "./Avatar";
import ParticleSystem from "./Particles";

export default function Experience() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <Avatar position={[0, -2.2, 0]} scale={2.2} />
          <ParticleSystem count={2000} />
          <Environment preset="city" />
          <ContactShadows opacity={0.4} scale={10} blur={2.4} far={4.5} />
        </Suspense>

        {/* Cinematic Camera Control - can be disabled for scroll-based control */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}
