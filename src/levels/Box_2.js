import { useRef, useState, useEffect } from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, useFBX, useTexture} from "@react-three/drei"
import {proxy} from "valtio";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation} from "../action";



export default function Box_2(props){
    const dispatch = useDispatch();
    const selectExit = useSelector((state)=>state.gameExitLevel);
    const selectRestart = useSelector((state)=>state.restart);
    const selectLevel = useSelector((state)=>state.level);

    const state = proxy({
        current: null
    })

    const ref = useRef()

    const { nodes, materials } = useGLTF("./asset/obj/box2.glb")
    const [cube, setCube] = useState({cube1:false});


    const [obj, setObj] = useState({});

    useEffect(()=>{
     //   console.log(nodes)
     //   console.log(materials)
        document.querySelector("body").style.backgroundImage = "url('./asset/bg/2.jpg')"
    },[selectLevel])

    useEffect(()=>{
        dispatch({type:"QUEST_OPEN",preload:false})
    },[cube.cube1])

    let speed = 0.5;
    let position = 10

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref,t)


        if(obj.name === "cub1"){
            setCube({cube1:true})
            dispatch({type:"QUEST_COUNT",preload:1});
            if(obj.position.z < position / 3){
                obj.position.z += speed
            }
        }

        if(obj.name === "open" && selectExit){
            setCube({cube1:false})
            if(obj.position.x < position){
                obj.position.x += speed
            }
        }

    })

useEffect(()=>{
if(!selectExit){
    ref.current.children.filter((el)=>el.name === "open").forEach((el)=>{el.position.x = 0});
    ref.current.children.filter((el)=>el.name === "cub1").forEach((el)=>{el.position.z = 0});
    dispatch({type:"QUEST_COUNT",preload:0});
}
},[selectExit])

    return (
        <group
            ref={ref}
            scale={[0.2,0.2,1]}
            onPointerMissed={() => (state.current = null)}
            onClick={(e) => {
                e.stopPropagation();
                setObj(e.object)
                if(cube.cube1 && e.object.name === "open"){
                    dispatch({type:"EXIT",preload:true})
                    setCube({cube1:false})
                }
            }}>
            <mesh  geometry={nodes.box_1.geometry} material={materials.cub1} name = "cub1"  />
            <mesh  geometry={nodes.box_2.geometry} material={materials.box} name = "box"  />
            <mesh  geometry={nodes.box_3.geometry} material={materials.open} name = "open"  />
        </group>
    )
}
