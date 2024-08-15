import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function Question() {
    const selectLevel = useSelector((state) => state.level);
    const selectOpenLevelPanel = useSelector((state)=>state.openLevelPanel);
    const selectPause= useSelector((state)=>state.gamePause);
    const [quest, setQuest] = useState([
        {level: 1, quest: ["Совет 1", "Совет 2", "Совет 3", "Совет 4"]},
        {level: 2, quest: ["Совет 5", "Совет 6", "Совет 7", "Совет 8"]}]);
    const [countQuest, setCountQuest] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setCountQuest(0);
    }, [selectLevel])


    return <>
        {open && !selectPause && !selectOpenLevelPanel? <div className="question_item">
            {quest.filter((el) => el.level === selectLevel).map((el) => el.quest.filter((q, i) => i === countQuest).map((q,j) =>
                <div key={j + "quest"}>{q}</div>))}
            <div>
                <div className="close panel" onClick={()=>setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                         className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
            </div>
        </div> : ""}
        <div onClick={() => {
            if(open){
                setCountQuest(countQuest + 1);
            }

            if (quest.filter((el) => el.level === selectLevel)[0] && countQuest > quest.filter((el) => el.level === selectLevel)[0].quest.length - 1) {
                setCountQuest(0)
            }
            setOpen(true);
        }} className="question">

            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                 className="bi bi-question-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path
                    d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
            </svg>
        </div>

    </>
}