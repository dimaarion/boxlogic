import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function Timer() {
    const [seconds, setSeconds] = useState(1);
    const [minute, setMinute] = useState(0);
    const [play, setPlay] = useState(false);
    const dispatch = useDispatch();
    const selectPause = useSelector((state) => state.gamePause)
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectLevel = useSelector((state) => state.level);
    const selectOpenLevelPanel = useSelector((state)=>state.openLevelPanel);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!selectPause && !selectExit && !selectOpenLevelPanel) {
                setSeconds(seconds + 1);
                if (seconds > 59) {
                    setSeconds(1);
                    setMinute(minute + 1);
                }
            }

        }, 1000)
        // clearing interval
        return () => clearInterval(timer);
    });

useEffect(()=>{
    if(!selectExit){
        setMinute(0);
        setSeconds(0)
    }
},[selectExit,selectLevel])

    useEffect(() => {
        dispatch({type: "MINUTE", preload: minute})
    }, [minute])

    return <>
        <div className="timer">
            <div className="item">
                <div className="box-timer">
                    <div>{seconds < 10 ? 0 : ""}{seconds}</div>
                    <div>:</div>
                    <div>{minute < 10 ? 0 : ""}{minute}</div>
                </div>

            </div>

        </div>
    </>
}