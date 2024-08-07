import {useSelector} from "react-redux";

export default function Level(){
    const selectLevel = useSelector((state)=>state.level);
    return <>
    <div className="level">
        {selectLevel} уровень
    </div>
    </>
}