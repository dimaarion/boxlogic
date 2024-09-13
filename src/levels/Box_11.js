import {useRef, useState, useEffect} from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, Text} from "@react-three/drei"
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation, routable} from "../action";



export default function Box_11() {
    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectLevel = useSelector((state) => state.level);
    const {nodes, materials} = useGLTF("./asset/obj/box11.glb")
    const [active, setActive] = useState("")
    const [name, setName] = useState("")
    const [movingName, setMovingName] = useState("")
    const [activeElement, setActiveElement] = useState(null);
    useEffect(() => {
        // console.log(nodes)
    }, [])

    const ref = useRef();
    const gears = useRef();
    const htift = useRef();

    const handleElementClick = (name,movingName) => {
        // Находим целевой элемент (тот, к которому будем перемещаться)
        const targetElement = gears.current.children.find((el) => el.name === name);
        // Находим элемент, который будем перемещать
        const movingElement = gears.current.children.find((el) => el.name === movingName);
console.log(targetElement)
        if (targetElement && movingElement) {
            // Устанавливаем позицию перемещаемого элемента в позицию целевого элемента
            movingElement.position.set(
                targetElement.position.x,
                targetElement.position.y,
                targetElement.position.z
            );
        }
    };

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()
    //    defaultAnimation(ref, t)
        if (activeElement) {
            activeElement.material.color.set('white'); // Или любой исходный цвет
        }
        let element = gears.current.children.find((el) => el.name === movingName);

        if (element) {
            element.material = element.material.clone();
            element.material.color.set('red');
            setActiveElement(element);
        }


    })



    return <>
        <group ref = {ref} >
            <mesh geometry={nodes.box_1.geometry} material={materials.texture} name="box"/>
            <mesh geometry={nodes.box_2.geometry} material={materials.texture} name="box_2"/>
            <mesh geometry={nodes.box_3.geometry} material={materials.texture} name="box_3"/>
            <mesh geometry={nodes.box_in.geometry} position={[0, -0.43, 0]} scale={[0.9, 0.5, 0.9]}
                  material={materials.texture_2} name="box_in"/>
            <group>
                <mesh position={[0.79, -0.84, -0.79]} scale={[0.1, 0.015, 0.2]}
                      rotation={[0, routable(-45), routable(-45)]} geometry={nodes.key_0.geometry}
                      material={materials.texture_3} name="key_0"/>
                <mesh position={[0, 0.54, -1]} scale={0.065} geometry={nodes.key_1.geometry}
                      material={materials.texture_3} name="key_1"/>
                <mesh position={[0.95, -0.8, 0.11]} scale={0.065} geometry={nodes.key_2.geometry}
                      material={materials.texture_3} name="key_2"/>
                <mesh position={[-0.93, -0.18, 0]} scale={0.065} geometry={nodes.key_3.geometry}
                      material={materials.texture_3} name="key_3"/>
                <mesh position={[0, -0.21, 0.93]} scale={[0.2, 0.065, 0.065]} geometry={nodes.key_4.geometry}
                      material={materials.texture_3} name="key_3"/>
            </group>
            <group position={[1, -0.85, 1]} scale={0.2} rotation={[0, routable(-45), routable(0)]}>
                <mesh geometry={nodes.wood_1.geometry} material={materials.open_icon} name="key_0"/>
                <mesh geometry={nodes.wood_2.geometry} material={materials.Wood} name="key_0"/>
            </group>
            <group position={[1, -0.85, -1]} scale={0.2} rotation={[0, routable(45), routable(0)]}>
                <mesh geometry={nodes.wood_1.geometry} material={materials.open_icon} name="key_0"/>
                <mesh geometry={nodes.wood_2.geometry} material={materials.Water} name="key_0"/>
            </group>
            <group position={[-1, -0.85, 1]} scale={0.2} rotation={[0, routable(-135), routable(0)]}>
                <mesh geometry={nodes.wood_1.geometry} material={materials.open_icon} name="key_0"/>
                <mesh geometry={nodes.wood_2.geometry} material={materials.Earth} name="key_0"/>
            </group>
            <group position={[-1, -0.85, -1]} scale={0.2} rotation={[0, routable(135), routable(0)]}>
                <mesh geometry={nodes.wood_1.geometry} material={materials.open_icon} name="key_0"/>
                <mesh geometry={nodes.wood_2.geometry} material={materials.Fire} name="key_0"/>
            </group>

            <group ref = {gears} scale={0.1}   rotation={[0, routable(0), routable(-90)]} >
                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_1.geometry} material={materials.texture_3} name="l_key_1"
                      material-color={active}/>

                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_2.geometry} material={materials.texture_3}
                      name="l_key_2" material-color={active}/>
                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_3.geometry} material={materials.texture_3}
                      name="l_key_3" material-color={active}/>

                <mesh onClick = {(e)=>setMovingName(e.object.name)} scale={[1, 0.2, 1]} geometry={nodes.l_key_4.geometry}
                      material={materials.texture_3} name="l_key_4" material-color={active}/>

                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_5.geometry} material={materials.texture_3}
                      name="l_key_5" material-color={active}/>
                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_6.geometry} material={materials.texture_3}
                      name="l_key_6" material-color={active}/>
                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_7.geometry} material={materials.texture_3}
                      name="l_key_7" material-color={active}/>
                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_8.geometry} material={materials.texture_3}
                      name="l_key_8" material-color={active}/>
                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_9.geometry} material={materials.texture_3}
                      name="l_key_9" material-color={active}/>
                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_10.geometry} material={materials.texture_3}
                      name="l_key_10" material-color={active}/>
                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_11.geometry} material={materials.texture_3}
                      name="l_key_11" material-color={active}/>
                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_12.geometry} material={materials.texture_3}
                      name="l_key_12" material-color={active}/>
                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_13.geometry} material={materials.texture_3}
                      name="l_key_13" material-color={active}/>
                <mesh onClick = {(e)=>setMovingName(e.object.name)} geometry={nodes.l_key_14.geometry} material={materials.texture_3}
                      name="l_key_14" material-color={active}/>


                <mesh  position={[-2.9, 11, -4.35]} onClick = {(e)=> {handleElementClick(e.object.name, movingName)}} geometry={nodes.l_key_14.geometry} scale={[0.3, 1, 0.3]} material={materials.texture_3}
                       name="h_key_1"/>
                <mesh position={[0.1, 11, -3.2]} scale={[0.3, 1, 0.3]} onClick = {(e)=> {handleElementClick(e.object.name, movingName)}} geometry={nodes.l_key_14.geometry} material={materials.texture_3}
                      name="h_key_2"/>
                <mesh position={[0.5, 11, 0]} scale={[0.3, 1, 0.3]} geometry={nodes.l_key_14.geometry} material={materials.texture_3}
                      name="h_key_3"/>
                <mesh position={[-7.5, 11, 15.9]} scale={[0.3, 1, 0.3]} geometry={nodes.l_key_14.geometry} material={materials.texture_3}
                      name="h_key_4"/>
                <mesh position={[-12.7, 11, 8.5]} scale={[0.3, 1, 0.3]} geometry={nodes.l_key_14.geometry} material={materials.texture_3}
                      name="h_key_5"/>
                <mesh position={[-12.2, 11, -14.1]} scale={[0.3, 1, 0.3]} geometry={nodes.l_key_14.geometry} material={materials.texture_3}
                      name="h_key_6"/>
                <mesh position={[-18.1, 11, 1.3]} scale={[0.3, 1, 0.3]} geometry={nodes.l_key_14.geometry} material={materials.texture_3}
                      name="h_key_7"/>
                <mesh position={[-21.2, 11, 14.7]} scale={[0.3, 1, 0.3]} geometry={nodes.l_key_14.geometry} material={materials.texture_3}
                      name="h_key_8"/>
                <mesh position={[-21.2, 11, -7.7]} scale={[0.3, 1, 0.3]} geometry={nodes.l_key_14.geometry} material={materials.texture_3}
                      name="h_key_9"/>
            </group>

            <group ref = {htift}  scale={[0.03, 0.1, 0.03]} rotation={[0, routable(0), routable(90)]} onClick = {(e)=> {handleElementClick(e.object.name, movingName)}}>


            </group>
            <group scale={0.1} rotation={[routable(10), routable(0), routable(-90)]}>
                <mesh position={[0, 11, -8]} geometry={nodes.l_key_1.geometry} material={materials.texture_3}
                      name="l_key_L"/>
                <mesh position={[0.4, 11, 8.2]} geometry={nodes.l_key_1.geometry} material={materials.texture_3}
                      name="l_key_R"/>
            </group>
            <group>
                <mesh position={[1.05, -0.2, 0]} scale={[0.05, 0.7, 0.7]} geometry={nodes.open_left.geometry}
                      material={materials.texture_2} name="open_left"/>
            </group>
        </group>
    </>
}