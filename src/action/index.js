import * as THREE from "three";

export async function createAudio(url) {
    // Fetch audio data and create a buffer source
    const res = await fetch(url)
    const buffer = await res.arrayBuffer()
    const context = new (window.AudioContext || window.webkitAudioContext)()
    const source = context.createBufferSource()
    source.buffer = await new Promise((res) => context.decodeAudioData(buffer, res))
    source.loop = true
    // This is why it doesn't run in Safari 🍏🐛. Start has to be called in an onClick event
    // which makes it too awkward for a little demo since you need to load the async data first
    source.start(0)
    // Create gain node and an analyser
    const gain = context.createGain()
    const analyser = context.createAnalyser()
    analyser.fftSize = 64
    source.connect(analyser)
    analyser.connect(gain)
    // The data array receive the audio frequencies
    const data = new Uint8Array(analyser.frequencyBinCount)
    return {
        context,
        source,
        gain,
        data,
        // This function gets called every frame per audio source
        update: () => {
            analyser.getByteFrequencyData(data)
            // Calculate a frequency average
            return (data.avg = data.reduce((prev, cur) => prev + cur / data.length, 0))
        },
    }
}

export function defaultAnimation(ref, t) {
    // ref.current.position.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
}

export function numInArr(num) {
    let a = [];
    for (let i = 1; i < num; i++) {
        a[i] = {id: 0, count: 0, grasses: 0, range: 0};
    }
    return a;
}

export function numArr(num) {
    let a = [];
    for (let i = 0; i < num; i++) {
        a[i] = i;
    }
    return a;
}

export function routable(n) {
    return Math.PI / 180 * n;
}

export function distantCollege(point,min,max) {
        return point > min && point < max;
}

export function velocityInvert(t) {
    return (0.5 + Math.sin(t / 0.2)) / 20;
}

export function calcAngleDegrees(x, y) {
    return (Math.atan2(y, x) * 180) / Math.PI;
}

export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


export function collideRotation (name, actions,n,k) {
    return actions[name].time >= n && actions[name].time <= k;

}

export const handleClick = (e,actions, nameMesh, name, is, set, scale = 1,stop ) => {
    if (is) return; // Если уже кликали — не анимируем снова
      console.log(e.object.name)

    if (e.object.name === nameMesh) {
        if(Array.isArray(stop)){
            stop.forEach((el)=>{
                if(actions[el]){
                    actions[el].stop()
                }
            })
        }else {
            if(actions[stop]){
                actions[stop].stop()
            }
        }

        if (Array.isArray(name)) {
            name.forEach((el) => {
                if(actions[el]){
                    actions[el].timeScale = scale;
                    actions[el].play().paused = false;
                }else {
                    console.log("Ошибка анимации - " + el)
                }

            })
        } else {
            if(actions[name]){
                actions[name].timeScale = scale;
                actions[name].play().paused = false;
            }else {
                console.log("Ошибка анимации - " + name)
            }

        }
        set(true)
    }

}

export function animateStop(e,actions, nameMesh, name, is, set) {
    if (e.object.name === nameMesh) {
        if (Array.isArray(name)) {
            name.forEach((el) => {
                actions[el].play().paused = true;
            })
        } else {
            actions[name].play().paused = true;
        }
        set(false)
    }

}

export function arraysEqual(a, b) {
    return a.length === b.length && a.every((val, index) => val === b[index]);
}

export function onAnimation(actionArr,actions){
    actionArr.forEach((el) => {
        if (actions[el]) {
            actions[el].setLoop(THREE.LoopOnce, 1);
            actions[el].clampWhenFinished = true;
        } else {
            console.log("Ошибка анимации - " + el)
        }

    })
}