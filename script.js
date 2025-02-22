let speech = new SpeechSynthesisUtterance()

// Code for changing voices


// Code for Text to Speech
document.querySelector('button').addEventListener("click", () => {
      speech.text = document.querySelector("textarea").value
      window.speechSynthesis.speak(speech)
})