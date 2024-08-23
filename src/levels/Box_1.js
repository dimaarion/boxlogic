import {useRef, useState, useEffect} from "react"
import {useFrame} from "@react-three/fiber"
import {useGLTF} from "@react-three/drei"
import {proxy} from "valtio";
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation} from "../action";


export default function Box_1(props) {
    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);


    const state = proxy({
        current: null
    })

    const ref = useRef();
    const arrows = useRef();

    const {nodes, materials} = useGLTF("./asset/obj/cub.glb");
    const [open, setOpen] = useState(false);
    const [point, setPoint] = useState(false);

    useEffect(() => {
        ref.current.children.filter((el) => el.name === "open").forEach((el) => {
            el.position.x = 0
        })
    }, [selectExit])

    useEffect(() => {
       // dispatch({type: "LEVEL", preload: props.level ? props.level : 1})
    }, [])

    useEffect(() => {
        window.addEventListener("pointerdown", () => {
            setPoint(true);
        })
    }, [])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref, t)

        if (open) {
            ref.current.children.filter((el) => el.name === "open").forEach((el) => {
                if (el.position.x < 1.6 && selectExit) {
                    el.position.x += 0.1
                }
            })
        }else {
            dispatch({type:"QUEST_COUNT",preload:0});
            arrows.current.position.x = (1 + Math.sin(t / 0.2)) / 5;
        }

    })


    return (
        <group
            ref={ref}
            scale={[1, 1, 1]}
            onPointerOver={(e) => (e.stopPropagation())}
            onPointerOut={(e) => e.intersections.length === 0}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => {
                e.stopPropagation();
                if (e.object.name === "open") {
                    setOpen(true);
                    dispatch({type: "EXIT", preload: true})
                }

            }}>
            <mesh geometry={nodes.box001.geometry} material={materials.box} name="key_1"/>
            <mesh geometry={nodes.box001_1.geometry} material={materials.open} name="open"/>
            <group ref = {arrows}>
                {point && !open?<mesh geometry={nodes.arrows.geometry} position={[1.2, 0, 0]}
                             rotation={[0, 3.1, 0]} scale={0.1} material={materials.arrows} name="arrows"/>:""}
            </group>
        </group>
    )
}