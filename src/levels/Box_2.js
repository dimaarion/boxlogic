import {useRef, useState, useEffect} from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, useFBX, useTexture, useAnimations} from "@react-three/drei"
import {proxy} from "valtio";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import {useDispatch, useSelector} from "react-redux";
import {
    animateStop,
    arraysEqual,
    collideRotation,
    defaultAnimation,
    handleClick,
    onAnimation,
    routable
} from "../action";
import * as THREE from "three";
import {current} from "@reduxjs/toolkit";


export default function Box_2(props) {
    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectRestart = useSelector((state) => state.restart);
    const selectLevel = useSelector((state) => state.level);

    const {nodes, materials, animations} = useGLTF("./asset/obj/box2.glb")
    const {ref, actions, clips, index} = useAnimations(animations)
    const [key1, setKey1] = useState(false);
    const [key2, setKey2] = useState(false);
    const [key3, setKey3] = useState(false);
    const [fire, setFire] = useState(false);
    const [wind, setWind] = useState(false);
    const [water, setWater] = useState(false);
    const [earth, setEarth] = useState(false);
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [arr, setArr] = useState(["", "", "", ""]);
    const [door, setDoor] = useState(false);
    const [ball, setBall] = useState(false);
    const [keyObj, setKeyObj] = useState(false);
    const [doorOpen, setDoorOpen] = useState(false);
    const [openKey, setOpenKey] = useState(false);

    let actionArr = [
        "open1Action",
        "open2Action",
        "fireAction",
        "windAction",
        "waterAction",
        "earthAction",
        "lever1Action",
        "lever2Action",
        "lever3Action",
        "lever4Action",
        "openKeyAction",
        "doorAction",
        "ballAction",
        "ballAction.001",
        "ballAction.002",
        "keyObjAction",
        "keyObjAction.001",
        "exitAction"
    ]

    let rightPanel = ["fire", "wind", "earth", "water"];

    useEffect(() => {

        onAnimation(actionArr,actions)

    }, [])


    useEffect(() => {
        if(doorOpen){
            actions["doorAction"].play().paused = false
            actions["ballAction.001"].stop()
            actions["ballAction.002"].play().paused = false
        }

    }, [doorOpen])

    let speed = 0.5;
    let position = 10

    const lever1 = useRef()
    const lever2 = useRef()
    const lever3 = useRef()
    const lever4 = useRef()

    function isKeyOpen(ref,num){
        return Math.floor(ref.current.rotation.x) === num;
    }

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        //  defaultAnimation(ref,t)


        if (collideRotation("fireAction", actions, 1.5, 1.7)
            && collideRotation("windAction", actions, 1.5, 1.7)
            && collideRotation("waterAction", actions, 1.5, 1.7)
            && collideRotation("earthAction", actions, 1.5, 1.7)) {
            actions["fireAction"].time = 0
            actions["windAction"].time = 0
            actions["waterAction"].time = 0
            actions["earthAction"].time = 0
            actions["fireAction"].play().paused = true
            actions["windAction"].play().paused = true
            actions["waterAction"].play().paused = true
            actions["earthAction"].play().paused = true
            setFire(false)
            setWind(false)
            setEarth(false)
            setWater(false)
            setArr(["", "", "", ""])
            setCount(0)
        }

        if(count === 1 && name === "fire"){
            setArr(["fire","","",""])
        }
        if(arr[0] === "fire" && count === 2 && name === "wind"){
            setArr(["fire","wind","",""])
        }
        if(arr[0] === "fire" && arr[1] === "wind" && count === 3 && name === "earth"){
            setArr(["fire","wind","earth",""])
        }
        if(arr[0] === "fire" && arr[1] === "wind" && arr[2] === "earth" && count === 0 && name === "water"){
            setArr(["fire","wind","earth","water"])
            setFire(true)
            setWind(true)
            setEarth(true)
            setWater(true)
            actions["lever1Action"].play().paused = false
            actions["lever2Action"].play().paused = false
            actions["lever3Action"].play().paused = false
            actions["lever4Action"].play().paused = false
            actions["fireAction"].time = 1
            actions["windAction"].time = 1
            actions["waterAction"].time = 1
            actions["earthAction"].time = 1
            actions["fireAction"].play().paused = true
            actions["windAction"].play().paused = true
            actions["waterAction"].play().paused = true
            actions["earthAction"].play().paused = true
        }

        if(isKeyOpen(lever1,6) === true && isKeyOpen(lever2,1) === true && isKeyOpen(lever3,1) === true && isKeyOpen(lever4,3) === true){
            actions["openKeyAction"].play().paused = false
        }else {
            actions["openKeyAction"].time = 0
        }
        if(collideRotation("ballAction.001", actions, 1.5, 1.7)){
            setDoorOpen(true)
        }
        if(collideRotation("keyObjAction.001", actions, 1.5, 1.7)){
            actions["exitAction"].play().paused = false
            lever1.current.rotation.x = 0
            lever2.current.rotation.x = 0
            lever3.current.rotation.x = 0
            lever4.current.rotation.x = 0
            dispatch({type: "EXIT", preload: true})
        }




    })






    return (
        <group ref={ref}
               onPointerDown={(e) => {
                   e.stopPropagation();
                   handleClick(e, actions, "key1_1", "key1Action", key1, setKey1, 0.2);
                   handleClick(e, actions, "key2_1", "key2Action", key2, setKey2, 0.2);
                   handleClick(e, actions, "key3_1", "key3Action", key3, setKey3, 0.2);
                   handleClick(e, actions, "fire", "fireAction", fire, setFire, 1);
                   handleClick(e, actions, "wind", "windAction", wind, setWind, 1);
                   handleClick(e, actions, "water", "waterAction", water, setWater, 1);
                   handleClick(e, actions, "earth", "earthAction", earth, setEarth, 1);
                   handleClick(e, actions, "ball", "ballAction", ball, setBall, 1);
                   if(collideRotation("ballAction", actions, 1.5, 1.7)){
                       handleClick(e, actions, "door_1", ["ballAction.001"], door, setDoor, 1,"ballAction");
                   }
                   handleClick(e, actions, "keyObj", ["keyObjAction"], keyObj, setKeyObj, 1);
                   if(collideRotation("openKeyAction", actions, 1.2, 1.7)){
                       handleClick(e, actions, "Цилиндр022_1", ["keyObjAction.001"], openKey, setOpenKey, 1,"keyObjAction");
                   }
                   setName(e.object.name)
                   if(rightPanel.filter((el) => el === e.object.name).length === 1){

                       setCount(count + 1)

                       if (count >= 3) {
                           setCount(0);
                       }
                   }
                   if(e.object.name === "lever1" || e.object.name === "lever2" || e.object.name === "lever3" || e.object.name === "lever4"){
                       e.object.rotation.x += routable(90);
                       if(e.object.rotation.x > routable(365)){
                           e.object.rotation.x = routable(90)
                       }
                   }
               }}
               onPointerUp={(e) => {
                   animateStop(e, actions, "key1_1", ["key1Action"], key1, setKey1)
                   animateStop(e, actions, "key2_1", ["key2Action"], key2, setKey2)
                   animateStop(e, actions, "key3_1", ["key3Action"], key3, setKey3)

                   if (collideRotation("key1Action", actions, 1.0, 1.06) && collideRotation("key2Action", actions, 0.33, 0.37) && collideRotation("key3Action", actions, 0.60, 0.66)) {
                       actions["open2Action"].play().paused = false
                       actions["open1Action"].play().paused = false
                   }

               }}
        >
            <primitive object={nodes.Cube}/>
            <primitive object={nodes.corner1}/>
            <primitive object={nodes.corner2}/>
            <primitive object={nodes.corner3}/>
            <primitive object={nodes.corner4}/>
            <primitive object={nodes.corner5}/>
            <primitive object={nodes.corner6}/>
            <primitive object={nodes.corner7}/>
            <primitive object={nodes.corner8}/>
            <primitive object={nodes.key1}/>
            <primitive object={nodes.key2}/>
            <primitive object={nodes.key3}/>
            <primitive object={nodes.key4}/>
            <primitive object={nodes.open1}/>
            <primitive object={nodes.open2}/>
            <primitive object={nodes.panel}/>
            <primitive object={nodes.fire}/>
            <primitive object={nodes.wind}/>
            <primitive object={nodes.water}/>
            <primitive object={nodes.earth}/>
            <primitive ref={lever1} object={nodes.lever1}/>
            <primitive ref={lever2} object={nodes.lever2}/>
            <primitive ref={lever3} object={nodes.lever3}/>
            <primitive ref={lever4} object={nodes.lever4}/>
            <primitive object={nodes.star}/>
            <primitive object={nodes.openKey}/>
            <primitive object={nodes.door}/>
            <primitive object={nodes.ball}/>
            <primitive object={nodes.exit}/>
            <primitive object={nodes.keyObj}/>
        </group>
    )
}
