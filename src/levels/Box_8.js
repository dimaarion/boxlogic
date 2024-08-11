import * as THREE from 'three'
import {useRef, useState, useEffect} from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, useFBX, useTexture} from "@react-three/drei"
import {proxy} from "valtio";
import {Physics, RigidBody} from '@react-three/rapier'
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation, distantCollege, routable, velocityInvert} from "../action";


export default function Box_8(props) {
    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectRestart = useSelector((state) => state.restart);

    const state = proxy({
        current: null
    })

    const ref = useRef();
    const box = useRef();
    const initial = {cube1: false, cube2: false, cube3: false, cube4: false};


    const {nodes, materials} = useGLTF("./asset/obj/box8.glb")
    const [cube, setCube] = useState(initial);
    const [obj, setObj] = useState({});
    const [open, setOpen] = useState(false);
    const [key_1, setKey_1] = useState(0);
    const [key_2, setKey_2] = useState(0);
    const [key_3, setKey_3] = useState(0);
    const [key_1_1, setKey_1_1] = useState(0);
    const [key_1_2, setKey_1_2] = useState(0);
    const [key_1_3, setKey_1_3] = useState(0);
    const [key_1_4, setKey_1_4] = useState(0);
    const [key_1_5, setKey_1_5] = useState(0);
    const [key_1_6, setKey_1_6] = useState(0);
    const [key_1_7, setKey_1_7] = useState(0);
    const [key_open, setKey_open] = useState(0);
    const [keyRotate, setKeyRotate] = useState(false);
    const [keyRotate2, setKeyRotate2] = useState(false);
    const [keyRotate3, setKeyRotate3] = useState(false);
    const [keyRotate4, setKeyRotate4] = useState(false);
    const [keyRotate5, setKeyRotate5] = useState(false);
    const [keyRotate6, setKeyRotate6] = useState(false);
    const [keyRotate7, setKeyRotate7] = useState(false);
    const [keyRotateOpen, setKeyRotateOpen] = useState(false);

    useEffect(() => {
        //  dispatch({type: "LEVEL", preload: props.level ? props.level : 1});
        console.log(nodes)
        console.log(materials)
    }, [])

    let speed = 0.05;
    let position = 1;
    let positionOpen = 2

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref, t)

        if (key_1 === 90 && key_2 === 90 && key_3 === 90) {
            setCube({cube1: true, cube2: false, cube3: false, cube4: false});
            ref.current.children.filter((el) => el.name === "open_1").forEach((el) => {
                if (el.position.y < position) {
                    el.position.y += speed
                }
            });

            if(distantCollege(key_1_1,90,120)
                && distantCollege(key_1_2,40,75)
                && distantCollege(key_1_3,10,30)
                && distantCollege(key_1_4,270,300)
                && distantCollege(key_1_5,270,300)
                && distantCollege(key_1_6,140,160)
                && distantCollege(key_1_7,190,200)){
                ref.current.children.filter((el) => el.name === "open_2").forEach((el) => {
                    if (el.position.z > -position) {
                        el.position.z -= speed;
                    }
                });
            }

            if (keyRotate) {
                setKey_1_1(key_1_1 + 0.5);
                if(key_1_1 > 360){
                    setKey_1_1(0);
                }
            }

            if (keyRotate2) {
                setKey_1_2(key_1_2 + 0.5)
                if(key_1_2 > 360){
                    setKey_1_2(0);
                }
            }

            if (keyRotate3) {
                setKey_1_3(key_1_3 + 0.5)
                if(key_1_3 > 360){
                    setKey_1_3(0);
                }
            }

            if (keyRotate4) {
                setKey_1_4(key_1_4 + 0.5)
                if(key_1_4 > 360){
                    setKey_1_4(0);
                }
            }

            if (keyRotate5) {
                setKey_1_5(key_1_5 + 0.5)
                if(key_1_5 > 360){
                    setKey_1_5(0);
                }
            }

            if (keyRotate6) {
                setKey_1_6(key_1_6 + 0.5)
                if(key_1_6 > 360){
                    setKey_1_6(0);
                }
            }

            if (keyRotate7) {
                setKey_1_7(key_1_7 + 0.5)
                if(key_1_7 > 360){
                    setKey_1_7(0);
                }
            }



        }else {

            if (keyRotate) {
                ref.current.children.filter((el) => el.name === "key_2_1").forEach((el) => {
                        el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate2) {
                ref.current.children.filter((el) => el.name === "key_2_2").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate3) {
                ref.current.children.filter((el) => el.name === "key_2_3").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate4) {
                ref.current.children.filter((el) => el.name === "key_2_4").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate5) {
                ref.current.children.filter((el) => el.name === "key_2_5").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate6) {
                ref.current.children.filter((el) => el.name === "key_2_6").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate7) {
                ref.current.children.filter((el) => el.name === "key_2_7").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
        }

        if (keyRotateOpen) {
            setKey_open(key_open - 0.5)
            if(key_open < -360){
                setKey_open(0);
            }
        }

        if (obj.name === "open") {
            setOpen(true)
        }

    })

    useEffect(() => {
        if (!selectExit || open) {
            /* head.current.children.filter((el)=>el.name === "key_1").forEach((el)=>{el.position.y = 0});
             head.current.children.filter((el)=>el.name === "key_2").forEach((el)=>{el.position.y = 0});
             head.current.children.filter((el)=>el.name === "key_3").forEach((el)=>{el.position.y = 0});
             head.current.children.filter((el)=>el.name === "key_4").forEach((el)=>{el.position.y = 0});
             head.current.position.y = 0;
             setCube(initial);*/
        }

    }, [selectExit, open])


    return (
        <group
            rotation={[0, routable(180), 0]}
            ref={ref}
            onPointerMissed={() => (state.current = null)}
            onPointerDown = {(e)=>{
                e.stopPropagation();
                if(e.object.name === "key_2_1"){
                    setKeyRotate(true);
                }
                if(e.object.name === "key_2_2"){
                    setKeyRotate2(true);
                }
                if(e.object.name === "key_2_3"){
                    setKeyRotate3(true);
                }
                if(e.object.name === "key_2_4"){
                    setKeyRotate4(true);
                }

                if(e.object.name === "key_2_5"){
                    setKeyRotate5(true);
                }
                if(e.object.name === "key_2_6"){
                    setKeyRotate6(true);
                }
                if(e.object.name === "key_2_7"){
                    setKeyRotate7(true);
                }

                if(e.object.name === "open_key"){
                    setKeyRotateOpen(true);
                }
                console.log(key_open)
            }}
            onPointerUp = {(e)=>{
                e.stopPropagation();
                setKeyRotate7(false);
                setKeyRotate(false);
                setKeyRotate2(false);
                setKeyRotate3(false);
                setKeyRotate4(false);
                setKeyRotate5(false);
                setKeyRotate6(false);
                setKeyRotateOpen(false);

            }}
            onClick={(e) => {
                e.stopPropagation();
              //  setObj(e.object);
                if (e.object.name === "key_1_1") {
                    if (key_1 === 360) {
                        setKey_1(90)
                    } else {
                        setKey_1(key_1 + 90)
                    }
                }
                if (e.object.name === "key_1_2") {
                    if (key_2 === 360) {
                        setKey_2(90)
                    } else {
                        setKey_2(key_2 + 90)
                    }
                }
                if (e.object.name === "key_1_3") {
                    if (key_3 === 360) {
                        setKey_3(90)
                    } else {
                        setKey_3(key_3 + 90)
                    }
                }





                if (cube.cube1 && cube.cube2 && cube.cube3 && cube.cube3 && e.object.name === "open") {
                    dispatch({type: "EXIT", preload: true})
                    setCube(initial);

                }
            }}>

            <mesh geometry={nodes.box.geometry} material={materials.key_2_1} name="box"/>
            <mesh geometry={nodes.box_1.geometry} material={materials.line_open_1} name="open_1"/>
            <mesh geometry={nodes.box_2.geometry} material={materials.seasons} name="box"/>
            <mesh geometry={nodes.box_3.geometry}  material={materials.password} name="open_2"/>
            <mesh geometry={nodes.box_4.geometry} material={materials.open_2} name="open_2"/>
            <mesh geometry={nodes.box_5.geometry} material={materials.open_1} name="open_1"/>
            <mesh geometry={nodes.box_6.geometry} material={materials.inn} name="box"/>
            <mesh geometry={nodes.box_7.geometry} material={materials.alf} name="box"/>
            <mesh geometry={nodes.box_8.geometry} material={materials.open_4} name="open_4"/>
            <mesh geometry={nodes.box_9.geometry} material={materials.rotate} name="box"/>
            <mesh geometry={nodes.box_10.geometry} material={materials.line} name="box"/>
            <mesh geometry={nodes.box_11.geometry} material={materials.exit} name="box"/>

            <group position={[2.2, 0.12, -1]} rotation={[routable(key_1), 0, 0]}>
                <mesh geometry={nodes.key.geometry} material={materials.line} name="key_1_1"/>
                <mesh geometry={nodes.key_1.geometry} material={materials.key_1_1} name="key_1_1"/>
            </group>

            <group position={[-1.12, 0.12, -2.5]} rotation={[0, 0, routable(key_2)]}>
                <mesh geometry={nodes.key_2.geometry} material={materials.line} name="key_1_2"/>
                <mesh geometry={nodes.key_2_1.geometry} material={materials.key_2_1} name="key_1_2"/>
            </group>

            <mesh geometry={nodes.key_1_geom.geometry} position={[1.65, 1.6, -1.6]} rotation={[routable(key_1_1), 0,0]} material={materials.key_2_1} name="key_2_1"/>
            <mesh geometry={nodes.key_1_geom.geometry} position={[1.08, 1.6, -1.6]} rotation={[routable(key_1_2), 0,0]} material={materials.key_2_1} name="key_2_2"/>
            <mesh geometry={nodes.key_1_geom.geometry} position={[0.55, 1.6, -1.6]} rotation={[routable(key_1_3), 0,0]} material={materials.key_2_1} name="key_2_3"/>
            <mesh geometry={nodes.key_1_geom.geometry} position={[-0.02, 1.6, -1.6]} rotation={[routable(key_1_4), 0,0]} material={materials.key_2_1} name="key_2_4"/>
            <mesh geometry={nodes.key_1_geom.geometry} position={[-0.56, 1.6, -1.6]} rotation={[routable(key_1_5), 0,0]} material={materials.key_2_1} name="key_2_5"/>
            <mesh geometry={nodes.key_1_geom.geometry} position={[-1.11, 1.6, -1.6]} rotation={[routable(key_1_6), 0,0]} material={materials.key_2_1} name="key_2_6"/>
            <mesh geometry={nodes.key_1_geom.geometry} position={[-1.65, 1.6, -1.6]} rotation={[routable(key_1_7), 0,0]} material={materials.key_2_1} name="key_2_7"/>

            <group position={[-2.23, -0.7, -0.15]} rotation={[routable(key_3), 0, 0]}>
                <mesh geometry={nodes.key_3.geometry} material={materials.line} name="key_1_3"/>
                <mesh geometry={nodes.key_3_1.geometry} material={materials.key_1_2} name="key_1_3"/>
            </group>

            <mesh geometry={nodes.open_key.geometry} position={[0.01, 0.09, 2.2]} rotation={[0, 0,routable(key_open)]} material={materials.key_2_1} name="open_key"/>
        </group>
    )
}


