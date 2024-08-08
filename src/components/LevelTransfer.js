import BgPause from "./BgPause";
import Rate from "./Rate";
import {useDispatch, useSelector} from "react-redux";
import Database from "./Database";
import {useEffect, useState} from "react";
import LevelMenu from "./LevelMenu";
import OpenLevelList from "./OpenLevelList";

export default function LevelTransfer() {
    const db = new Database()
    const dispatch = useDispatch();
    const selectMinute = useSelector((state) => state.minute);
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectGrasses = useSelector((state) => state.grasses);
    const selectRate = useSelector((state) => state.rate);
    const selectLevel = useSelector((state) => state.level);
    const selectLevelOptions = useSelector((state) => state.levelOptions);
    const selectOpenLevelPanel = useSelector((state)=>state.openLevelPanel);
    const grass = [25, 50, 100, 150];
    const [levelPanel, setLevelPanel] = useState(false)


    useEffect(() => {
        if (selectMinute < 1) {
            dispatch({type: "RATE", preload: 3});
        } else if (selectMinute <= 3) {
            dispatch({type: "RATE", preload: 2});
        } else if (selectMinute <= 5) {
            dispatch({type: "RATE", preload: 1});
        } else {
            dispatch({type: "RATE", preload: 0});

        }
        dispatch({type: "GRASSES", preload: selectGrasses + grass[selectRate]});


    }, [selectExit])


    useEffect(() => {
        dispatch({
            type: "LEVEL_OPTIONS",
            level: selectLevel,
            preload: {id: selectLevel, count: selectLevel, grasses: selectGrasses, range: selectRate}
        })
    }, [selectLevel, selectGrasses, selectRate, selectExit])

    if (selectOpenLevelPanel) {
        return <>
            <BgPause/>
            <LevelMenu setLevelPanel={setLevelPanel}/>
        </>
    } else {
        return <>
            <div className="level-transfer">
                <Rate/>
                <div style={styles.glasses}>
                    {grass[selectRate]}
                </div>
                <div style={styles.panel}>
                    <div className="panel" onClick={() => {
                        dispatch({type: "EXIT", preload: false});
                        dispatch({type: "RESTART", preload: true});
                        dispatch({type: "GRASSES", preload: selectGrasses - grass[selectRate]})
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                             className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
                            <path
                                d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
                        </svg>
                    </div>

                    <div className="panel" onClick={() => {
                        dispatch({type: "LEVEL", preload: selectLevel + 1});
                        dispatch({type: "EXIT", preload: false});
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                             className="bi bi-play-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path
                                d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                        </svg>

                    </div>
                </div>
            </div>

        </>
    }
}

const styles = {
    glasses: {
        position: "absolute",
        width: "50px",
        height: "50px",
        margin: "auto",
        right: 0,
        left: -10,
        top: 20,
        bottom: 0,
        fontSize: "30pt",
        color: 'rgb(255, 227, 0)'
    },
    panel: {
        position: "absolute",
        width: "40%",
        height: "90px",
        margin: "auto",
        right: 0,
        left: 0,
        top: 180,
        bottom: 0,
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between"
    },
    restart: {}
}