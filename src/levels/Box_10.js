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
    const [name, setName] = useState("");
    const [x, setX] = useState(0);



    useEffect(() => {
        console.log(nodes)
        //  console.log(materials)
    }, [])


    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref, t)

        if (name === "clock_rotate") {
            if (distantCollege(x, window.innerWidth / 2, window.innerWidth)) {
                rotateClockTop.current.rotation.x -= delta;
                rotateClockCenter.current.rotation.x += delta;
                rotateClockBottom.current.rotation.x -= delta;
                rotateClockCenterVal.current.rotation.x += delta;
                arrow_min.current.rotation.x += 0.1;
                arrow_hour.current.rotation.x += 0.009;
            } else {
                rotateClockTop.current.rotation.x += delta;
                rotateClockCenter.current.rotation.x -= delta;
                rotateClockBottom.current.rotation.x += delta;
                rotateClockCenterVal.current.rotation.x -= delta;
                arrow_min.current.rotation.x -= 0.1;
                arrow_hour.current.rotation.x -= 0.009;
            }

        }
        if (name === "h_right_open_B") {
            hRightOpenB.current.rotation.y -= delta;
        }
        if (name === "h_right_open_A") {
            hRightOpenA.current.rotation.y -= delta;
        }
        if (name === "openClockRotate") {

            if (openClockRotate.current.rotation.x < 1) {
                openClockRotate.current.rotation.x += delta;
                openBack.current.children.filter((el) => el.name === "openBack").forEach((el) => {
                    el.rotation.x += delta
                });
                hBack.current.children.filter((el) => el.name === "h_back").forEach((el) => {
                    el.rotation.x -= delta
                });
            }
        } else {
            if (openClockRotate.current.rotation.x > 0) {
                openClockRotate.current.rotation.x -= delta;
                openBack.current.children.filter((el) => el.name === "openBack").forEach((el) => {
                    el.rotation.x -= delta
                });
                hBack.current.children.filter((el) => el.name === "h_back").forEach((el) => {
                    el.rotation.x += delta
                });
            }
        }


    })

    useEffect(() => {

    }, [selectExit])


    let number = 7; // how many number to be placed
    let size = 0.6; // size of circle i.e. w = h = 260
    let cx = size / 2; // center of x(in a circle)
    let cy = size / 2; // center of y(in a circle)
    let r = size / 2; // radius of a circle


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
            <mesh ref={openRight} geometry={nodes.box_2.geometry} material={materials.open_right1}
                  name="open_right1"/>
            <mesh ref={openRight1} geometry={nodes.box_3.geometry} material={materials.open_right}
                  name="open_right"/>
            <mesh ref={rotateClockCenter} geometry={nodes.box_4.geometry} material={materials.clook_h_center}
                  name="clock_rotate"/>
            <mesh ref={rotateClockCenterVal} geometry={nodes.box_5.geometry} material={materials.clock}
                  name="clock_rotate"/>
            <mesh geometry={nodes.box_6.geometry} material={materials.clock}
                  name="clock_rotate"/>
            <mesh ref={openClockRotate} geometry={nodes.box_7.geometry} material={materials.openClokRotate}
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
<group ref = {hBack}>
    <mesh geometry={nodes.h_right_open.geometry} rotation={[0, 0, routable(90)]} scale={[0.1, 0.08, 0.1]}
          position={[1.18, 0.45, 0.58]} material={materials.oak} name="h_back"/>
    <mesh geometry={nodes.h_right_open.geometry} rotation={[0, 0, routable(90)]} scale={[0.1, 0.08, 0.1]}
          position={[1.18, 0.45, -0.58]} material={materials.oak} name="h_back"/>
    <mesh geometry={nodes.h_right_open.geometry} rotation={[0, 0, routable(90)]} scale={[0.1, 0.08, 0.1]}
          position={[1.18, -0.45, -0.58]} material={materials.oak} name="h_back"/>
    <mesh geometry={nodes.h_right_open.geometry} rotation={[0, 0, routable(90)]} scale={[0.1, 0.08, 0.1]}
          position={[1.18, -0.45, 0.58]} material={materials.oak} name="h_back"/>
</group>

            <group ref={openBack}>
                {numArr(number).map((el, i) => {
                    let ang = i * (Math.PI / (number / 2));
                    return <mesh key={i + "openBack"} geometry={nodes.open_back_1.geometry} rotation={[ang + 0.35, 0, 0]}
                                 scale={1}
                                 position={[1 + i / 30, (cx + (r * Math.cos(ang))) - 0.3, (cy + (r * Math.sin(ang))) - 0.3]}
                                 material={materials.oak} name="openBack"/>
                })}

            </group>


            <mesh ref={rotateClockTop} geometry={nodes.clock_h_top.geometry} position={[-1, 0.4, 0]}
                  material={materials.oak} name="clock_rotate"/>
            <mesh ref={rotateClockBottom} geometry={nodes.clock_h_top.geometry} position={[-1, -0.4, 0]}
                  material={materials.oak} name="clock_rotate"/>
            <mesh ref={arrow_min} geometry={nodes.arrow_min.geometry} material={materials.box} name="clock_rotate"/>
            <mesh ref={arrow_hour} geometry={nodes.arrow_hour.geometry} material={materials.box} name="clock_rotate"/>

            <group ref={hRightOpenA} rotation={[routable(90), 0, 0]} scale={[0.5, 0.03, 0.5]}
                   position={[0.4, -0.4, 1.01]}>
                <mesh geometry={nodes.key_right_1_1.geometry} material={materials.oak} name="h_right_open_A"/>
                <mesh geometry={nodes.key_right_1_2.geometry} material={materials.star} name="h_right_open_A"/>
            </group>
            <group ref={hRightOpenB} rotation={[routable(90), 0, 0]} scale={[0.5, 0.03, 0.5]}
                   position={[-0.4, 0.4, 1.01]}>
                <mesh geometry={nodes.key_right_2_1.geometry} material={materials.oak} name="h_right_open_B"/>
                <mesh geometry={nodes.key_right_2_2.geometry} material={materials.star} name="h_right_open_B"/>
            </group>
            <Text color = "black" rotation={[routable(0), routable(90), routable(0)]} scale={0.3} position={[1.01, 0, 0]} >20</Text>
        </group>

    )
}


