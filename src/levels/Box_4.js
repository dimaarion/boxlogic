import { useRef, useState, useEffect } from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, useFBX, useTexture} from "@react-three/drei"
import {proxy} from "valtio";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation} from "../action";



export default function Box_4(props){
    const dispatch = useDispatch();
    const selectExit = useSelector((state)=>state.gameExitLevel);
    const selectRestart = useSelector((state)=>state.restart);

    const state = proxy({
        current: null
    })

    const ref = useRef()

    const { nodes, materials } = useGLTF("./asset/obj/box4.glb")
    const [cube, setCube] = useState({cube1:false});


    const [obj, setObj] = useState({});

    useEffect(()=>{
     //   console.log(nodes)
      //  console.log(materials)

    },[selectRestart])

    useEffect(()=>{
      //  dispatch({type:"LEVEL",preload:props.level?props.level:1})
    },[])

    let speed = 0.5;
    let position = 3

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref,t)

        if(obj.name === "cub1"){
            setCube({cube1:true})
            if(obj.position.z > -position){
                obj.position.z -= speed
            }
        }

        if(obj.name === "open" && selectExit){
            setCube({cube1:false})
            if(obj.position.y < position / 1.5){
                obj.position.y += speed
            }
        }

    })

useEffect(()=>{
if(!selectExit){
    ref.current.children.filter((el)=>el.name === "open").forEach((el)=>{el.position.y = 0})
    ref.current.children.filter((el)=>el.name === "cub1").forEach((el)=>{el.position.z = 0})

}



},[selectExit])

    return (
        <group
            ref={ref}
            scale={[0.2,1,0.5]}
            onPointerMissed={() => (state.current = null)}
            onClick={(e) => {
                e.stopPropagation();
               // console.log(e.object.name)
                setObj(e.object)
                if(cube.cube1 && e.object.name === "open"){
                    dispatch({type:"EXIT",preload:true})
                    setCube({cube1:false})
                }
            }}>



            <mesh receiveShadow castShadow geometry={nodes.box.geometry}  material={materials.box} name = "cub1"  />
            <mesh receiveShadow castShadow geometry={nodes.box_1.geometry}  material={materials.box} name = "box"  />
            <mesh receiveShadow castShadow geometry={nodes.box_2.geometry}  material={materials.box} name = "open"  />
            <mesh receiveShadow castShadow geometry={nodes.box_3.geometry}  material={materials.box} name = "cub1"  />
        </group>
    )
}


