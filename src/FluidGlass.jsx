/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial, RoundedBox } from '@react-three/drei'
import { useRef } from 'react'

export default function FluidGlass({ mode = 'bar', barProps = {} }) {

  return (
    <div className="fluidGlassCanvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 28 }} dpr={[1, 1.75]} gl={{ alpha: true }}>
        <color attach="background" args={['#000000']} />
        <BarScene {...barProps} />
      </Canvas>
    </div>
  )
}

function BarScene({
  color = '#f5f7fb',
  attenuationColor = '#ffd6db',
  thickness = 2.8,
  ior = 1.18,
  chromaticAberration = 0.035,
}) {
  const glassRef = useRef(null)
  const glowRef = useRef(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const px = state.pointer.x
    const py = state.pointer.y

    if (glassRef.current) {
      glassRef.current.rotation.x = py * 0.08
      glassRef.current.rotation.y = px * 0.12
      glassRef.current.position.x = px * 0.16
      glassRef.current.position.y = py * 0.08
    }

    if (glowRef.current) {
      glowRef.current.position.x = Math.sin(t * 0.7) * 1.8
      glowRef.current.position.y = Math.cos(t * 0.45) * 0.4
    }
  })

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[2, 3, 5]} intensity={1.8} color="#ffffff" />
      <directionalLight position={[-3, -2, 4]} intensity={0.75} color="#ffc7cf" />

      <Float speed={1.1} rotationIntensity={0.08} floatIntensity={0.12}>
        <mesh ref={glowRef} position={[0, 0, -1.8]}>
          <sphereGeometry args={[1.15, 32, 32]} />
          <meshBasicMaterial color="#ff5061" transparent opacity={0.18} />
        </mesh>
      </Float>

      <mesh position={[-2.6, 0.7, -2.4]} rotation={[0, 0, -0.34]}>
        <planeGeometry args={[3.4, 1.3]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
      </mesh>

      <mesh position={[2.3, -0.35, -2.2]} rotation={[0, 0, 0.28]}>
        <planeGeometry args={[2.9, 1.15]} />
        <meshBasicMaterial color="#ff6b78" transparent opacity={0.12} />
      </mesh>

      <group ref={glassRef}>
        <RoundedBox args={[6.2, 1.36, 0.56]} radius={0.62} smoothness={6}>
          <MeshTransmissionMaterial
            transmission={1}
            roughness={0.02}
            thickness={thickness}
            ior={ior}
            chromaticAberration={chromaticAberration}
            anisotropy={0.16}
            distortion={0.08}
            distortionScale={0.18}
            temporalDistortion={0.12}
            attenuationDistance={0.42}
            attenuationColor={attenuationColor}
            color={color}
            clearcoat={1}
            clearcoatRoughness={0.12}
            backside
            backsideThickness={0.4}
            samples={8}
            resolution={256}
          />
        </RoundedBox>
      </group>

      <Environment resolution={64}>
        <mesh position={[0, 1.8, -4]}>
          <planeGeometry args={[16, 4]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.28} />
        </mesh>
        <mesh position={[0, -1.4, -4]}>
          <planeGeometry args={[16, 3]} />
          <meshBasicMaterial color="#9d0f1d" transparent opacity={0.22} />
        </mesh>
      </Environment>
    </>
  )
}
