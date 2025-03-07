import {useRef, useState, useEffect} from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, Text, useAnimations, useScroll,ScrollControls} from "@react-three/drei"
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation, routable} from "../action";
import * as THREE from "three";



export default function Box_11() {
    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectLevel = useSelector((state) => state.level);
    const {nodes, materials, animations} = useGLTF("./asset/obj/box11.glb")
    const { ref, actions,clips  } = useAnimations(animations)
    const [active, setActive] = useState(false)
    const [name, setName] = useState("")
    const [movingName, setMovingName] = useState("")
    const [activeElement, setActiveElement] = useState(null);
    const scroll = useScroll()
    useEffect(() => {
         console.log(nodes)
        console.log(ref.current)
    }, [])


    const gears = useRef();
    const htift = useRef();

    const handleElementClick = (name,movingName) => {
        // Находим целевой элемент (тот, к которому будем перемещаться)
        const targetElement = gears.current.children.find((el) => el.name === name);
        // Находим элемент, который будем перемещать
        const movingElement = gears.current.children.find((el) => el.name === movingName);

        if (targetElement && movingElement) {
            // Устанавливаем позицию перемещаемого элемента в позицию целевого элемента
            movingElement.position.set(
                targetElement.position.x,
                targetElement.position.y,
                targetElement.position.z
            );
        }
    };

    useEffect(()=>{
    actions["bottomAction"].play().paused = true
        actions["activeElement"].play()
    },[])

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()
        if(actions["bottomAction"].time > 1.2){
            actions["bottomAction"].play().paused = true
        }



    })



    return <>

        <group ref = {ref}  >
            <primitive object={nodes.Scene}  />
            <group onPointerUp={(e)=> {
                setActive(false)
            }} onPointerDown={(e)=> setActive(true)} name={"test"}>
                <skinnedMesh   castShadow receiveShadow geometry={nodes.l_key_2.geometry} material={materials.texture_3} skeleton={nodes.l_key_2.skeleton} />

            </group>

            <skinnedMesh onPointerDown={(e)=> {
                if(actions["bottomAction"].time < 1.2) {
                    actions["bottomAction"].play().paused = false
                }
            }}  castShadow receiveShadow geometry={nodes.openBottom.geometry} material={materials.texture} skeleton={nodes.openBottom.skeleton} />

                </group>

    </>
}