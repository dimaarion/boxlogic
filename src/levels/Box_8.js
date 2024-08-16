import * as THREE from 'three'
import {useRef, useState, useEffect} from "react"
import {useFrame, useLoader} from "@react-three/fiber"
import {useGLTF, useFBX, useTexture} from "@react-three/drei"
import {proxy} from "valtio";
import {Physics, RigidBody} from '@react-three/rapier'
import {useDispatch, useSelector} from "react-redux";
import {defaultAnimation, distantCollege, routable, velocityInvert} from "../action";


export default function Box_8(props) {
    const dispatch = useDispatch();
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectRestart = useSelector((state) => state.restart);

    const state = proxy({
        current: null
    })


    const ref = useRef();
    const alf = useRef();
    const alf2 = useRef();
    const initial = {cube1: false, cube2: false, cube3: false, cube4: false};


    const {nodes, materials} = useGLTF("./asset/obj/box8.glb")
    const [cube, setCube] = useState(initial);
    const [exit, setExit] = useState(false);
    const [open, setOpen] = useState(false);
    const [key_1, setKey_1] = useState(0);
    const [key_2, setKey_2] = useState(0);
    const [key_3, setKey_3] = useState(0);
    const [key_1_1, setKey_1_1] = useState(0);
    const [key_1_2, setKey_1_2] = useState(0);
    const [key_1_3, setKey_1_3] = useState(0);
    const [key_1_4, setKey_1_4] = useState(0);
    const [key_1_5, setKey_1_5] = useState(0);
    const [key_1_6, setKey_1_6] = useState(0);
    const [key_1_7, setKey_1_7] = useState(0);
    const [key_open, setKey_open] = useState(0);
    const [key_alf, setKey_alf] = useState(0);
    const [keyRotateAlf, setKeyRotateAlf] = useState(false);
    const [keyRotate, setKeyRotate] = useState(false);
    const [keyRotate2, setKeyRotate2] = useState(false);
    const [keyRotate3, setKeyRotate3] = useState(false);
    const [keyRotate4, setKeyRotate4] = useState(false);
    const [keyRotate5, setKeyRotate5] = useState(false);
    const [keyRotate6, setKeyRotate6] = useState(false);
    const [keyRotate7, setKeyRotate7] = useState(false);
    const [keyRotateOpen, setKeyRotateOpen] = useState(false);
    const [alfArr, setAlfArr] = useState([]);
    const [open_2, setOpen_2] = useState(false);


    let speed = 0.05;
    let position = 1;
    let speedOpen = 2;
    let speedKeyRotate = 1.5


    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        defaultAnimation(ref, t)

        if (key_1 === 90 && key_2 === 90 && key_3 === 90) {
            ref.current.children.filter((el) => el.name === "open_1").forEach((el) => {
                if (el.position.y < position) {
                    el.position.y += speed;
                }
                dispatch({type:"QUEST_COUNT",preload:1});
            });

            if (distantCollege(key_1_1, 32, 100)
                && distantCollege(key_1_2, 75, 142)
                && distantCollege(key_1_3, 110, 186)
                && distantCollege(key_1_4, 208, 284)
                && distantCollege(key_1_5, 208, 284)
                && distantCollege(key_1_6, 0, 54)
                && distantCollege(key_1_7, 298, 355)
            ) {
                ref.current.children.filter((el) => el.name === "open_2").forEach((el) => {
                    if (el.position.z > -position) {
                        el.position.z -= speed;
                    }

                    setOpen_2(true)
                    dispatch({type:"QUEST_COUNT",preload:2});
                });

            } else {
                if (keyRotateAlf) {
                    alf.current.children.filter((el) => el.name === "alf").forEach((el) => {
                        el.rotation.x = velocityInvert(t);
                    });
                    alf2.current.children.filter((el) => el.name === "alf").forEach((el) => {
                        el.rotation.x = velocityInvert(t);
                    });
                }

                if (keyRotateOpen) {
                    ref.current.children.filter((el) => el.name === "open_key").forEach((el) => {
                        el.rotation.z = velocityInvert(t);
                    });
                }
            }

            if (keyRotate) {
                setKey_1_1(key_1_1 + speedKeyRotate);
                if (key_1_1 > 360) {
                    setKey_1_1(0);
                }
            }

            if (keyRotate2) {
                setKey_1_2(key_1_2 + speedKeyRotate)
                if (key_1_2 > 360) {
                    setKey_1_2(0);
                }
            }

            if (keyRotate3) {
                setKey_1_3(key_1_3 + speedKeyRotate)
                if (key_1_3 > 360) {
                    setKey_1_3(0);
                }
            }

            if (keyRotate4) {
                setKey_1_4(key_1_4 + speedKeyRotate)
                if (key_1_4 > 360) {
                    setKey_1_4(0);
                }
            }

            if (keyRotate5) {
                setKey_1_5(key_1_5 + speedKeyRotate)
                if (key_1_5 > 360) {
                    setKey_1_5(0);
                }
            }

            if (keyRotate6) {
                setKey_1_6(key_1_6 + speedKeyRotate)
                if (key_1_6 > 360) {
                    setKey_1_6(0);
                }
            }

            if (keyRotate7) {
                setKey_1_7(key_1_7 + speedKeyRotate)
                if (key_1_7 > 360) {
                    setKey_1_7(0);
                }
            }


        } else {

            if (keyRotate) {
                ref.current.children.filter((el) => el.name === "key_2_1").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate2) {
                ref.current.children.filter((el) => el.name === "key_2_2").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate3) {
                ref.current.children.filter((el) => el.name === "key_2_3").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate4) {
                ref.current.children.filter((el) => el.name === "key_2_4").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate5) {
                ref.current.children.filter((el) => el.name === "key_2_5").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate6) {
                ref.current.children.filter((el) => el.name === "key_2_6").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotate7) {
                ref.current.children.filter((el) => el.name === "key_2_7").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }
            if (keyRotateAlf) {
                alf.current.children.filter((el) => el.name === "alf").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
                alf2.current.children.filter((el) => el.name === "alf").forEach((el) => {
                    el.rotation.x = velocityInvert(t);
                });
            }

            if (keyRotateOpen) {
                ref.current.children.filter((el) => el.name === "open_key").forEach((el) => {
                    el.rotation.z = velocityInvert(t);
                });
            }


        }

        if (open_2) {
            if (keyRotateAlf) {
                setKey_alf(key_alf - speedOpen)
                if (key_alf < -360) {
                    setKey_alf(0);
                }
            }

            if (keyRotateOpen) {
                setKey_open(key_open + speedOpen)
                if (key_open > 360) {
                    setKey_open(0);
                }
            }
        }


        if (distantCollege(key_open, 180, 270)) {
            setOpen(true);
            ref.current.children.filter((el) => el.name === "exit").forEach((el) => {
                if (el.position.y < 2) {
                    el.position.y += 0.1;
                }
            });
        }


    })

    useEffect(() => {
        if (!selectExit) {
            setKey_1(0);
            setKey_2(0);
            setKey_3(0);
            setKey_1_1(0);
            setKey_1_2(0);
            setKey_1_3(0);
            setKey_1_4(0);
            setKey_1_5(0);
            setKey_1_6(0);
            setKey_1_7(0);
            setKey_alf(0);
            setKey_open(0);
            setAlfArr([]);
            ref.current.children.filter((el) => el.name === "open_2").forEach((el) => {
                el.position.z = 0;
            });
            ref.current.children.filter((el) => el.name === "open_1").forEach((el) => {
                el.position.y = 0;
            });
            setOpen_2(false);
            setOpen(false);
            ref.current.children.filter((el) => el.name === "exit").forEach((el) => {
                el.position.y = 0;
            });
            setExit(false);
        }


    }, [selectExit])


    return (
        <group
            rotation={[0, routable(180), 0]}
            scale={[0.5, 0.5, 0.5]}
            ref={ref}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => {
                e.stopPropagation();

                if (e.object.name === "key_2_1") {
                    setKeyRotate(true);
                }
                if (e.object.name === "key_2_2") {
                    setKeyRotate2(true);
                }
                if (e.object.name === "key_2_3") {
                    setKeyRotate3(true);
                }
                if (e.object.name === "key_2_4") {
                    setKeyRotate4(true);
                }

                if (e.object.name === "key_2_5") {
                    setKeyRotate5(true);
                }
                if (e.object.name === "key_2_6") {
                    setKeyRotate6(true);
                }
                if (e.object.name === "key_2_7") {
                    setKeyRotate7(true);
                }

                if (e.object.name === "open_key") {
                    setKeyRotateOpen(true);
                }

                if (e.object.name === "alf") {
                    setKeyRotateAlf(true);
                }


            }}
            onPointerUp={(e) => {
                e.stopPropagation();
                setKeyRotate7(false);
                setKeyRotate(false);
                setKeyRotate2(false);
                setKeyRotate3(false);
                setKeyRotate4(false);
                setKeyRotate5(false);
                setKeyRotate6(false);
                setKeyRotateOpen(false);
                setKeyRotateAlf(false);
                if (distantCollege(key_alf, -350, -340) && alfArr.length === 0) {
                    setAlfArr([...alfArr, "В"]);
                } else if (distantCollege(key_alf, -320, -310) && alfArr.length === 1) {
                    setAlfArr([...alfArr, "Е"]);
                } else if (distantCollege(key_alf, -180, -155) && alfArr.length === 2) {
                    setAlfArr([...alfArr, "С"]);
                } else if (distantCollege(key_alf, -230, -220) && alfArr.length === 3) {
                    setAlfArr([...alfArr, "Н"]);
                } else if (distantCollege(key_alf, -20, -10) && alfArr.length === 4) {
                    setAlfArr([...alfArr, "А"]);
                }

                if (open) {
                    dispatch({type: "EXIT", preload: true});
                    setExit(true);
                }

            }}
            onClick={(e) => {
                e.stopPropagation();
                //  setObj(e.object);
                if (e.object.name === "key_1_1") {
                    if (key_1 === 360) {
                        setKey_1(90)
                    } else {
                        setKey_1(key_1 + 90)
                    }
                }
                if (e.object.name === "key_1_2") {
                    if (key_2 === 360) {
                        setKey_2(90)
                    } else {
                        setKey_2(key_2 + 90)
                    }
                }
                if (e.object.name === "key_1_3") {
                    if (key_3 === 360) {
                        setKey_3(90)
                    } else {
                        setKey_3(key_3 + 90)
                    }
                }

                if (cube.cube1 && cube.cube2 && cube.cube3 && cube.cube3 && e.object.name === "open") {
                    dispatch({type: "EXIT", preload: true})
                    setCube(initial);

                }
            }}>

            <mesh geometry={nodes.box.geometry} material={materials.box} name="box"/>
            <mesh geometry={nodes.box_1.geometry} material={materials.line_open_1} name="open_1"/>
            <mesh geometry={nodes.box_2.geometry} material={materials.seasons} name="box"/>
            <mesh geometry={nodes.box_3.geometry} material={materials.password} name="open_2"/>
            <mesh geometry={nodes.box_4.geometry} material={materials.open_2} name="open_2"/>
            <mesh geometry={nodes.box_5.geometry} material={materials.open_1} name="open_1"/>

            <mesh geometry={nodes.box_7.geometry} material={materials.line} name="boxf"/>
            <mesh geometry={nodes.box_8.geometry} material={materials.exit} name="exit"/>


            <group position={[2.2, 0.12, -1]} rotation={[routable(key_1), 0, 0]}>
                <mesh geometry={nodes.key.geometry} material={materials.line} name="key_1_1"/>
                <mesh geometry={nodes.key_1.geometry} material={materials.keyRotation} name="key_1_1"/>
            </group>

            <group position={[-1.12, 0.12, -2.5]} rotation={[0, 0, routable(key_2)]}>
                <mesh geometry={nodes.key_2.geometry} material={materials.line} name="key_1_2"/>
                <mesh geometry={nodes.key_2_1.geometry} material={materials.keyRotation} name="key_1_2"/>
            </group>

            <group position={[-2.23, -0.7, -0.15]} rotation={[routable(key_3), 0, 0]}>
                <mesh geometry={nodes.key_3.geometry} material={materials.line} name="key_1_3"/>
                <mesh geometry={nodes.key_3_1.geometry} material={materials.keyRotation} name="key_1_3"/>
            </group>


            <mesh geometry={nodes.key_1_geom.geometry} scale={[0.78, 0.2, 0.78]} position={[1.65, 1.6, -1.7]}
                  rotation={[routable(key_1_1), 0, routable(90)]} material={materials.keyRotation} name="key_2_1"/>
            <mesh geometry={nodes.key_1_geom.geometry} scale={[0.78, 0.2, 0.78]} position={[1.08, 1.6, -1.7]}
                  rotation={[routable(key_1_2), 0, routable(90)]} material={materials.keyRotation} name="key_2_2"/>
            <mesh geometry={nodes.key_1_geom.geometry} scale={[0.78, 0.2, 0.78]} position={[0.55, 1.6, -1.7]}
                  rotation={[routable(key_1_3), 0, routable(90)]} material={materials.keyRotation} name="key_2_3"/>
            <mesh geometry={nodes.key_1_geom.geometry} scale={[0.78, 0.2, 0.78]} position={[-0.02, 1.6, -1.7]}
                  rotation={[routable(key_1_4), 0, routable(90)]} material={materials.keyRotation} name="key_2_4"/>
            <mesh geometry={nodes.key_1_geom.geometry} scale={[0.78, 0.2, 0.78]} position={[-0.56, 1.6, -1.7]}
                  rotation={[routable(key_1_5), 0, routable(90)]} material={materials.keyRotation} name="key_2_5"/>
            <mesh geometry={nodes.key_1_geom.geometry} scale={[0.78, 0.2, 0.78]} position={[-1.11, 1.6, -1.7]}
                  rotation={[routable(key_1_6), 0, routable(90)]} material={materials.keyRotation} name="key_2_6"/>
            <mesh geometry={nodes.key_1_geom.geometry} scale={[0.78, 0.2, 0.78]} position={[-1.65, 1.6, -1.7]}
                  rotation={[routable(key_1_7), 0, routable(90)]} material={materials.keyRotation} name="key_2_7"/>


            <group ref={alf} position={[1.71, 0.1, 1.6]} rotation={[routable(key_alf) + 0.19, 0, 0]}>
                <mesh geometry={nodes.rotate_int_1.geometry} material={materials.rotate} name="alf"/>
                <mesh geometry={nodes.rotate_int_2.geometry} material={materials.alf} name="alf"/>
            </group>
            <group ref={alf2} position={[-1.71, 0.1, 1.6]} scale={[0.04, 0.72, 0.72]}
                   rotation={[routable(key_alf) + 1.05, 0, 0]}>
                <mesh geometry={nodes.rotate_alf_1.geometry} material={materials.inn} name="alf"/>
                <mesh geometry={nodes.rotate_alf_2.geometry} material={materials.box} name="alf"/>
            </group>
            <mesh geometry={nodes.open_key.geometry} position={[0.01, 0.09, 2.2]} rotation={[0, 0, routable(key_open)]}
                  material={materials.keyRotation} name="open_key"/>
        </group>
    )
}


