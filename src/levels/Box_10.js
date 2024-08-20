import * as THREE from 'three'
import {useRef, useState, useEffect} from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {
    useGLTF,
    useFBX,
    useTexture,
    PivotControls,
    DragControls,
    TransformControls,
    Text3D,
    Center, Text
} from "@react-three/drei"
import {proxy} from "valtio";
import {Physics, RigidBody} from '@react-three/rapier'
import {useDispatch, useSelector} from "react-redux";
import {
    calcAngleDegrees,
    defaultAnimation,
    distantCollege,
    numArr,
    numInArr,
    routable,
    velocityInvert
} from "../action";


export default function Box_10() {
    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);


    const state = proxy({
        current: null
    })

    const ref = useRef();
    const rotateClockTop = useRef();
    const rotateClockCenter = useRef();
    const rotateClockBottom = useRef();
    const rotateClockCenterVal = useRef();
    const arrow_min = useRef();
    const arrow_hour = useRef();
    const hRightOpenA = useRef();
    const hRightOpenB = useRef();
    const openRight = useRef();
    const openRight1 = useRef();
    const hBack = useRef();
    const openBack = useRef();
    const openClockRotate = useRef();

    const {nodes, materials} = useGLTF("./asset/obj/box10.glb")
    const [exit, setExit] = useState(false);
    const [open, setOpen] = useState(false);
    const [key_1, setKey_1] = useState(0);
    const [key_2, setKey_2] = useState(0);
    const [key_3, setKey_3] = useState(0);
    const [key_4, setKey_4] = useState(0);
    const [key_5, setKey_5] = useState(0);
    const [key_6, setKey_6] = useState(0);
    const [key_7, setKey_7] = useState(0);
    const [key_8, setKey_8] = useState(0);
    const [key_9, setKey_9] = useState(0);
    const [key_10, setKey_10] = useState(0);
    const [key_11, setKey_11] = useState(0);
    const [key_12, setKey_12] = useState(0);
    const [key_13, setKey_13] = useState(0);
    const [key_14, setKey_14] = useState(0);
    const [key_15, setKey_15] = useState(0);
    const [key_16, setKey_16] = useState(0);
    const [key_open, setKey_open] = useState(0);
    const [key_exit, setKey_exit] = useState(0);



    const [name, setName] = useState("");


    let initialKeyPosition = {
        key1: false,
        key2: false,
        key3: false,
        key4: false,
        key5: false,
        key6: false,
        key7: false,
        key8: false,
        key9: false,
        key10: false,
        key11: false,
        key12: false,
        key13: false,
        key14: false,
        key15: false,
        key16: false,
    };
    const [keyPosition, setKeyPosition] = useState(initialKeyPosition);


    const [arrowRotate, setArrowRotate] = useState(0);
    const [keyRotateOpen, setKeyRotateOpen] = useState(false);
    const [objectPosition, setObjectPosition] = useState({});
    const [x, setX] = useState(0);
    const [arrowUp, setArrowUp] = useState(false);
    const [arrowDown, setArrowDown] = useState(false);


    useEffect(() => {
        console.log(nodes)
        //  console.log(materials)
    }, [])


    function setVelocityMin(keyRotate, key, setKey) {
        if (keyRotate) {
            if (key > -9) {
                setKey(key - 0.05);
            }
        }
    }

    function setVelocityPlus(keyRotate, key, setKey) {
        if (keyRotate) {
            if (key < 9) {
                setKey(key + 0.05);
            }
        }
    }

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref, t)

        if (name === "clock_rotate") {
            if(distantCollege(x, window.innerWidth / 2, window.innerWidth)){
                rotateClockTop.current.rotation.x -= delta;
                rotateClockCenter.current.rotation.x += delta;
                rotateClockBottom.current.rotation.x -= delta;
                rotateClockCenterVal.current.rotation.x += delta;
                arrow_min.current.rotation.x += 0.1;
                arrow_hour.current.rotation.x += 0.009;
            }else {
                rotateClockTop.current.rotation.x += delta;
                rotateClockCenter.current.rotation.x -= delta;
                rotateClockBottom.current.rotation.x += delta;
                rotateClockCenterVal.current.rotation.x -= delta;
                arrow_min.current.rotation.x -= 0.1;
                arrow_hour.current.rotation.x -= 0.009;
            }

        }
        if(name === "h_right_open_B"){
            hRightOpenB.current.rotation.y -= delta;
        }
        if(name === "h_right_open_A"){
            hRightOpenA.current.rotation.y -= delta;
        }
        if(name === "openClockRotate"){
           // hBack.current.rotation.x -= delta;
            if(openClockRotate.current.rotation.x < 1){
                openClockRotate.current.rotation.x += delta;
                openBack.current.children.filter((el)=>el.name === "h_back").forEach((el)=>{
                    el.rotation.x += delta
                });
            }
        }else {
            if(openClockRotate.current.rotation.x > 0){
                openClockRotate.current.rotation.x -= delta;
                openBack.current.children.filter((el)=>el.name === "h_back").forEach((el)=>{
                    el.rotation.x -= delta
                });
            }
        }


        //
        if (arrowDown) {
            setVelocityMin(keyPosition.key1, key_1, setKey_1);
            setVelocityMin(keyPosition.key2, key_2, setKey_2);
            setVelocityMin(keyPosition.key3, key_3, setKey_3);
            setVelocityMin(keyPosition.key4, key_4, setKey_4);
            setVelocityMin(keyPosition.key5, key_5, setKey_5);
            setVelocityMin(keyPosition.key6, key_6, setKey_6);
            setVelocityMin(keyPosition.key7, key_7, setKey_7);
            setVelocityMin(keyPosition.key8, key_8, setKey_8);
            setVelocityMin(keyPosition.key9, key_9, setKey_9);
            setVelocityMin(keyPosition.key10, key_10, setKey_10);
            setVelocityMin(keyPosition.key11, key_11, setKey_11);
            setVelocityMin(keyPosition.key12, key_12, setKey_12);
            setVelocityMin(keyPosition.key13, key_13, setKey_13);
            setVelocityMin(keyPosition.key14, key_14, setKey_14);
            setVelocityMin(keyPosition.key15, key_15, setKey_15);
            setVelocityMin(keyPosition.key16, key_16, setKey_16);
        }
        if (arrowUp) {
            setVelocityPlus(keyPosition.key1, key_1, setKey_1);
            setVelocityPlus(keyPosition.key2, key_2, setKey_2);
            setVelocityPlus(keyPosition.key3, key_3, setKey_3);
            setVelocityPlus(keyPosition.key4, key_4, setKey_4);
            setVelocityPlus(keyPosition.key5, key_5, setKey_5);
            setVelocityPlus(keyPosition.key6, key_6, setKey_6);
            setVelocityPlus(keyPosition.key7, key_7, setKey_7);
            setVelocityPlus(keyPosition.key8, key_8, setKey_8);
            setVelocityPlus(keyPosition.key9, key_9, setKey_9);
            setVelocityPlus(keyPosition.key10, key_10, setKey_10);
            setVelocityPlus(keyPosition.key11, key_11, setKey_11);
            setVelocityPlus(keyPosition.key12, key_12, setKey_12);
            setVelocityPlus(keyPosition.key13, key_13, setKey_13);
            setVelocityPlus(keyPosition.key14, key_14, setKey_14);
            setVelocityPlus(keyPosition.key15, key_15, setKey_15);
            setVelocityPlus(keyPosition.key16, key_16, setKey_16);
        }

        if (keyRotateOpen) {
            if (distantCollege(x, 0, window.innerWidth / 2)) {
                setKey_open(key_open + 0.5)
                if (key_open > 360) {
                    setKey_open(0);
                }
            }
            if (distantCollege(x, window.innerWidth / 2, window.innerWidth)) {
                setKey_open(key_open - 0.5)
                if (key_open < -360) {
                    setKey_open(0);
                }
            }

        }

        if (distantCollege(key_open, -220, -190) || distantCollege(key_open, 145, 160)) {
            dispatch({type: "QUEST_COUNT", preload: 1});
        }

        if (distantCollege(key_1, -1, 1)
            && distantCollege(key_2, 3, 5)
            && distantCollege(key_3, -3, -2)
            && distantCollege(key_4, -5, -4)
            && distantCollege(key_5, 0, 3)
            && distantCollege(key_6, -4, -2)
            && distantCollege(key_7, 3, 5)
            && distantCollege(key_8, 0, 3)
            && distantCollege(key_9, -6, -3)
            && distantCollege(key_10, -6, -3)
            && distantCollege(key_11, 1, 3.5)
            && distantCollege(key_12, -3, -1)
            && distantCollege(key_13, 3, 5)
            && distantCollege(key_14, -5.5, -3.5)
            && distantCollege(key_15, -3.5, -1)
            && distantCollege(key_16, 1, 4)
        ) {
            setOpen(true);
            setKey_open(0);
            if (key_exit < 8) {
                setKey_exit(key_exit + 0.1);
            }
        }

    })

    useEffect(() => {
        if (!selectExit) {
            setKey_1(0);
            setKey_2(0);
            setKey_3(0);
            setKey_4(0);
            setKey_5(0);
            setKey_6(0);
            setKey_7(0);
            setKey_8(0);
            setKey_9(0);
            setKey_10(0);
            setKey_11(0);
            setKey_12(0);
            setKey_13(0);
            setKey_14(0);
            setKey_15(0);
            setKey_16(0);
            setKey_exit(0);
            setKey_open(0);
            setOpen(false)
            setExit(false);
        }


    }, [selectExit])


    let number = 7; // how many number to be placed
    let size = 0.6; // size of circle i.e. w = h = 260
    let cx = size/2; // center of x(in a circle)
    let cy = size/2; // center of y(in a circle)
    let r = size/2; // radius of a circle


    return (
        <group
            rotation={[0, routable(90), 0]}
            scale={1}
            ref={ref}
            onPointerMissed={() => (state.current = null)}

            onPointerDown={(e) => {
                e.stopPropagation();
                setX(e.clientX)

                setName(e.object.name);

            }}
            onPointerUp={(e) => {
                e.stopPropagation();


                setName("");


                if (open) {
                    dispatch({type: "EXIT", preload: true});
                    setExit(true);
                }

            }}
            onClick={(e) => {
                e.stopPropagation();

            }}>

            <mesh geometry={nodes.box_1.geometry} material={materials.box} name="box"/>
            <mesh ref = {openRight} geometry={nodes.box_2.geometry} material={materials.open_right1}
                  name="open_right1"/>
            <mesh ref = {openRight1} geometry={nodes.box_3.geometry}  material={materials.open_right}
                  name="open_right"/>
            <mesh ref={rotateClockCenter} geometry={nodes.box_4.geometry} material={materials.clook_h_center}
                  name="clock_rotate"/>
            <mesh ref={rotateClockCenterVal} geometry={nodes.box_5.geometry} material={materials.clock}
                  name="clock_rotate"/>
            <mesh  geometry={nodes.box_6.geometry} material={materials.clock}
                  name="clock_rotate"/>
            <mesh ref = {openClockRotate} geometry={nodes.box_7.geometry} material={materials.openClokRotate}
                   name="openClockRotate"/>

            <mesh geometry={nodes.h_right_open.geometry} rotation={[routable(90), 0, 0]} scale={[0.1, 0.08, 0.1]}
                  position={[0.5, 0.7, 1.08]} material={materials.oak} name="h_right_open"/>
            <mesh geometry={nodes.h_right_open.geometry} rotation={[routable(90), 0, 0]} scale={[0.1, 0.08, 0.1]}
                  position={[-0.7, -0.9, 1.08]} material={materials.oak} name="h_right_open"/>
            <mesh geometry={nodes.h_right_open.geometry} rotation={[routable(90), 0, 0]} scale={[0.1, 0.08, 0.1]}
                  position={[-0.7, -0.2, 1.08]} material={materials.oak} name="h_right_open"/>
            <mesh geometry={nodes.h_right_open.geometry} rotation={[routable(90), 0, 0]} scale={[0.1, 0.08, 0.1]}
                  position={[-0.1, -0.9, 1.08]} material={materials.oak} name="h_right_open"/>
            <mesh geometry={nodes.h_right_open.geometry} rotation={[routable(90), 0, 0]} scale={[0.1, 0.08, 0.1]}
                  position={[1.16, 0.7, 1.08]} material={materials.oak} name="h_right_open"/>

            <mesh geometry={nodes.h_right_open.geometry} rotation={[0, 0, routable(90)]} scale={[0.1, 0.08, 0.1]}
                  position={[1.18, 0.45, 0.58]} material={materials.oak} name="h_back"/>
            <mesh geometry={nodes.h_right_open.geometry} rotation={[0, 0, routable(90)]} scale={[0.1, 0.08, 0.1]}
                  position={[1.18, 0.45, -0.58]} material={materials.oak} name="h_back"/>
            <mesh geometry={nodes.h_right_open.geometry} rotation={[0, 0, routable(90)]} scale={[0.1, 0.08, 0.1]}
                  position={[1.18, -0.45, -0.58]} material={materials.oak} name="h_back"/>
            <mesh geometry={nodes.h_right_open.geometry} rotation={[0, 0, routable(90)]} scale={[0.1, 0.08, 0.1]}
                  position={[1.18, -0.45, 0.58]} material={materials.oak} name="h_back"/>
            <group ref = {openBack}>
                {numArr(number).map((el,i)=>{
                    let ang = i*(Math.PI/(number/2));
                    return <mesh key = {i + "h_back"} geometry={nodes.open_back_1.geometry} rotation={[ang + 0.35, 0, 0]} scale = {1}
                                 position={[1 + i / 30,(cx + (r * Math.cos(ang))) - 0.3,(cy + (r * Math.sin(ang)))- 0.3]} material={materials.oak} name="h_back" />
                })}

            </group>


            <mesh ref={rotateClockTop} geometry={nodes.clock_h_top.geometry}  position={[-1, 0.4, 0]}
                  material={materials.oak} name="clock_rotate"/>
            <mesh ref={rotateClockBottom} geometry={nodes.clock_h_top.geometry}  position={[-1, -0.4, 0]}
                  material={materials.oak} name="clock_rotate"/>
            <mesh ref={arrow_min} geometry={nodes.arrow_min.geometry} material={materials.box} name="clock_rotate"/>
            <mesh ref={arrow_hour} geometry={nodes.arrow_hour.geometry} material={materials.box} name="clock_rotate"/>

            <group ref = {hRightOpenA} rotation={[routable(90), 0, 0]} scale={[0.5, 0.03, 0.5]} position={[0.4, -0.4, 1.01]}>
                <mesh geometry={nodes.key_right_1_1.geometry} material={materials.oak} name="h_right_open_A"/>
                <mesh geometry={nodes.key_right_1_2.geometry} material={materials.star} name="h_right_open_A"/>
            </group>
            <group ref = {hRightOpenB} rotation={[routable(90), 0, 0]} scale={[0.5, 0.03, 0.5]} position={[-0.4, 0.4, 1.01]}>
                <mesh geometry={nodes.key_right_2_1.geometry} material={materials.oak} name="h_right_open_B"/>
                <mesh geometry={nodes.key_right_2_2.geometry} material={materials.star} name="h_right_open_B"/>
            </group>
<Text>20</Text>
        </group>

    )
}


