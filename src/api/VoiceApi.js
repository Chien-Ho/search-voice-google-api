var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
export const recognition = new SpeechRecognition();

export const startRec = () => {
    recognition.start();
}
export const stopRec = () => {
    recognition.stop();
}