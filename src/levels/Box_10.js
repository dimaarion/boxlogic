import * as THREE from 'three'
import {useRef, useState, useEffect} from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {
    useGLTF, Text
} from "@react-three/drei"
import {proxy} from "valtio";
import {Physics, RigidBody} from '@react-three/rapier'
import {useDispatch, useSelector} from "react-redux";
import {
    defaultAnimation,
    distantCollege,
    numArr,
    routable, velocityInvert,
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
    const open_2_1 = useRef();
    const open_2_2 = useRef();
    const open_2_3 = useRef();
    const open_2_4 = useRef();
    const open_2_5 = useRef();
    const open_2_val_1 = useRef();
    const open_2_val_2 = useRef();
    const open_2_val_3 = useRef();
    const open_2_val_4 = useRef();
    const open_2_val_open_3 = useRef();
    const open_2_val_open_4 = useRef();
    const open_4_rotate_1 = useRef();
    const open_5 = useRef();
    const open_5_val = useRef();
    const open_4 = useRef();
    const open_6_key_1 = useRef();
    const open_6_key_2 = useRef();
    const open_6_key_3 = useRef();
    const open_6_key_4 = useRef();

    const {nodes, materials} = useGLTF("./asset/obj/box10.glb")
    const [exit, setExit] = useState(false);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [nameKey, setNameKey] = useState("");
    const [color, setColor] = useState({key_1: "", key_2: "", key_3: "", key_4: "", key_5: ""});
    const [position, setPosition] = useState({x: 0, y: 0});
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
        if (name === "h_right_open_B" && open_4.current.position.x > 1) {
            hRightOpenB.current.rotation.z += 0.05;
            if(hRightOpenB.current.rotation.z > 12.4){
                hRightOpenB.current.rotation.z = 0
            }

        }

        if (name === "h_right_open_A" && open_4.current.position.x > 1) {

            hRightOpenA.current.rotation.z += 0.05;
            if(hRightOpenA.current.rotation.z > 12.4){
               hRightOpenA.current.rotation.z = 0;
            }

        }

        if(distantCollege(hRightOpenB.current.rotation.z,5,6.5) && distantCollege(hRightOpenA.current.rotation.z,5,6.5)){
            if(openRight.current.position.x < 0.8){
                openRight.current.position.x += 0.05;
            }


        }

        if (name === "openClockRotate") {
            if (openClockRotate.current.rotation.x < 1) {
                openClockRotate.current.rotation.x += delta;
                openBack.current.children.filter((el) => el.name === "openBack").forEach((el) => {
                    el.rotation.x += delta
                });
                hBack.current.children.filter((el) => el.name === "h_back").forEach((el) => {
                    el.rotation.x -= 0.5
                });
            }
        } else {
            if (openClockRotate.current.rotation.x > 0) {
                openClockRotate.current.rotation.x -= delta;
                openBack.current.children.filter((el) => el.name === "openBack").forEach((el) => {
                    el.rotation.x -= delta
                });
                hBack.current.children.filter((el) => el.name === "h_back").forEach((el) => {
                    el.rotation.x += 0.5
                });
            }
        }


        open_5.current.children.forEach((el) => {
            if (name === el.name) {
                if (distantCollege(x, window.innerWidth / 2, window.innerWidth)) {
                    el.rotation.y -= delta
                } else {
                    el.rotation.y += delta
                }

            }
        });

        open_5_val.current.children.forEach((el) => {
            if (name === el.name) {
                if (distantCollege(x, window.innerWidth / 2, window.innerWidth)) {
                    el.rotation.y += 0.1
                } else {
                    el.rotation.y -= 0.1
                }

            }
        });

        if(name === "key_open_2_5"){

            open_2_5.current.rotation.z -= 0.05;
            if(open_2_1.current.position.x === open_2_val_1.current.position.x
                && open_2_2.current.position.x === open_2_val_2.current.position.x
                && open_2_3.current.position.x === open_2_val_3.current.position.x
                && open_2_4.current.position.x === open_2_val_4.current.position.x){
                open_2_1.current.rotation.z -= 0.05;
                open_2_2.current.rotation.z += 0.05;
                open_2_3.current.rotation.z -= 0.05;
                open_2_4.current.rotation.z += 0.05;
                open_2_val_open_3.current.rotation.z += 0.05;
                open_2_val_open_4.current.rotation.z += 0.05;
                open_4_rotate_1.current.rotation.z += 0.05;
                if(open_4.current.position.x < 1.2){
                    open_4.current.position.x += 0.01
                }

            }
        }

        if(name === open_6_key_1.current.name){
            open_6_key_1.current.rotation.y += 0.05
        }
        if(name === open_6_key_2.current.name){
            open_6_key_2.current.rotation.y += 0.05
        }
        if(name === open_6_key_3.current.name){
            open_6_key_3.current.rotation.y += 0.05
        }
        if(name === open_6_key_4.current.name){
            open_6_key_4.current.rotation.y += 0.05
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
                let isKey = (e.object.name === "open_2_val_1"
                    || e.object.name === "open_2_val_2"
                    || e.object.name === "open_2_val_3"
                    || e.object.name === "open_2_val_4")
                if (nameKey === "key_open_2_1" && isKey) {
                    open_2_1.current.position.x = e.object.position.x;
                    open_2_1.current.position.y = e.object.position.y;
                }
                if (nameKey === "key_open_2_2" && isKey) {
                    open_2_2.current.position.x = e.object.position.x;
                    open_2_2.current.position.y = e.object.position.y;
                }
                if (nameKey === "key_open_2_3" && isKey) {
                    open_2_3.current.position.x = e.object.position.x;
                    open_2_3.current.position.y = e.object.position.y;
                }
                if (nameKey === "key_open_2_4" && isKey) {
                    open_2_4.current.position.x = e.object.position.x;
                    open_2_4.current.position.y = e.object.position.y;
                }

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
                if (e.object.name === "key_open_2_1") {
                    setColor({key_1: "red", key_2: "#fff", key_3: "#fff", key_4: "#fff", key_5: "#fff"});
                    setNameKey(e.object.name);
                } else if (e.object.name === "key_open_2_2") {
                    setColor({key_1: "#fff", key_2: "red", key_3: "#fff", key_4: "#fff", key_5: "#fff"});
                    setNameKey(e.object.name);
                } else if (e.object.name === "key_open_2_3") {
                    setColor({key_1: "#fff", key_2: "#fff", key_3: "red", key_4: "#fff", key_5: "#fff"});
                    setNameKey(e.object.name);
                } else if (e.object.name === "key_open_2_4") {
                    setColor({key_1: "#fff", key_2: "#fff", key_3: "#fff", key_4: "red", key_5: "#fff"});
                    setNameKey(e.object.name);
                } else {
                    setColor({key_1: "#fff", key_2: "#fff", key_3: "#fff", key_4: "#fff", key_5: "#fff"});
                }

            }}>

            <mesh  geometry={nodes.box_1.geometry} material={materials.def} name="box"/>

            <mesh ref={openRight} geometry={nodes.box_2.geometry} material={materials.birch}
                  name="open_right1"/>

            <mesh ref={rotateClockCenterVal} geometry={nodes.clock_val.geometry} material={materials.birch}
                  name="rotateClockCenterVal"/>
            <mesh ref = {open_4} geometry={nodes.open_4.geometry} material={materials.birch}
                  name="open_4"/>
            <mesh ref={rotateClockCenter} geometry={nodes.clock_h.geometry} material={materials.nuc}
                  name="clock_rotate"/>
            <mesh geometry={nodes.dial.geometry} material={materials.cl}
                  name="clock_rotate"/>
            <mesh geometry={nodes.clock_obod.geometry} material={materials.nuc}
                  name="clock_rotate"/>
            <mesh ref={openClockRotate} geometry={nodes.open_3.geometry} material={materials.open_3}
                  name="openClockRotate"/>
            <mesh geometry={nodes.exit_1.geometry} material={materials.exit}
                  name="exit"/>
            <mesh geometry={nodes.exit_2.geometry} material={materials.exit}
                  name="exit"/>
            <mesh geometry={nodes.exit_3.geometry} material={materials.exit}
                  name="exit"/>
            <mesh geometry={nodes.exit_4.geometry} material={materials.exit_open_1}
                  name="exit"/>
            <mesh geometry={nodes.exit_5.geometry} material={materials.exit_open_2}
                  name="exit"/>

            <mesh ref = {open_4_rotate_1} geometry={nodes.open_4_rotate.geometry}  position={[0.5, 0.7, 1.04]} material={materials.open_4_rotate}
                  name="h_right_open"/>
            <mesh geometry={nodes.open_4_rotate.geometry} position={[-0.7, -0.22, 1.04]}
                  material={materials.open_4_rotate} name="h_right_open"/>
            <mesh geometry={nodes.open_4_rotate.geometry} position={[-0.2, -0.22, 1.04]}
                  material={materials.open_4_rotate} name="h_right_open"/>
            <mesh geometry={nodes.open_4_rotate.geometry} position={[-0.2, -0.87, 1.04]}
                  material={materials.open_4_rotate} name="h_right_open"/>
            <mesh geometry={nodes.open_4_rotate.geometry} position={[-0.7, -0.87, 1.04]}
                  material={materials.open_4_rotate} name="h_right_open"/>

            <mesh ref = {open_2_val_open_4} geometry={nodes.open_4_rotate.geometry} position={[1.15, 0.7, 1.04]}
                  material={materials.open_4_rotate} name="h_right_open"/>

            <mesh ref = {open_2_val_open_3} geometry={nodes.open_2_0.geometry} position={[1.15, 0.7, -1.04]} material={materials.open_2_0}
                  name="h_right_open"/>

            <group ref={hBack}>
                <mesh geometry={nodes.open_4_rotate.geometry} rotation={[0, routable(90), 0]} scale={[1, 1, 2]}
                      position={[1.2, 0.45, 0.55]} material={materials.open_4_rotate} name="h_back"/>
                <mesh geometry={nodes.open_4_rotate.geometry} rotation={[0, routable(90), 0]} scale={[1, 1, 2]}
                      position={[1.2, -0.45, -0.55]} material={materials.open_4_rotate} name="h_back"/>
                <mesh geometry={nodes.open_4_rotate.geometry} rotation={[0, routable(90), 0]} scale={[1, 1, 2]}
                      position={[1.2, 0.45, -0.55]} material={materials.open_4_rotate} name="h_back"/>
                <mesh geometry={nodes.open_4_rotate.geometry} rotation={[0, routable(90), 0]} scale={[1, 1, 2]}
                      position={[1.2, -0.45, 0.55]} material={materials.open_4_rotate} name="h_back"/>
            </group>

            <group ref={openBack}>
                {numArr(number).map((el, i) => {
                    let ang = i * (Math.PI / (number / 2));
                    return <mesh key={i + "openBack"} geometry={nodes.open_back_1.geometry}
                                 rotation={[ang + 0.35, 0, 0]}
                                 scale={1}
                                 position={[1 + i / 30, (cx + (r * Math.cos(ang))) - 0.3, (cy + (r * Math.sin(ang))) - 0.3]}
                                 material={materials.nuc} name="openBack"/>
                })}

            </group>


            <mesh ref={rotateClockTop} geometry={nodes.clock_h_top.geometry} position={[-1, 0.4, 0]}
                  material={materials.birch} name="clock_rotate"/>
            <mesh ref={rotateClockBottom} geometry={nodes.clock_h_top.geometry} position={[-1, -0.4, 0]}
                  material={materials.birch} name="clock_rotate"/>
            <mesh ref={arrow_min} geometry={nodes.arrow_min.geometry} material={materials.hour} name="clock_rotate"/>
            <mesh ref={arrow_hour} geometry={nodes.arrow_hour.geometry} material={materials.hour} name="clock_rotate"/>


            <mesh ref={hRightOpenA}  position={[-0.4, 0.4, 1.01]}
                  geometry={nodes.oak1.geometry} rotation={[0, 0, routable(90)]} material={materials.oak1} name="h_right_open_A"/>
            <mesh ref={hRightOpenB}  position={[0.45, -0.2, 1.01]}
                  geometry={nodes.oak2.geometry} rotation={[0, 0, routable(90)]} material={materials.oak_2} name="h_right_open_B"/>


            <Text color="black" rotation={[routable(0), routable(90), routable(0)]} scale={0.3}
                  position={[1.01, 0, 0]}>20</Text>

            <Text color="black" rotation={[routable(0), routable(0), routable(0)]} scale={0.3}
                  position={[-0.5, -0.6, 1.01]}>20</Text>


                <mesh ref={open_2_1} geometry={nodes.key_open_2_1.geometry} position={[0.5, -1.5, -1.05]}
                      material={materials.key_open_2_1}
                      name="key_open_2_1" material-color={color.key_1}/>

                <mesh ref={open_2_2} geometry={nodes.key_open_2_2.geometry} material-color={color.key_2}
                      position={[-0.2, -1.5, -1.05]} material={materials.key_open_2_2}
                      name="key_open_2_2"/>

                <mesh ref={open_2_3} geometry={nodes.key_open_2_3.geometry} material-color={color.key_3}
                      position={[-1, -1.5, -1.05]} material={materials.key_open_2_3}
                      name="key_open_2_3"/>

                <mesh ref={open_2_4} geometry={nodes.key_open_2_4.geometry} material-color={color.key_4}
                      position={[1, -1.5, -1.05]} material={materials.key_open_2_4}
                      name="key_open_2_4"/>

                <mesh ref={open_2_5} geometry={nodes.key_open_2_5.geometry} material-color={color.key_5}
                      position={[-0.6, -0.6, -1.05]} material={materials.key_open_2_5}
                      name="key_open_2_5"/>




            <mesh ref = {open_2_val_1} geometry={nodes.open_2_val.geometry} position={[0.85, 0.7, -1]} material={materials.open_2_val}
                  name="open_2_val_1"/>

            <mesh ref = {open_2_val_2} geometry={nodes.open_2_val.geometry} position={[0.25, 0.7, -1]} material={materials.open_2_val}
                  name="open_2_val_2"/>

            <mesh ref = {open_2_val_3} geometry={nodes.open_2_val.geometry} position={[0.32, -0.06, -1]} material={materials.open_2_val}
                  name="open_2_val_3"/>

            <mesh ref = {open_2_val_4} geometry={nodes.open_2_val.geometry} position={[-0.3, -0.07, -1]} material={materials.open_2_val}
                  name="open_2_val_4"/>

            <group ref={open_5}>
                <mesh geometry={nodes.open_5_1.geometry} rotation={[0, routable(90), 0]} material={materials.open_5_1}
                      name="open_5_1"/>
                <mesh geometry={nodes.open_5_2.geometry} rotation={[0, routable(45), 0]} material={materials.open_5_2}
                      name="open_5_2"/>
                <mesh geometry={nodes.open_5_3.geometry} rotation={[0, routable(120), 0]} material={materials.open_5_3}
                      name="open_5_3"/>
            </group>

            <group ref={open_5_val}>
                <mesh geometry={nodes.open_5_val.geometry} position={[0.83, -1.085, 0.83]}
                      material={materials.open_5_val}
                      name="open_5_1"/>
                <mesh geometry={nodes.open_5_val.geometry} position={[-0.83, -1.085, -0.83]}
                      material={materials.open_5_val}
                      name="open_5_1"/>
                <mesh geometry={nodes.open_5_val.geometry} position={[0.83, -1.085, -0.83]}
                      material={materials.open_5_val}
                      name="open_5_1"/>
                <mesh geometry={nodes.open_5_val.geometry} position={[-0.83, -1.085, 0.83]}
                      material={materials.open_5_val}
                      name="open_5_1"/>
            </group>


            <mesh geometry={nodes.open_6_1_1.geometry} material={materials.open_6_1} name="open_6_1"/>
            <mesh geometry={nodes.open_6_1_2.geometry} material={materials.open_6_1} name="open_6_1"/>

            <mesh ref = {open_6_key_1} geometry={nodes.open_6_key_1.geometry} position={[0.5, 1.2, 0.5]} material={materials.open_6_key_1}
                  name="open_6_key_1"/>

            <group position={[-1, 0, -1]}>
                <mesh geometry={nodes.open_6_1_1.geometry} material={materials.open_6_1} name="open_6_2"/>
                <mesh geometry={nodes.open_6_1_2.geometry} material={materials.open_6_1} name="open_6_2"/>
            </group>

            <mesh ref = {open_6_key_2} geometry={nodes.open_6_key_1.geometry} position={[-0.5, 1.2, -0.5]} material={materials.open_6_key_1}
                  name="open_6_key_2"/>


            <group position={[0.15, 0, -0.9]} scale={[0.8, 1, 0.8]}>
                <mesh geometry={nodes.open_6_1_1.geometry} material={materials.open_6_1} name="open_6_3"/>
                <mesh geometry={nodes.open_6_1_2.geometry} material={materials.open_6_1} name="open_6_3"/>
            </group>

            <mesh ref = {open_6_key_3} geometry={nodes.open_6_key_1.geometry} position={[0.555, 1.2, -0.5]} material={materials.open_6_key_1}
                  name="open_6_key_3"/>

            <group position={[-0.95, 0, 0.1]} scale={[0.8, 1, 0.8]}>
                <mesh geometry={nodes.open_6_1_1.geometry} material={materials.open_6_1} name="open_6_4"/>
                <mesh geometry={nodes.open_6_1_2.geometry} material={materials.open_6_1} name="open_6_4"/>
            </group>

            <mesh ref = {open_6_key_4} geometry={nodes.open_6_key_1.geometry} position={[-0.545, 1.2, 0.5]} material={materials.open_6_key_1}
                  name="open_6_key_4"/>
        </group>

    )
}


