"use client";

import { Component, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";

function soleShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-1.14, 0.12);
  shape.quadraticCurveTo(-1.2, 0.055, -1.08, 0.035);
  shape.lineTo(0.79, 0.035);
  shape.quadraticCurveTo(1.03, 0.035, 1.22, 0.105);
  shape.quadraticCurveTo(1.31, 0.14, 1.24, 0.205);
  shape.quadraticCurveTo(1.14, 0.26, 0.93, 0.235);
  shape.lineTo(-0.85, 0.235);
  shape.quadraticCurveTo(-1.11, 0.22, -1.14, 0.12);
  return shape;
}

function upperShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-1.02, 0.205);
  shape.lineTo(-0.99, 0.61);
  shape.quadraticCurveTo(-0.98, 0.83, -0.8, 0.86);
  shape.lineTo(-0.57, 0.86);
  shape.quadraticCurveTo(-0.42, 0.83, -0.32, 0.65);
  shape.lineTo(-0.18, 0.58);
  shape.quadraticCurveTo(0.18, 0.5, 0.55, 0.47);
  shape.lineTo(0.91, 0.41);
  shape.quadraticCurveTo(1.14, 0.37, 1.24, 0.205);
  shape.lineTo(-1.02, 0.205);
  return shape;
}

function tongueShape() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.48, 0.57);
  shape.quadraticCurveTo(-0.24, 0.68, 0.02, 0.61);
  shape.lineTo(0.3, 0.53);
  shape.lineTo(0.18, 0.8);
  shape.quadraticCurveTo(-0.05, 0.87, -0.34, 0.78);
  shape.closePath();
  return shape;
}

function extrudeCentered(shape: THREE.Shape, depth: number, bevelSize: number) {
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize,
    bevelThickness: bevelSize,
    curveSegments: 10,
  });
  geometry.translate(0, 0, -depth / 2);
  return geometry;
}

function Lace({ start, end, height }: { start: number; end: number; height: number }) {
  const geometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(start, height, 0.195),
      new THREE.Vector3((start + end) / 2, height + 0.045, 0),
      new THREE.Vector3(end, height, -0.195),
    ]);
    return new THREE.TubeGeometry(curve, 12, 0.014, 5, false);
  }, [start, end, height]);
  return <mesh geometry={geometry} castShadow><meshStandardMaterial color="#d0c5b6" roughness={0.68} /></mesh>;
}

export function SafetyShoe() {
  const sole = useMemo(() => extrudeCentered(soleShape(), 0.56, 0.025), []);
  const upper = useMemo(() => extrudeCentered(upperShape(), 0.43, 0.022), []);
  const tongue = useMemo(() => extrudeCentered(tongueShape(), 0.27, 0.018), []);
  const laceRows = [-0.37, -0.2, -0.03, 0.14, 0.31];

  return <group rotation={[0, -0.12, 0]}>
    <mesh geometry={sole} position={[0, 0, 0]} castShadow receiveShadow><meshStandardMaterial color="#101214" roughness={0.72} /></mesh>
    <mesh position={[0, 0.205, 0.286]} castShadow><boxGeometry args={[1.78, 0.032, 0.018]} /><meshStandardMaterial color="#ff6a00" roughness={0.55} /></mesh>
    <mesh geometry={upper} castShadow receiveShadow><meshStandardMaterial color="#17191b" roughness={0.48} metalness={0.04} /></mesh>
    <mesh geometry={tongue} position={[0, 0, 0.035]} castShadow><meshStandardMaterial color="#24272a" roughness={0.58} /></mesh>

    {/* Reinforced toe and heel overlays */}
    <mesh position={[0.87, 0.315, 0.195]} rotation={[0, 0, -0.12]} scale={[0.3, 0.12, 0.24]} castShadow><sphereGeometry args={[1, 24, 16]} /><meshStandardMaterial color="#202326" roughness={0.4} /></mesh>
    <mesh position={[-0.77, 0.48, 0.225]} rotation={[0, 0, -0.04]} castShadow><boxGeometry args={[0.27, 0.34, 0.035]} /><meshStandardMaterial color="#202326" roughness={0.56} /></mesh>

    {/* Three orange side marks */}
    {[0, 1, 2].map((stripe) => <mesh key={stripe} position={[-0.07 + stripe * 0.2, 0.455 + stripe * 0.006, 0.239]} rotation={[0, 0, -0.52]} castShadow><boxGeometry args={[0.085, 0.29, 0.022]} /><meshStandardMaterial color="#ff6a00" roughness={0.42} emissive="#6d2400" emissiveIntensity={0.12} /></mesh>)}

    {/* Metal eyelets and woven laces */}
    {laceRows.map((x, index) => {
      const y = 0.65 - index * 0.035;
      return <group key={x}>
        <mesh position={[x, y, 0.222]} rotation={[0, 0, 0]}><torusGeometry args={[0.026, 0.008, 6, 16]} /><meshStandardMaterial color="#e1a51d" metalness={0.78} roughness={0.3} /></mesh>
        <mesh position={[x, y, -0.222]} rotation={[Math.PI, 0, 0]}><torusGeometry args={[0.026, 0.008, 6, 16]} /><meshStandardMaterial color="#e1a51d" metalness={0.78} roughness={0.3} /></mesh>
        {index < laceRows.length - 1 ? <Lace start={x - 0.05} end={laceRows[index + 1] + 0.05} height={y - 0.01} /> : null}
      </group>;
    })}

    {/* Heel collar and soft, layered side seams */}
    <mesh position={[-0.78, 0.82, 0]} rotation={[0, 0, -0.06]}><torusGeometry args={[0.16, 0.035, 8, 28, Math.PI * 1.65]} /><meshStandardMaterial color="#303437" roughness={0.8} /></mesh>
    <mesh position={[0.7, 0.27, 0.292]}><boxGeometry args={[0.14, 0.028, 0.012]} /><meshStandardMaterial color="#bfc2c3" roughness={0.62} /></mesh>
  </group>;
}

