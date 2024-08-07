import {useProgress} from "@react-three/drei";
import ProgressBar from "./ProgressBar";
import {suspend} from "suspend-react";
import {createAudio} from "../action";



export default function Loader() {

    const {
        gain,
        context
    } = suspend(() => createAudio("./asset/music/child-light-145463.mp3"), ["./asset/music/child-light-145463.mp3"])
    const {progress} = useProgress();




    return <div className="loading"><ProgressBar bgcolor={"#6a1b9a"} completed={progress}/></div>


}