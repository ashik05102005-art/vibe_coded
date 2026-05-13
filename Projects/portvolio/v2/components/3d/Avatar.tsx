"use client";

import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Avatar({ ...props }) {
  const group = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftForearmRef = useRef<THREE.Group>(null);
  const rightForearmRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftCalfRef = useRef<THREE.Group>(null);
  const rightCalfRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (headRef.current) {
      const target = new THREE.Vector3(state.mouse.x * 2.5, state.mouse.y * 2.5 + 1.2, 3);
      headRef.current.lookAt(target);
    }
    
    if (group.current) {
      group.current.position.y = -1.2 + Math.sin(t * 0.8) * 0.03;
      group.current.rotation.y = Math.sin(t * 0.2) * 0.05;
    }

    // Natural breathing / idle animation
    const breathing = Math.sin(t * 1.5) * 0.02;
    if (leftArmRef.current) leftArmRef.current.rotation.z = -0.1 - breathing;
    if (rightArmRef.current) rightArmRef.current.rotation.z = 0.1 + breathing;
    
    // Subtle movement based on mouse
    if (group.current) {
      group.current.rotation.x = state.mouse.y * 0.05;
      group.current.rotation.z = -state.mouse.x * 0.05;
    }
  });

  const skinMaterial = <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />;
  const jointMaterial = <meshStandardMaterial color="#1a1a1a" metalness={1} roughness={0} />;
  const tshirtMaterial = <meshStandardMaterial color="#00f2ff" metalness={0.2} roughness={0.8} />;
  const glowMaterial = <meshBasicMaterial color="#00f2ff" />;

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Pelvis / Hips */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[0.3, 0.12, 0.18]} />
        {skinMaterial}
      </mesh>

      {/* T-SHIRT BODY */}
      <group position={[0, 0.45, 0]}>
        {/* Lower T-shirt / Waist */}
        <mesh position={[0, 0.15, 0]} castShadow>
          <capsuleGeometry args={[0.13, 0.22, 4, 12]} />
          {tshirtMaterial}
        </mesh>
        
        {/* Main T-shirt / Chest */}
        <mesh position={[0, 0.45, 0]} castShadow>
          <boxGeometry args={[0.36, 0.36, 0.23]} />
          {tshirtMaterial}
        </mesh>

        {/* Upper T-shirt / Shoulders */}
        <group position={[0, 0.65, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.49, 0.13, 0.23]} />
            {tshirtMaterial}
          </mesh>
        </group>
      </group>

      {/* Arms */}
      <group position={[0, 1.05, 0]}>
        {/* Left Arm Chain */}
        <group ref={leftArmRef} position={[-0.25, 0, 0]}>
          {/* Shoulder Joint */}
          <mesh>
            <sphereGeometry args={[0.08, 16, 16]} />
            {tshirtMaterial}
          </mesh>
          {/* SLEEVE */}
          <mesh position={[0, -0.12, 0]} castShadow>
            <capsuleGeometry args={[0.07, 0.15, 4, 8]} />
            {tshirtMaterial}
          </mesh>
          {/* SKIN ARM */}
          <mesh position={[0, -0.25, 0]} castShadow>
            <capsuleGeometry args={[0.05, 0.25, 4, 8]} />
            {skinMaterial}
          </mesh>
          
          <group ref={leftForearmRef} position={[0, -0.4, 0]}>
            <mesh>
              <sphereGeometry args={[0.05, 16, 16]} />
              {jointMaterial}
            </mesh>
            <mesh position={[0, -0.2, 0]}>
              <capsuleGeometry args={[0.04, 0.28, 4, 8]} />
              {skinMaterial}
            </mesh>
            {/* Hand */}
            <mesh position={[0, -0.4, 0]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              {skinMaterial}
            </mesh>
          </group>
        </group>

        {/* Right Arm Chain */}
        <group ref={rightArmRef} position={[0.25, 0, 0]}>
          {/* Shoulder Joint */}
          <mesh>
            <sphereGeometry args={[0.08, 16, 16]} />
            {tshirtMaterial}
          </mesh>
          {/* SLEEVE */}
          <mesh position={[0, -0.12, 0]} castShadow>
            <capsuleGeometry args={[0.07, 0.15, 4, 8]} />
            {tshirtMaterial}
          </mesh>
          {/* SKIN ARM */}
          <mesh position={[0, -0.25, 0]} castShadow>
            <capsuleGeometry args={[0.05, 0.25, 4, 8]} />
            {skinMaterial}
          </mesh>
          
          <group ref={rightForearmRef} position={[0, -0.4, 0]}>
            <mesh>
              <sphereGeometry args={[0.05, 16, 16]} />
              {jointMaterial}
            </mesh>
            <mesh position={[0, -0.2, 0]}>
              <capsuleGeometry args={[0.04, 0.28, 4, 8]} />
              {skinMaterial}
            </mesh>
            {/* Hand */}
            <mesh position={[0, -0.4, 0]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              {skinMaterial}
            </mesh>
          </group>
        </group>
      </group>

      {/* Legs */}
      <group position={[0, 0.4, 0]}>
        {/* Left Leg */}
        <group ref={leftLegRef} position={[-0.12, 0, 0]}>
          <mesh position={[0, -0.25, 0]} castShadow>
            <capsuleGeometry args={[0.08, 0.4, 4, 8]} />
            {skinMaterial}
          </mesh>
          <group ref={leftCalfRef} position={[0, -0.5, 0]}>
            <mesh>
              <sphereGeometry args={[0.06, 16, 16]} />
              {jointMaterial}
            </mesh>
            <mesh position={[0, -0.25, 0]} castShadow>
              <capsuleGeometry args={[0.06, 0.4, 4, 8]} />
              {skinMaterial}
            </mesh>
            {/* Foot */}
            <mesh position={[0, -0.5, 0.05]}>
              <boxGeometry args={[0.1, 0.05, 0.2]} />
              {skinMaterial}
            </mesh>
          </group>
        </group>

        {/* Right Leg */}
        <group ref={rightLegRef} position={[0.12, 0, 0]}>
          <mesh position={[0, -0.25, 0]} castShadow>
            <capsuleGeometry args={[0.08, 0.4, 4, 8]} />
            {skinMaterial}
          </mesh>
          <group ref={rightCalfRef} position={[0, -0.5, 0]}>
            <mesh>
              <sphereGeometry args={[0.06, 16, 16]} />
              {jointMaterial}
            </mesh>
            <mesh position={[0, -0.25, 0]} castShadow>
              <capsuleGeometry args={[0.06, 0.4, 4, 8]} />
              {skinMaterial}
            </mesh>
            {/* Foot */}
            <mesh position={[0, -0.5, 0.05]}>
              <boxGeometry args={[0.1, 0.05, 0.2]} />
              {skinMaterial}
            </mesh>
          </group>
        </group>
      </group>

      {/* Neck & Head */}
      <group ref={headRef} position={[0, 1.25, 0]}>
        {/* Neck */}
        <mesh position={[0, -0.05, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.1]} />
          {skinMaterial}
        </mesh>
        {/* Head */}
        <mesh position={[0, 0.15, 0]} castShadow>
          <sphereGeometry args={[0.16, 32, 32]} />
          {skinMaterial}
        </mesh>
        
        {/* Advanced Visor / Eyes */}
        <group position={[0, 0.18, 0.12]}>
          <mesh>
            <boxGeometry args={[0.2, 0.04, 0.04]} />
            {glowMaterial}
          </mesh>
          <mesh position={[0, 0, 0.02]}>
            <boxGeometry args={[0.08, 0.02, 0.01]} />
            <meshBasicMaterial color="#fff" />
          </mesh>
        </group>
      </group>

      {/* Ambient Floor Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.6, 0]}>
        <torusGeometry args={[1.5, 0.002, 16, 100]} />
        <meshBasicMaterial color="#00f2ff" transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/avatar.glb");
