import { useRef, useState, useEffect } from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, useFBX, useTexture} from "@react-three/drei"
import {proxy} from "valtio";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation} from "../action";



export default function Box_6(props){
    const dispatch = useDispatch();
    const selectExit = useSelector((state)=>state.gameExitLevel);
    const selectRestart = useSelector((state)=>state.restart);

    const state = proxy({
        current: null
    })

    const ref = useRef()

    const { nodes, materials } = useGLTF("./asset/obj/box6.glb")
    const [cube, setCube] = useState({cube1:false,cube2:false,cube3:false});


    const [obj, setObj] = useState({});

    useEffect(()=>{
      //  console.log(nodes)
      //  console.log(materials)



    },[selectRestart])

    useEffect(()=>{
     //   dispatch({type:"LEVEL",preload:props.level?props.level:1})
    },[])

    let speed = 0.05;
    let position = 0.5;
    let positionOpen = 2

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref,t)

        if(obj.name === "key_1"){
            setCube({cube1:true,cube2: false,cube3: false})
            if(obj.position.x > -position){
                obj.position.x -= speed
            }
        }

        if(obj.name === "key_2" && cube.cube1){
            setCube({cube1:true,cube2: true,cube3: false})
            if(obj.position.z < position){
                obj.position.z += speed
            }
        }
        if(obj.name === "key_3" && cube.cube1 && cube.cube2){
            setCube({cube1:true,cube2: true,cube3: true})
            if(obj.position.x < position){
                obj.position.x += speed
            }
        }

        if(obj.name === "open" && selectExit){
            if(obj.position.y < positionOpen){
                obj.position.y += speed
            }
        }

    })

useEffect(()=>{
if(!selectExit){
    ref.current.children.filter((el)=>el.name === "open").forEach((el)=>{el.position.y = 0});
    ref.current.children.filter((el)=>el.name === "key_1").forEach((el)=>{el.position.x = 0});
    ref.current.children.filter((el)=>el.name === "key_2").forEach((el)=>{el.position.z = 0});
    ref.current.children.filter((el)=>el.name === "key_3").forEach((el)=>{el.position.x = 0});
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
                if(cube.cube1 && cube.cube2 && cube.cube3 && e.object.name === "open"){
                    dispatch({type:"EXIT",preload:true})
                    setCube({cube1:false,cube2:false,cube3:false})
                }
            }}>



            <mesh  geometry={nodes.box.geometry}  material={materials.key_3} name = "key_3"  />
            <mesh  geometry={nodes.box_1.geometry}  material={materials.box} name = "box"  />
            <mesh  geometry={nodes.box_2.geometry}  material={materials.open} name = "open"  />
            <mesh  geometry={nodes.box_3.geometry}  material={materials.key_2} name = "key_2"  />
            <mesh  geometry={nodes.box_4.geometry}  material={materials.key_1} name = "key_1"  />
        </group>
    )
}


