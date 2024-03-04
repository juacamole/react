import './App.css';
import { Canvas } from "@react-three/fiber";
import Blog from "./Blog.tsx";
import { useState } from "react";
import Model from "./Model.tsx";
import Profile from "./Profile.tsx";

function App() {
    const path = "./aston_martin_valkyrie.glb";
    const [value, setValue] = useState([0.2, 0, 0]);

    function updateSliderValue(v) {
        setValue([0.2, parseFloat(v), 0]);
    }

    return (
        <>
            <Blog></Blog>
            <div id="canvas-div">
                <Canvas>
                    <Model value={value} path={path}/>
                </Canvas>
                <input
                    type="range"
                    id="slider"
                    min="-3.15"
                    max="3.15"
                    value={value[1]}
                    step="0.1"
                    onChange={(event) => updateSliderValue(event.target.value)}
                />
            </div>
            <Profile></Profile>
        </>
    );
}

export default App;
