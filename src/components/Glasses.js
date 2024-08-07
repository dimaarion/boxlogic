import {useSelector} from "react-redux";

export default function Glasses() {
    const selectGrasses = useSelector((state)=>state.grasses);
    return <>
        <div className="glasses">
            Очки:{selectGrasses}
        </div>
    </>
}