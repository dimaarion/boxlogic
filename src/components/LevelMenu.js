import {numInArr} from "../action";
import {useDispatch, useSelector} from "react-redux";
import Rate from "./Rate";

export default function LevelMenu(){
    const dispatch = useDispatch();
    const levels = numInArr(10);
    const selectLevelOptions = useSelector((state)=>state.levelOptions).concat(levels);


    return <>
    <div className="level-menu">
        <div className="close panel" onClick={()=> dispatch({type:"OPEN_LEVEL_PANEL",preload:false})}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                 className="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
        </div>
        {selectLevelOptions.map((el, i)=><div key={i + "level"} className="level-menu-item">
            {el.id !== 0?<div onClick={()=> {
                dispatch({type: "LEVEL", preload: el.id});

                dispatch({
                    type: "LEVEL_OPTIONS",
                    level: el.id,
                    preload: {id: el.id, count: el.count, grasses: el.grasses, range: el.range}
                })
                dispatch({type: "OPEN_LEVEL_PANEL", preload: false});
                dispatch({type: "EXIT", preload: false});
            }}>
                <div>{el.id}</div>
                <Rate range={el.range}/></div>:<div className="level-lock"><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z" fill="#1C274C"/>
                <path d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C17.8174 10.0089 18.3135 10.022 18.75 10.0546V8C18.75 4.27208 15.7279 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C5.68651 10.022 6.18264 10.0089 6.75 10.0036V8Z" fill="#1C274C"/>
            </svg></div>}


        </div>)}
    </div>
    </>
}