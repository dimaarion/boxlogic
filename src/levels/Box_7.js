import { useRef, useState, useEffect } from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, useFBX, useTexture} from "@react-three/drei"
import {proxy} from "valtio";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation} from "../action";



export default function Box_7(props){
    const dispatch = useDispatch();
    const selectExit = useSelector((state)=>state.gameExitLevel);
    const selectRestart = useSelector((state)=>state.restart);

    const state = proxy({
        current: null
    })

    const ref = useRef();
    const head = useRef();
    const initial = {cube1:false,cube2:false,cube3:false,cube4:false};


    const { nodes, materials } = useGLTF("./asset/obj/box7.glb")
    const [cube, setCube] = useState(initial);
    const [obj, setObj] = useState({});
    const [open, setOpen] = useState(false);


    useEffect(()=>{
        dispatch({type:"LEVEL",preload:props.level?props.level:1})
    },[])

    let speed = 0.05;
    let position = 0.05;
    let positionOpen = 2

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref,t)


        if(obj.name === "key_1"){
            setCube({cube1:true,cube2: false,cube3: false, cube4: false});
            setOpen(false)
            if(obj.position.y > -position){
                obj.position.y -= speed
            }
        }

        if(obj.name === "key_2" && cube.cube1){
            setOpen(false)
            setCube({cube1:true,cube2: true,cube3: false, cube4: false})
            if(obj.position.y > -position){
                obj.position.y -= speed
            }
        }
        if(obj.name === "key_3" && cube.cube1 && cube.cube2){
            setOpen(false)
            setCube({cube1:true,cube2: true,cube3: true, cube4: false})
            if(obj.position.y > -position){
                obj.position.y -= speed
            }
        }

        if(obj.name === "key_4" && cube.cube1 && cube.cube2 && cube.cube3){
            setOpen(false)
            setCube({cube1:true,cube2: true,cube3: true, cube4: true})
            if(obj.position.y > -position){
                obj.position.y -= speed
            }
        }

        if(obj.name === "open" && selectExit){
            if(head.current.position.y < positionOpen){
                head.current.position.y += speed
            }
        }

        if(obj.name === "open"){
            setOpen(true)
        }

    })

useEffect(()=>{
if(!selectExit || open){
    head.current.children.filter((el)=>el.name === "key_1").forEach((el)=>{el.position.y = 0});
    head.current.children.filter((el)=>el.name === "key_2").forEach((el)=>{el.position.y = 0});
    head.current.children.filter((el)=>el.name === "key_3").forEach((el)=>{el.position.y = 0});
    head.current.children.filter((el)=>el.name === "key_4").forEach((el)=>{el.position.y = 0});
    head.current.position.y = 0;
    setCube(initial);
}



},[selectExit, open])

    return (
        <group

            ref={ref}
            scale={[1,1,1]}
            onPointerMissed={() => (state.current = null)}
            onClick={(e) => {
                e.stopPropagation();
                setObj(e.object)
                if(cube.cube1 && cube.cube2 && cube.cube3 && cube.cube3 && e.object.name === "open"){
                    dispatch({type:"EXIT",preload:true})
                    setCube(initial);
                }
            }}>



            <mesh receiveShadow castShadow geometry={nodes.box_1.geometry}  material={materials.box} name = "box"  />
            <group ref = {head}>
                <mesh receiveShadow castShadow geometry={nodes.box_2.geometry}  material={materials.key_1} name = "key_1"  />
                <mesh receiveShadow castShadow geometry={nodes.box_3.geometry}  material={materials.key_1} name = "key_2"  />
                <mesh receiveShadow castShadow geometry={nodes.box_4.geometry}  material={materials.key_1} name = "key_3"  />
                <mesh receiveShadow castShadow geometry={nodes.box_5.geometry}  material={materials.open} name = "open"  />
                <mesh receiveShadow castShadow geometry={nodes.box_6.geometry}  material={materials.key_1} name = "key_4"  />
            </group>

        </group>
    )
}


