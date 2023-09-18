let speech = new SpeechSynthesisUtterance();

let inputtext = document.getElementById("inputtext");
let btn = document.getElementById("btn");
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  /* by default it will speak in 1 voice */
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
btn.addEventListener("click", () => {
  speech.text = inputtext.value;
  window.speechSynthesis.speak(speech);
});
