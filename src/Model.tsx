import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";

export default function Model( {value, path}: {value:number[], path: string} ){
    const actionRef = useRef(); // To store the current playing action for cleanup
    const gltf = useGLTF(path);
    const { animations } = gltf;
    const { ref, actions } = useAnimations(animations);
    useEffect(() => {

        if (animations.length > 0) {

            const firstAction = actions[Object.keys(actions)[0]];
            if (firstAction) {
                firstAction.play();
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                actionRef.current = firstAction;
            }
        }

        return () => {
            if (actionRef.current) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                actionRef.current.stop();
            }
        };
    }, [actions, animations.length]);
    return <><ambientLight intensity={8} />
    <spotLight position={[0, 0, 0]} angle={0.1} />
    <primitive ref={ref} object={gltf.scene} scale={30} position={[0, 0, -5]} rotation={value} />
</>;
}