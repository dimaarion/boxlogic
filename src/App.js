import {Canvas} from "@react-three/fiber"
import {Environment, CameraControls, useGLTF} from "@react-three/drei"
import Timer from "./components/Timer";
import Level from "./components/Level";
import Glasses from "./components/Glasses";
import Pause from "./components/Pause";
import LevelTransfer from "./components/LevelTransfer";
import {useSelector} from "react-redux";
import React, {Suspense} from "react";
import Loader from "./components/Loader";
import Start from "./components/Start";
import Levels from "./components/Levels";
import OpenLevelList from "./components/OpenLevelList";
import BgPause from "./components/BgPause";
import LevelMenu from "./components/LevelMenu";
import Question from "./components/Question";
import {Physics} from "@react-three/rapier";



function App() {
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectLevel = useSelector((state) => state.level);
    const selectOpenLevelPanel = useSelector((state)=>state.openLevelPanel);
    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Pause/>
                <Glasses/>
                <Level/>
                <Timer/>
                <Question />
                {selectLevel === 1 ? <Start/> : ""}
                {selectExit ? <LevelTransfer/> : ""}
                <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
                    <ambientLight intensity={Math.PI / 2}/>
                    <spotLight intensity={0.1} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow/>
                    <Levels selectLevel={selectLevel}/>
                    <Environment preset="city"/>
                    <CameraControls makeDefault distance={8}/>

                </Canvas>
                <OpenLevelList class = "panel-global"/>
                {selectOpenLevelPanel?<div>
                    <BgPause/>
                    <LevelMenu/>
                </div>:""}
            </Suspense>
        </>
    )
}

useGLTF.preload([
    './asset/obj/cub.glb',
    './asset/obj/box2.glb',
    './asset/obj/box3.glb',
    './asset/obj/box4.glb',
    './asset/obj/box5.glb',
    './asset/obj/box6.glb',
    './asset/obj/box7.glb',
    './asset/obj/box8.glb',
    './asset/obj/box9.glb',
    './asset/obj/box10.glb'
]);

export default App;
