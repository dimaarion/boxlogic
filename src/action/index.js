 export  async function createAudio(url) {
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

 export function defaultAnimation(ref,t){
     ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20)
     ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
 }

 export function numInArr(num) {
     let a = [];
     for (let i = 1; i < num; i++) {
         a[i] = {id:0,count:0,grasses:0,range:0};
     }
     return a;
 }