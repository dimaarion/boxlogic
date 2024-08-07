import { useRef, useState, useEffect } from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, useFBX, useTexture} from "@react-three/drei"
import {proxy} from "valtio";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation} from "../action";



export default function Box_5(props){
    const dispatch = useDispatch();
    const selectExit = useSelector((state)=>state.gameExitLevel);


    const state = proxy({
        current: null
    })

    const ref = useRef()

    const { nodes, materials } = useGLTF("./asset/obj/box5.glb");

    const initial = {cube1:false,cube2:false};

    const [cube, setCube] = useState(initial);


    const [obj, setObj] = useState({});



    useEffect(()=>{
     //   dispatch({type:"LEVEL",preload:props.level?props.level:1})
    },[])

    let speed = 0.05;
    let position = 1;
    let positionOpen = 2

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref,t)


        if(obj.name === "key_1"){
            setCube({cube1:true,cube2: false})
            if(obj.position.z > -position){
                obj.position.z -= speed
            }
        }

        if(obj.name === "key_2" && cube.cube1){
            setCube({cube1:true,cube2: true})
            if(obj.position.z < position){
                obj.position.z += speed
            }
        }

        if(obj.name === "open" && selectExit){
            setCube({cube1:false,cube2:false})
            if(obj.position.y < positionOpen){
                obj.position.y += speed
            }
        }

    })

    useEffect(()=>{
        if(!selectExit){
            ref.current.children.filter((el)=>el.name === "open").forEach((el)=>{el.position.y = 0});
            ref.current.children.filter((el)=>el.name === "key_1").forEach((el)=>{el.position.z = 0});
            ref.current.children.filter((el)=>el.name === "key_2").forEach((el)=>{el.position.z = 0});

        }



    },[selectExit])

    return (
        <group

            ref={ref}
            scale={[1,1,1]}
            onPointerMissed={() => (state.current = null)}
            onClick={(e) => {
                e.stopPropagation();
                setObj(e.object)
                if(cube.cube1 && cube.cube2 && e.object.name === "open"){
                    dispatch({type:"EXIT",preload:true})
                    setCube(initial)
                }
            }}>



            <mesh receiveShadow castShadow geometry={nodes.box.geometry}  material={materials.box} name = "box"  />
            <mesh receiveShadow castShadow geometry={nodes.box_1.geometry}  material={materials.box} name = "box"  />
            <mesh receiveShadow castShadow geometry={nodes.box_2.geometry}  material={materials.box} name = "key_1"  />
            <mesh receiveShadow castShadow geometry={nodes.box_3.geometry}  material={materials.box} name = "open"  />
            <mesh receiveShadow castShadow geometry={nodes.box_4.geometry}  material={materials.box} name = "key_2"  />
        </group>
    )
}