function ShoeRig({ interactive }: { interactive: boolean }) {
  const root = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const onPointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!interactive) return;
    target.current = { x: event.pointer.y, y: event.pointer.x };
  };
  useFrame((_, delta) => {
    if (!root.current || !interactive) return;
    root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, -0.14 + target.current.y * 0.18, 4.5, delta);
    root.current.rotation.x = THREE.MathUtils.damp(root.current.rotation.x, target.current.x * 0.08, 4.5, delta);
    root.current.position.y = THREE.MathUtils.damp(root.current.position.y, Math.sin(performance.now() * 0.00075) * 0.035, 3, delta);
  });

  return <group onPointerMove={onPointerMove}>
    <Float speed={interactive ? 1.15 : 0} rotationIntensity={interactive ? 0.025 : 0} floatIntensity={interactive ? 0.09 : 0}>
      <group ref={root} position={[0, -0.02, 0]} rotation={[0.02, -0.14, 0]} scale={1.04}>
        <SafetyShoe />
      </group>
    </Float>
  </group>;
}

function ContextLossWatcher({ onLost }: { onLost: () => void }) {
  const gl = useThree((state) => state.gl);
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("webglcontextlost", onLost);
    return () => canvas.removeEventListener("webglcontextlost", onLost);
  }, [gl, onLost]);
  return null;
}

class SceneErrorBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    return Boolean(context);
  } catch {
    return false;
  }
}

export default function SafetyShoeScene({ interactive = true }: { interactive?: boolean }) {
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (!canUseWebGL()) setAvailable(false);
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  const handleError = () => setAvailable(false);
  if (!available) return null;

  return <SceneErrorBoundary onError={handleError}>
    <Canvas
      dpr={[1, 1.35]}
      frameloop={interactive ? "always" : "demand"}
      shadows
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [3.15, 1.65, 4.7], fov: 34, near: 0.1, far: 50 }}
      onCreated={({ camera }) => camera.lookAt(0, 0.4, 0)}
    >
      <ambientLight intensity={1.15} />
      <directionalLight position={[3.5, 4.5, 3]} intensity={3.1} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-3, 2.4, -2]} intensity={1.1} color="#ff7a21" />
      <spotLight position={[0, 4, -2]} angle={0.62} penumbra={0.75} intensity={2.2} color="#e8f1ff" />
      <ShoeRig interactive={interactive} />
      <ContactShadows position={[0, -0.015, 0]} opacity={0.42} scale={4.1} blur={2.4} far={1.4} resolution={256} color="#050607" />
      <ContextLossWatcher onLost={handleError} />
    </Canvas>
  </SceneErrorBoundary>;
}
