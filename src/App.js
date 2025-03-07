import {Canvas, useFrame} from "@react-three/fiber"
import {Environment, CameraControls, useGLTF} from "@react-three/drei"
import Timer from "./components/Timer";
import Level from "./components/Level";
import Glasses from "./components/Glasses";
import Pause from "./components/Pause";
import LevelTransfer from "./components/LevelTransfer";
import {useDispatch, useSelector} from "react-redux";
import React, {Suspense, useEffect, useState} from "react";
import Loader from "./components/Loader";
import Start from "./components/Start";
import Levels from "./components/Levels";
import OpenLevelList from "./components/OpenLevelList";
import BgPause from "./components/BgPause";
import LevelMenu from "./components/LevelMenu";
import Question from "./components/Question";
import {Physics} from "@react-three/rapier";
import useSound from 'use-sound';
import Database from "./components/Database";


function App() {
    const db = new Database();
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectLevel = useSelector((state) => state.level);
    const selectOpenLevelPanel = useSelector((state) => state.openLevelPanel);
    const restart = useSelector((state) => state.gameRestart);
    const dispatch = useDispatch();
    const [focus, setFocus] = useState(false);
    const [play, {stop}] = useSound(
        './asset/music/child-light-145463.mp3',
        {volume: db.get("sound").music}
    );

    const [playActive] = useSound(
        './asset/music/child-light-145463.mp3',
        {volume: 1}
    );
    const [playOn] = useSound(
        './asset/music/child-light-145463.mp3',
        {volume: 1}
    );
    const [playOff] = useSound(
        './asset/music/child-light-145463.mp3',
        {volume: 1}
    );




    useEffect(() => {
        let timer;
        if (restart) {
            timer = setTimeout(() => {
                dispatch({type: "RESTART", preload: false});
            }, 500)
        }
        return () => clearTimeout(timer)
    }, [restart])



    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Pause/>
                <Glasses/>
                <Level/>
                <Timer/>
                <Question/>
                {selectExit ? <LevelTransfer/> : ""}
                <div style={{backgroundImage:"url('./asset/bg/3.png')",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"fixed",left:0,right:0,top:0,bottom:0,margin:"auto"}}/>
                <Canvas camera={{fov: 30}}>
                    <ambientLight intensity={Math.PI / 2}/>
                    <spotLight intensity={0.1} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow/>
                    <Environment preset={"city"}/>
                    <Physics>
                        {!restart ? <Levels selectLevel={selectLevel}/> : ""}
                    </Physics>


                    <CameraControls  distance={8} maxDistance={20} minDistance={2}/>

                </Canvas>
                <OpenLevelList class="panel-global"/>
                {selectOpenLevelPanel ? <div>
                    <BgPause/>
                    <LevelMenu/>
                </div> : ""}

            </Suspense>
        </>
    )
}

useGLTF.preload([
    './asset/obj/box_1.glb',
    './asset/obj/cub.glb',
    './asset/obj/box2.glb',
    './asset/obj/box3.glb',
    './asset/obj/box4.glb',
    './asset/obj/box5.glb',
    './asset/obj/box6.glb',
    './asset/obj/box7.glb',
    './asset/obj/box8.glb',
    './asset/obj/box9.glb',
    './asset/obj/box10.glb',
    './asset/obj/box11.glb'
]);

export default App;
