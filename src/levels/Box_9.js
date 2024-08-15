import * as THREE from 'three'
import {useRef, useState, useEffect} from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, useFBX, useTexture} from "@react-three/drei"
import {proxy} from "valtio";
import {Physics, RigidBody} from '@react-three/rapier'
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation, distantCollege, routable, velocityInvert} from "../action";


export default function Box_9() {
    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);


    const state = proxy({
        current: null
    })

    const ref = useRef();

    const {nodes, materials} = useGLTF("./asset/obj/box9.glb")
    const [exit, setExit] = useState(false);
    const [open, setOpen] = useState(false);
    const [key_1, setKey_1] = useState(0);
    const [key_2, setKey_2] = useState(0);
    const [key_3, setKey_3] = useState(0);
    const [key_4, setKey_4] = useState(0);
    const [key_5, setKey_5] = useState(0);
    const [key_6, setKey_6] = useState(0);
    const [key_7, setKey_7] = useState(0);
    const [key_8, setKey_8] = useState(0);
    const [key_9, setKey_9] = useState(0);
    const [key_10, setKey_10] = useState(0);
    const [key_11, setKey_11] = useState(0);
    const [key_12, setKey_12] = useState(0);
    const [key_13, setKey_13] = useState(0);
    const [key_14, setKey_14] = useState(0);
    const [key_15, setKey_15] = useState(0);
    const [key_16, setKey_16] = useState(0);
    const [key_open, setKey_open] = useState(0);
    const [key_exit, setKey_exit] = useState(0);

    let initialKeyPosition = {
        key1: false,
        key2: false,
        key3: false,
        key4: false,
        key5: false,
        key6: false,
        key7: false,
        key8: false,
        key9: false,
        key10: false,
        key11: false,
        key12: false,
        key13: false,
        key14: false,
        key15: false,
        key16: false,
    };
    const [keyPosition, setKeyPosition] = useState(initialKeyPosition);


    const [arrowRotate, setArrowRotate] = useState(0);
    const [keyRotateOpen, setKeyRotateOpen] = useState(false);
    const [objectPosition, setObjectPosition] = useState({});
    const [x, setX] = useState(0);
    const [arrowUp, setArrowUp] = useState(false);
    const [arrowDown, setArrowDown] = useState(false);


    useEffect(() => {
      //  console.log(nodes)
        //  console.log(materials)
    }, [])


    function setVelocityMin(keyRotate, key, setKey) {
        if (keyRotate) {
            if (key > -9) {
                setKey(key - 0.05);
            }
        }
    }

    function setVelocityPlus(keyRotate, key, setKey) {
        if (keyRotate) {
            if (key < 9) {
                setKey(key + 0.05);
            }
        }
    }

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref, t)

        if (arrowDown) {
            setVelocityMin(keyPosition.key1, key_1, setKey_1);
            setVelocityMin(keyPosition.key2, key_2, setKey_2);
            setVelocityMin(keyPosition.key3, key_3, setKey_3);
            setVelocityMin(keyPosition.key4, key_4, setKey_4);
            setVelocityMin(keyPosition.key5, key_5, setKey_5);
            setVelocityMin(keyPosition.key6, key_6, setKey_6);
            setVelocityMin(keyPosition.key7, key_7, setKey_7);
            setVelocityMin(keyPosition.key8, key_8, setKey_8);
            setVelocityMin(keyPosition.key9, key_9, setKey_9);
            setVelocityMin(keyPosition.key10, key_10, setKey_10);
            setVelocityMin(keyPosition.key11, key_11, setKey_11);
            setVelocityMin(keyPosition.key12, key_12, setKey_12);
            setVelocityMin(keyPosition.key13, key_13, setKey_13);
            setVelocityMin(keyPosition.key14, key_14, setKey_14);
            setVelocityMin(keyPosition.key15, key_15, setKey_15);
            setVelocityMin(keyPosition.key16, key_16, setKey_16);
        }
        if (arrowUp) {
            setVelocityPlus(keyPosition.key1, key_1, setKey_1);
            setVelocityPlus(keyPosition.key2, key_2, setKey_2);
            setVelocityPlus(keyPosition.key3, key_3, setKey_3);
            setVelocityPlus(keyPosition.key4, key_4, setKey_4);
            setVelocityPlus(keyPosition.key5, key_5, setKey_5);
            setVelocityPlus(keyPosition.key6, key_6, setKey_6);
            setVelocityPlus(keyPosition.key7, key_7, setKey_7);
            setVelocityPlus(keyPosition.key8, key_8, setKey_8);
            setVelocityPlus(keyPosition.key9, key_9, setKey_9);
            setVelocityPlus(keyPosition.key10, key_10, setKey_10);
            setVelocityPlus(keyPosition.key11, key_11, setKey_11);
            setVelocityPlus(keyPosition.key12, key_12, setKey_12);
            setVelocityPlus(keyPosition.key13, key_13, setKey_13);
            setVelocityPlus(keyPosition.key14, key_14, setKey_14);
            setVelocityPlus(keyPosition.key15, key_15, setKey_15);
            setVelocityPlus(keyPosition.key16, key_16, setKey_16);
        }

        if (keyRotateOpen) {
            if (distantCollege(x, 0, window.innerWidth / 2)) {
                setKey_open(key_open + 0.5)
                if (key_open > 360) {
                    setKey_open(0);
                }
            }
            if (distantCollege(x, window.innerWidth / 2, window.innerWidth)) {
                setKey_open(key_open - 0.5)
                if (key_open < -360) {
                    setKey_open(0);
                }
            }

        }
        if (distantCollege(key_1, -1, 1)
            && distantCollege(key_2, 3, 5)
            && distantCollege(key_3, -3, -2)
            && distantCollege(key_4, -5, -4)
            && distantCollege(key_5, 0, 3)
            && distantCollege(key_6, -4, -2)
            && distantCollege(key_7, 3, 5)
            && distantCollege(key_8, 0, 3)
            && distantCollege(key_9, -6, -3)
            && distantCollege(key_10, -6, -3)
            && distantCollege(key_11, 1, 3.5)
            && distantCollege(key_12, -3, -1)
            && distantCollege(key_13, 3, 5)
            && distantCollege(key_14, -5.5, -3.5)
            && distantCollege(key_15, -3.5, -1)
            && distantCollege(key_16, 1, 4)
        ) {
            setOpen(true);
            setKey_open(0);
            if (key_exit < 8) {
                setKey_exit(key_exit + 0.1);
            }
        }

    })

    useEffect(() => {
        if (!selectExit) {
            setKey_1(0);
            setKey_2(0);
            setKey_3(0);
            setKey_4(0);
            setKey_5(0);
            setKey_6(0);
            setKey_7(0);
            setKey_8(0);
            setKey_9(0);
            setKey_10(0);
            setKey_11(0);
            setKey_12(0);
            setKey_13(0);
            setKey_14(0);
            setKey_15(0);
            setKey_16(0);
            setKey_exit(0);
            setKey_open(0);
            setOpen(false)
            setExit(false);
        }


    }, [selectExit])


    return (
        <group
            rotation={[0, routable(180), 0]}
            scale={0.1}
            ref={ref}
            onPointerMissed={() => (state.current = null)}

            onPointerDown={(e) => {
                e.stopPropagation();
                setX(e.clientX)
                if (e.object.name === "arrow_down") {
                    setArrowDown(true);
                }
                if (e.object.name === "arrow_up") {
                    setArrowUp(true);
                }

                if (e.object.name === "key_1") {
                    setKeyPosition({
                        key1: true,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: 4, z: -6});
                    setArrowRotate(0);
                }
                if (e.object.name === "key_2") {
                    setKeyPosition({
                        key1: false,
                        key2: true,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: 1.4, z: -6});
                    setArrowRotate(0);
                }
                if (e.object.name === "key_3") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: true,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: -1.4, z: -6});
                    setArrowRotate(0);
                }
                if (e.object.name === "key_4") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: true,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: -4, z: -6});
                    setArrowRotate(0);
                }

                if (e.object.name === "key_5") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: true,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: 4, z: -6});
                    setArrowRotate(90);
                }
                if (e.object.name === "key_6") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: true,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: 1.4, z: -6});
                    setArrowRotate(90);
                }
                if (e.object.name === "key_7") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: true,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: -1.4, z: -6});
                    setArrowRotate(90);
                }

                if (e.object.name === "key_8") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: true,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: -4, z: -6});
                    setArrowRotate(90);
                }

                if (e.object.name === "key_9") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: true,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: 4, z: -6});
                    setArrowRotate(180);
                }
                if (e.object.name === "key_10") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: true,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: 1.4, z: -6});
                    setArrowRotate(180);
                }
                if (e.object.name === "key_11") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: true,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: -1.4, z: -6});
                    setArrowRotate(180);
                }
                if (e.object.name === "key_12") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: true,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: -4, z: -6});
                    setArrowRotate(180);
                }
                if (e.object.name === "key_13") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: true,
                        key14: false,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: 4, z: -6});
                    setArrowRotate(270);
                }

                if (e.object.name === "key_14") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: true,
                        key15: false,
                        key16: false,
                    });
                    setObjectPosition({x: 1.4, z: -6});
                    setArrowRotate(270);
                }

                if (e.object.name === "key_15") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: true,
                        key16: false,
                    });
                    setObjectPosition({x: -1.4, z: -6});
                    setArrowRotate(270);
                }

                if (e.object.name === "key_16") {
                    setKeyPosition({
                        key1: false,
                        key2: false,
                        key3: false,
                        key4: false,
                        key5: false,
                        key6: false,
                        key7: false,
                        key8: false,
                        key9: false,
                        key10: false,
                        key11: false,
                        key12: false,
                        key13: false,
                        key14: false,
                        key15: false,
                        key16: true,
                    });
                    setObjectPosition({x: -4, z: -6});
                    setArrowRotate(270);
                }

                if (e.object.name === "key_open") {
                    setKeyRotateOpen(true);
                }


            }}
            onPointerUp={(e) => {
                e.stopPropagation();

                setKeyRotateOpen(false);
                setArrowDown(false);
                setArrowUp(false);
                if (open) {
                    dispatch({type: "EXIT", preload: true});
                    setExit(true);
                }

            }}
            onClick={(e) => {
                e.stopPropagation();

            }}>

            <mesh geometry={nodes.boxe_1.geometry} position={[0, key_1, 0]} material={materials.key_1} name="key_1" />
            <mesh geometry={nodes.boxe_2.geometry} position={[0, key_2, 0]} material={materials.key_2} name="key_2" />
            <mesh geometry={nodes.boxe_3.geometry} position={[0, key_3, 0]} material={materials.key_3} name="key_3" />
            <mesh geometry={nodes.boxe_4.geometry} position={[0, key_4, 0]} material={materials.key_4} name="key_4" />
            <mesh geometry={nodes.boxe_5.geometry} position={[0, key_8, 0]} material={materials.key_8} name="key_8" />
            <mesh geometry={nodes.boxe_6.geometry} position={[0, key_5, 0]} material={materials.key_5} name="key_5" />
            <mesh geometry={nodes.boxe_7.geometry} position={[0, key_7, 0]} material={materials.key_7} name="key_7" />
            <mesh geometry={nodes.boxe_8.geometry} position={[0, key_6, 0]} material={materials.key_6} name="key_6" />
            <mesh geometry={nodes.boxe_9.geometry} position={[0, key_12, 0]} material={materials.key_12} name="key_12" />
            <mesh geometry={nodes.boxe_10.geometry} position={[0, key_11, 0]} material={materials.key_11}
                  name="key_11"/>
            <mesh geometry={nodes.boxe_11.geometry} position={[0, key_10, 0]} material={materials.key_10}
                  name="key_10" />
            <mesh geometry={nodes.boxe_12.geometry} position={[0, key_9, 0]} material={materials.key_9} name="key_9" />
            <mesh geometry={nodes.boxe_13.geometry} position={[0, key_13, 0]} material={materials.key_13}
                  name="key_13" />
            <mesh geometry={nodes.boxe_14.geometry} position={[0, key_15, 0]} material={materials.key_15}
                  name="key_15" />
            <mesh geometry={nodes.boxe_15.geometry} position={[0, key_14, 0]} material={materials.key_14}
                  name="key_14" />
            <mesh geometry={nodes.boxe_16.geometry} position={[0, key_16, 0]} material={materials.key_16}
                  name="key_16" />
            <mesh geometry={nodes.boxe_17.geometry} material={materials.boxes} name="boxes" />
            <mesh geometry={nodes.boxe_18.geometry} material={materials.up} name="up" />
            <mesh geometry={nodes.boxe_23.geometry} material={materials.line} name="line" />
            <mesh geometry={nodes.boxe_19.geometry} rotation={[0, routable(180), 0]} position={[0, key_exit, 0]} material={materials.exit} name="exit" />

            <mesh geometry={nodes.boxe_20.geometry} position={[0, key_exit, 0]} rotation={[0, routable(key_open), 0]}
                  material={materials.key_open}
                  name="key_open" />
            <mesh geometry={nodes.boxe_21.geometry} position={[0, key_exit, 0]} rotation={[0, routable(key_open), 0]}
                  material={materials.int}
                  name="int" />
            <mesh geometry={nodes.boxe_22.geometry} position={[0, key_exit, 0]} rotation={[0, routable(key_open), 0]}
                  material={materials.rotation}
                  name="rotation" />
            <group rotation={[0, routable(arrowRotate), 0]}>
                <mesh geometry={nodes.arrow.geometry} scale={[1, 0.4, 0.1]}
                      position={[objectPosition.x, -5.5, objectPosition.z]} material={materials.arrow}
                      name="arrow_down" />
                <mesh geometry={nodes.arrow.geometry} rotation={[routable(180), 0, 0]} scale={[1, 0.4, 0.1]}
                      position={[objectPosition.x, 4.5, objectPosition.z]} material={materials.arrow} name="arrow_up" />
            </group>
        </group>
    )
}


