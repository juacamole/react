import './App.css'
import {Canvas} from "@react-three/fiber";
import Blog from "./Blog.tsx";
import {useState} from "react";
import Model from "./Model.tsx";

function App() {
      const path: string = "./aston_martin_valkyrie.glb";



    const [value, setValue] = useState([0, 0.3, 0])



    function updateSliderValue(v){
        setValue([0, v, 0]);
    }
  return (
    <>
        <Blog></Blog>
        <input type={"range"} id={'slider'} min="-6.3" max="6.3" value="0" onChange={(event) => updateSliderValue(event.target.value)}/>
        <div style={{ height: '100vh' }}>
            <Canvas>
                <Model value={value} path={path}/>
            </Canvas>
        </div>
    </>
  )
}







export default App;
