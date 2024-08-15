import {useDispatch, useSelector} from "react-redux";
import { suspend } from 'suspend-react'
import {createAudio} from "../action";
import {useEffect, useState} from "react";
import Database from "./Database";
import BgPause from "./BgPause";
import useSound from 'use-sound';


export default function Pause(){
    const db = new Database();
    const dispatch = useDispatch();
    const selectPause = useSelector((state)=>state.gamePause);
    const selectExit = useSelector((state)=>state.gameExitLevel);

    const selectOpenLevelPanel = useSelector((state)=>state.openLevelPanel);
    const [focus, setFocus] = useState(false);
    const [play, { stop }] = useSound(
        './asset/music/child-light-145463.mp3',
        { volume: db.get("sound").music }
    );

    const [playActive] = useSound(
        './asset/music/child-light-145463.mp3',
        { volume: 1 }
    );
    const [playOn] = useSound(
        './asset/music/child-light-145463.mp3',
        { volume: 1}
    );
    const [playOff] = useSound(
        './asset/music/child-light-145463.mp3',
        { volume: 1 }
    );


    useEffect(()=>{
        window.addEventListener("click",()=>{
            setFocus(true);
        })

        window.addEventListener("focus",()=>{
            setFocus(true);
        })

        window.addEventListener("blur",()=>{
            setFocus(false);
        })

    },[])


    useEffect(()=>{
        if(!selectPause && !selectExit && focus){
            play()
        }else {
            stop()
        }
    },[selectPause,selectExit,focus])


if(selectExit || selectOpenLevelPanel){
    return <></>
}else {
    return<>
        <div >
            <div className="pause" onClick={()=> {
                dispatch({type: "PAUSE", preload: selectPause !== true})

            }}>
                {selectPause?  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                                    className="bi bi-pause" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path
                        d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                            className="bi bi-pause" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path
                        d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
                </svg>}


            </div>
            {selectPause?<>
                <BgPause/>
                <div className="soundPanel">
                    <div className="bi-volume-up">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                             className="bi bi-volume-up-fill" viewBox="0 0 16 16">
                            <path
                                d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
                            <path
                                d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
                            <path
                                d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
                        </svg>
                    </div>
                    <div className="musicRange">
                        <input type="range" onChange={(e)=>dispatch({type:"MUSIC",preload:e.target.value / 100})}  defaultValue={db.get("sound").music * 100} min={0} max={100} />
                    </div>

                </div>
            </>:""}

        </div>
    </>
}


}

