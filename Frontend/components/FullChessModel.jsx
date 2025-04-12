import { useGLTF } from "@react-three/drei";
useGLTF.preload("/models/chess_board.glb");

export default function FullChessModel({ position = [0, 0, 0], scale = 1 }) {
  const { scene } = useGLTF("/models/chess_board.glb");

  return (
    <primitive
      object={scene}
      position={position}
      scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
    />
  );
}
