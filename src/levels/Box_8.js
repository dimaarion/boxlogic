import * as THREE from 'three'
import {useRef, useState, useEffect} from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, useFBX, useTexture} from "@react-three/drei"
import {proxy} from "valtio";
import {Physics, RigidBody} from '@react-three/rapier'
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation} from "../action";



export default function Box_8(props) {
    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectRestart = useSelector((state) => state.restart);

    const state = proxy({
        current: null
    })

    const ref = useRef();
    const box = useRef();
    const paz = useRef();
    const initial = {cube1: false, cube2: false, cube3: false, cube4: false};


    const {nodes, materials} = useGLTF("./asset/obj/box8.glb")
    const [cube, setCube] = useState(initial);
    const [obj, setObj] = useState({});
    const [open, setOpen] = useState(false);


    useEffect(() => {
        dispatch({type: "LEVEL", preload: props.level ? props.level : 1});
        console.log(nodes)
        console.log(materials)
    }, [])

    let speed = 0.05;
    let position = 0.05;
    let positionOpen = 2

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref, t)
        if (obj.name === "key_1") {
            setCube({cube1: true, cube2: false, cube3: false, cube4: false});
            setOpen(false)
            if (obj.position.y > -position) {
                obj.position.y -= speed
            }
        }

        if (obj.name === "key_2" && cube.cube1) {
            setOpen(false)
            setCube({cube1: true, cube2: true, cube3: false, cube4: false})
            if (obj.position.y > -position) {
                obj.position.y -= speed
            }
        }
        if (obj.name === "key_3" && cube.cube1 && cube.cube2) {
            setOpen(false)
            setCube({cube1: true, cube2: true, cube3: true, cube4: false})
            if (obj.position.y > -position) {
                obj.position.y -= speed
            }
        }

        if (obj.name === "key_4" && cube.cube1 && cube.cube2 && cube.cube3) {
            setOpen(false)
            setCube({cube1: true, cube2: true, cube3: true, cube4: true})
            if (obj.position.y > -position) {
                obj.position.y -= speed
            }
        }

        if (obj.name === "open" && selectExit) {

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
jjj
            ref={ref}
            scale={[1, 1, 1]}
            onPointerMissed={() => (state.current = null)}
            onClick={(e) => {
                e.stopPropagation();
                setObj(e.object)
                if (cube.cube1 && cube.cube2 && cube.cube3 && cube.cube3 && e.object.name === "open") {
                    dispatch({type: "EXIT", preload: true})
                    setCube(initial);
                }
            }}>
            <Physics colliders={false}>
                <RigidBody ref={box} scale={[1, 1, 0.13]} colliders="trimesh"  type="kinematicPosition">
                    <mesh receiveShadow castShadow geometry={nodes.box.geometry} material={materials.box} name="box" />
                </RigidBody>
                <group ref={paz} scale={[1, 1, 1]}>
                    <RigidBody colliders="cuboid" args={[0.5, 16, 16]}  position={[0, 1, -1]} >
                        <mesh receiveShadow castShadow geometry={nodes.paz1.geometry}
                              material={materials.paz} name="paz1"/>
                    </RigidBody>
                    <RigidBody colliders="cuboid" args={[0.5, 16, 16]} position={[0, 1, -1]}>
                        <mesh receiveShadow castShadow geometry={nodes.paz4.geometry}   material={materials.paz} name="paz4"/>
                    </RigidBody>
                </group>

            </Physics>
        </group>
    )
}


