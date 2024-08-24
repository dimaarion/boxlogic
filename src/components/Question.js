import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function Question() {
    const selectLevel = useSelector((state) => state.level);
    const selectOpenLevelPanel = useSelector((state)=>state.openLevelPanel);
    const selectCountQuest = useSelector((state)=>state.questCount);
    const selectPause= useSelector((state)=>state.gamePause);
    const selectExit = useSelector((state) => state.gameExitLevel);
    const selectOpenQuest = useSelector((state) => state.questOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type:"QUEST_COUNT",preload:0});
        dispatch({type:"QUEST_OPEN",preload:false})
    }, [selectLevel])

    useEffect(()=>{
        dispatch({type:"QUEST_OPEN",preload:false})
    },[selectCountQuest])


   let quest = [
       {level: 1, quest: ["Вращайте куб, одна из сторон открывается."]},
       {level: 2, quest: ["Найдите шип трапециевидной формы."]},
       {level: 3, quest: ["Верхняя сторона куба выдвигается."]},
       {level: 4, quest: ["Один из удерживающих шипов выдвигается."]},
       {level: 5, quest: ["Найдите узкие планки по бокам куба."]},
       {level: 6, quest: ["Выдвигающиеся кубы находятся в нижнем ряду."]},
       {level: 7, quest: ["Блоки на крышке нажимаются.","Правый нижний угол, второй ряд.","Правый верхний угол, третий ряд."]},
       {level: 8, quest: ["Соедини линию.","Проследи за геометрическими фигурами начиная с прямоугольника.","Используйте код из выдвижного ящика для получения секретного слова."]},
       {level: 9, quest: ["Найди и соедини метки на крышке.","Используя цифры на крышке выставите символы в нужном порядке."]},
       {level: 10, quest: ["Установите шестерни и запустите механизм.","Найдите все знаки и откройте куб."]},

   ]

    return <>
        {selectOpenQuest && !selectPause && !selectOpenLevelPanel && !selectExit? <div className="question_item">
            {quest.filter((el) => el.level === selectLevel)
                .map((el) => el.quest
                    .filter((q, i) => i === selectCountQuest)
                    .map((q,j) =>
                <div key={j + "quest"}>
                    <h2>Совет {selectCountQuest + 1} / {quest[selectLevel - 1].quest.length}</h2>
                    <p>{q}</p>
                </div>))}
            <div>
                <div className="close panel" onClick={()=>dispatch({type:"QUEST_OPEN",preload:false})}>
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

            if (quest.filter((el) => el.level === selectLevel)[0] && selectCountQuest > quest.filter((el) => el.level === selectLevel)[0].quest.length - 1) {
                dispatch({type:"quest_COUNT",preload:0});
            }
            dispatch({type:"QUEST_OPEN",preload:true})
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