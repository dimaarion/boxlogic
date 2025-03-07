import {configureStore} from '@reduxjs/toolkit';
import Database from "./components/Database";

const db = new Database();


 function gamePause(state = false,action){
     switch (action.type) {
         case "PAUSE":
             return action.preload;
         default:
             return state
     }
 }

 function valueMusic(state = 0.5,action){
     switch (action.type) {
         case "MUSIC":
             db.set((doc)=>{doc.music = action.preload},"sound")
             return action.preload;
         default:
             return state
     }
 }

function gameRestart(state = false,action){
    switch (action.type) {
        case "RESTART":
            return action.preload;
        default:
            return state
    }
}

function gameExitLevel(state = false,action){
    switch (action.type) {
        case "EXIT":
            return action.preload;
        default:
            return state
    }
}

function minute(state = 0,action){
    switch (action.type) {
        case "MINUTE":
            return action.preload;
        default:
            return state
    }
}

function level(state = db.get("level").level,action){
    switch (action.type) {
        case "LEVEL":
            db.set((doc)=>{doc.level = action.preload},"level");
            return db.get("level").level;
        default:
            return state
    }
}

function levelOptions(state = db.get("level",2).level,action){
    switch (action.type) {
        case "LEVEL_OPTIONS":
            if(action.level > state.length){
                db.set((doc)=>{doc.level.push(action.preload)},"level",2);
            }else {
                db.set((doc)=>{doc.level.filter((el, i)=>el.id === action.level).map((el)=>{
                    el.id = action.preload.id
                    el.count = state.length;
                    el.grasses = action.preload.grasses;
                    el.range = action.preload.range
                })},"level",2);
            }
            return db.get("level",2).level;
        default:
            return state
    }
}

function grasses(state = db.get("level").grasses,action){
    switch (action.type) {
        case "GRASSES":
            db.set((doc)=>{doc.grasses = action.preload},"level");
            return db.get("level").grasses;
        default:
            return state
    }
}
function rate(state = 0,action){
    switch (action.type) {
        case "RATE":
            return action.preload;
        default:
            return state
    }
}

function openLevelPanel(state = false,action){
    switch (action.type) {
        case "OPEN_LEVEL_PANEL":
            return action.preload;
        default:
            return state
    }
}

function questCount(state = 0,action){
    switch (action.type) {
        case "QUEST_COUNT":
            return action.preload;
        default:
            return state
    }
}

function questOpen(state = false,action){
    switch (action.type) {
        case "QUEST_OPEN":
            return action.preload;
        default:
            return state
    }
}


export default configureStore({
    reducer: {
        gamePause:gamePause,
        valueMusic:valueMusic,
        gameRestart:gameRestart,
        gameExitLevel:gameExitLevel,
        minute:minute,
        level:level,
        grasses:grasses,
        rate:rate,
        levelOptions:levelOptions,
        openLevelPanel:openLevelPanel,
        questCount:questCount,
        questOpen:questOpen
    },
})
