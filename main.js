const $ = (el)=>document.getElementById(el);
let localVoices =[];
const $selection = $('selection');
const $txt = $('txt');
const $read = $('read');
window.speechSynthesis.addEventListener('voiceschanged',()=>{
    localVoices=speechSynthesis.getVoices();
    localVoices.forEach(voice=>{
        let opt = document.createElement('option');
        opt.value=voice.name;
        opt.textContent=voice.name;
        $selection.append(opt)
    })
})


$read.addEventListener('click',(e)=>{
    const actVoice = localVoices[$selection.selectedIndex];
    const txtToRead = $txt.value;
    const narrate = (txtToRead)=>{
        const utter = new SpeechSynthesisUtterance(txtToRead);
        utter.voice =actVoice;
        speechSynthesis.speak(utter)

    };
    narrate(txtToRead)
})