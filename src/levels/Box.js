import React, {useRef, useState, useEffect} from "react"
import {useFrame} from "@react-three/fiber"
import {useGLTF} from "@react-three/drei"
import {proxy} from "valtio";
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation} from "../action";


export default function Box(props) {
   const level = props.level === undefined?1:props.level;
   const gltf = props.gltf === undefined?"./asset/obj/cub.glb":props.gltf;
   const isObject = props.isObject === undefined?{cube1: false}:props.isObject;
   const frame = props.frame === undefined?()=>{}:props.frame;
   const Meshes = props.Meshes === undefined?()=>{}:props.Meshes;
   const restart = props.restart === undefined?()=>{}:props.restart;
   const scale = props.scale === undefined?[1,1,1]:props.scale;
   const isOpen = props.isOpen === undefined?()=>{return false}:props.isOpen;


    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);


    const state = proxy({
        current: null
    })
    const ref = useRef()
    const {nodes, materials} = useGLTF(gltf)
    const [cube, setCube] = useState(isObject);
    const [obj, setObj] = useState({});
    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch({type: "LEVEL", preload: level})
    }, [])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref, t)
        frame(obj, setCube, cube, open);
    })

    useEffect(() => {

          //  restart(ref);

    }, [])
    useEffect(() => {
        if(open){
         //   dispatch({type: "EXIT", preload: true})
        }

        // restart(ref);

    }, [open])



    return (
        <group
            ref={ref}
            scale={scale}
            onPointerMissed={() => (state.current = null)}
            onClick={(e) => {
                e.stopPropagation();
                setObj(e.object)
                if (isOpen(e,cube)) {
                    setCube(isObject)
                    dispatch({type: "EXIT", preload: true})
                }
            }}>
            <Meshes nodes={nodes} materials={materials}/>

        </group>
    )
}
