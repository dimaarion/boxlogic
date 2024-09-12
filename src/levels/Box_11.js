import {useRef, useState, useEffect} from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, Text} from "@react-three/drei"
import {useDispatch, useSelector} from "react-redux";

export default function Box_11() {
    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectLevel = useSelector((state) => state.level);
    const {nodes, materials} = useGLTF("./asset/obj/box11.glb")
    useEffect(() => {
console.log(nodes)
    },[])

    return <>
        <group>
            <mesh geometry={nodes.box_1.geometry} material={materials.texture} name="box" />
            <mesh geometry={nodes.box_2.geometry} material={materials.texture} name="box_2" />
            <mesh geometry={nodes.box_3.geometry} material={materials.texture} name="box_3" />

        </group>
    </>
}