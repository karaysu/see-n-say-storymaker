// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

var speakButton = document.querySelector("#speak");
document.querySelector("#nouns").addEventListener("click", firstNoun);
document.querySelector("#verbs").addEventListener("click", firstVerb);
document.querySelector("#adjectives").addEventListener("click", firstAdjective);
document.querySelector("#secondNouns").addEventListener("click", secondNoun);
document.querySelector("#place").addEventListener("click", firstPlace);

var reset = document.querySelector("#reset");

document
  .querySelector("#singleButton")
  .addEventListener("click", singleButtonGame);
var result = document.querySelector("#display");

var textToSpeak;
var selectedNoun = "";
var selectedVerb = "";
var selectedAdjective = "";
var selectedSecondNoun = "";
var selectedPlace = "";

/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

function clear(id) {
  var el = document.getElementById(id);

  if (el) {
    el.innerHTML = "";
  }
}

reset.onclick = function() {
  selectedNoun = '';
  selectedVerb = '';
  selectedAdjective = '';
  selectedSecondNoun = '';
  selectedPlace = '';
  textToSpeak = '';
  clear("display");
};

function singleButtonGame() {
  firstNoun();
  firstVerb();
  firstAdjective();
  secondNoun();
  firstPlace();
  setSentence();
  result.textContent = textToSpeak;
  speakNow(textToSpeak);
}
function setSentence() {
  textToSpeak =
    selectedNoun +
    " " +
    selectedVerb +
    " " +
    selectedAdjective +
    " " +
    selectedSecondNoun +
    " " +
    selectedPlace;
}

function firstNoun() {
  selectedNoun = Nouns[Math.floor(Math.random() * Nouns.length)];
}

function firstVerb() {
  selectedVerb = Verbs[Math.floor(Math.random() * Verbs.length)];
}

function firstAdjective() {
  selectedAdjective = Adjectives[Math.floor(Math.random() * Adjectives.length)];
}

function secondNoun() {
  selectedSecondNoun =
    anotherNouns[Math.floor(Math.random() * anotherNouns.length)];
}

function firstPlace() {
  selectedPlace =
    placesSettings[Math.floor(Math.random() * placesSettings.length)];
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
  clear("display");
  setSentence();
  result.textContent = textToSpeak;

  speakNow(textToSpeak);
};

/* Arrays */

var Nouns = [
  "The turkey",
  "Mom",
  "Dad",
  "The dog",
  "My Teacher",
  "The elephant",
  "The cat"
];
var Verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var Adjectives = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat"
];
var anotherNouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var placesSettings = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes"
];
