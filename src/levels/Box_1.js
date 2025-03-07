import {useRef, useState, useEffect} from "react"
import {useFrame} from "@react-three/fiber"
import {Gltf, useAnimations, useGLTF} from "@react-three/drei"
import {proxy} from "valtio";
import {useDispatch, useSelector} from "react-redux";
import {animateStop, collideRotation, defaultAnimation, handleClick, routable} from "../action";
import * as THREE from "three";


export default function Box_1(props) {
    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);
    const {nodes, materials, animations} = useGLTF("./asset/obj/box_1.glb");
    const {ref, actions, clips, index} = useAnimations(animations)
    const [open, setOpen] = useState(false);
    const [point, setPoint] = useState(false);
    const [open_1, setOpen_1] = useState(false);
    const [exit_1, setExit_1] = useState(false);
    const [open_2, setOpen_2] = useState(false);
    const [exit_2, setExit_2] = useState(false);
    const [open31, setOpen31] = useState(false);
    const [open32, setOpen32] = useState(false);
    const [exit3, setExit3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [exit4, setExit4] = useState(false);


    const open2Ref = useRef();
    const open33Ref = useRef();
    const box2 = useRef();
    let actionArr = [
        "open_1",
        "exit_1",
        "exit_1_1",
        "open_2",
        "exit_2",
        "exit_2_1.001",
        "open_3_3",
        "exit_3_1Action.001",
        "exit_3Action",
        "open_4_1Action",
        "exit_4Action",
        "exit_4_1Action",
        "open_4Action",
        "box_1Action",
        "exit_4_1Action.001",
        "exit_3_1Action",
        "exit_2_1",
        "exit_1_2"

    ]

    useEffect(() => {

        actionArr.forEach((el) => {
            if (actions[el]) {
                actions[el].setLoop(THREE.LoopOnce, 1);
                actions[el].clampWhenFinished = true;
            } else {
                console.log(el)
            }

        })

    }, [])

    useEffect(() => {
        // dispatch({type: "LEVEL", preload: props.level ? props.level : 1})
      //  console.log(nodes)

    }, [])


    useEffect(() => {
        if (open) {
            ["exit_4_1Action.001", "exit_3_1Action", "exit_2_1", "exit_1_2"].forEach((el) => {
                actions[el].reset().play()
            })
        }

    }, [open])

    const offset = new THREE.Vector3(0, 100, 10);

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()
        //   defaultAnimation(ref, t)
        const position = ref.current.position;

        const targetPosition = new THREE.Vector3(
            position.x + offset.x,
            position.y + offset.y,
            position.z + offset.z
        );
        state.camera.position.lerp(targetPosition, 0.1);
        state.camera.lookAt(ref.current.position.x, ref.current.position.y, ref.current.position.z);
        if (
            collideRotation("exit_4_1Action", actions, 1.1, 1.4)
            && collideRotation("exit_3_1Action.001", actions, 1.1, 1.4)
            && collideRotation("exit_2_1.001", actions, 1.1, 1.4)
            && collideRotation("exit_1_1", actions, 1.1, 1.4)
        ) {
            dispatch({type: "EXIT", preload: true})
            setOpen(true)
            if(box2.current.position.y < 1.5){
                box2.current.position.y += 0.01
            }

        }



    })


    return (
        <group position={[0, 10, 0]} ref={ref} onPointerDown={(e) => {
            e.stopPropagation();
            handleClick(e, actions, "key_1_1", "open_1", open_1, setOpen_1, 1);
            handleClick(e, actions, "exit_1_1", ["exit_1", "exit_1_1"], exit_1, setExit_1, 1);
            handleClick(e, actions, "open_2_1", ["open_2_1"], open_2, setOpen_2, 0.5);
            handleClick(e, actions, "exit_2_2", ["exit_2", "exit_2_1.001"], exit_2, setExit_2);
            handleClick(e, actions, "open_3_1", ["open_3_1"], open31, setOpen31, 0.2);
            handleClick(e, actions, "open_3_2", ["open_3_2"], open32, setOpen32, 0.2);
            handleClick(e, actions, "exit3_2", ["exit_3_1Action.001", "exit_3Action"], exit3, setExit3);
            handleClick(e, actions, "open4_1", ["open_4_1Action", "open_4Action"], open4, setOpen4);
            handleClick(e, actions, "exit4_2", ["exit_4_1Action", "exit_4Action"], exit4, setExit4);

        }} onPointerUp={(e) => {

            animateStop(e, actions, "open_2_1", ["open_2_1"], open_2, setOpen_2)
            animateStop(e, actions, "open_3_1", ["open_3_1"], open31, setOpen31)
            animateStop(e, actions, "open_3_2", ["open_3_2"], open32, setOpen32)
            if (collideRotation("open_2_1", actions, 1.1, 1.2)) {
                actions["open_2"].play().paused = false
                setOpen_2(true)
            }
            if (collideRotation("open_3_1", actions, 1.14, 1.19) && collideRotation("open_3_2", actions, 1.25, 1.30)) {
                actions["open_3_3"].play().paused = false
                setOpen31(true);
                setOpen32(true);
            }
           // console.log(actions["open_3_2"].time)
        }}>
            <primitive object={nodes.box}/>
            <primitive object={nodes.box1}/>
            <primitive object={nodes.box_2}/>
            <primitive object={nodes.key_1}/>
            <primitive object={nodes.exit_1}/>
            <primitive object={nodes.exit11}/>
            <primitive ref={open2Ref} object={nodes.open_2}/>
            <primitive object={nodes.exit_2}/>
            <primitive object={nodes.exit21}/>
            <primitive ref={open33Ref} object={nodes.open31}/>
            <primitive object={nodes.open32}/>
            <primitive object={nodes.open33}/>
            <primitive object={nodes.exit3}/>
            <primitive object={nodes.exit31}/>
            <primitive object={nodes.open4}/>
            <primitive object={nodes.open41}/>
            <primitive object={nodes.exit41}/>
            <primitive object={nodes.exit4}/>
            <Gltf ref={box2} src={"./asset/obj/box2.glb"} scale={0.2} />
        </group>
    )
}