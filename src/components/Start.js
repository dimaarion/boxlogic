import {useEffect, useState} from "react";

export default function Start(){
    const [point, setPoint] = useState(true);


    useEffect(()=>{
        window.addEventListener("pointerdown",(e)=>{
            setPoint(false);
        })

    },[])

    return <>
        {point?<div className="rotation"/>:""}

    </>
}