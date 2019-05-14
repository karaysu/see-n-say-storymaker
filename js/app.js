// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

var speakButton = document.querySelector("#speak");
document
  .querySelector("#nouns")
  .addEventListener("click", firstNoun);
document
  .querySelector("#verbs")
  .addEventListener("click", firstVerb);
document
  .querySelector("#adjectives")
  .addEventListener("click", firstAdjective);
document
  .querySelector("#secondNouns")
  .addEventListener("click", secondNoun);
document.querySelector("#place").addEventListener("click", firstPlace);


  
var textToSpeak = selectedNoun;

var selectedNoun = '';
var firstVerb = '';
var firstAdjective = '';
var secondNoun = '';
var firstPlace = '';

/* Functions
-------------------------------------------------- */
function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}
function setSentence() {
	textToSpeak = selectedNoun + ' ' + selectedVerb + ' ' +  selectedAdjective + ' ' + secondNoun + ' ' + firstPlace;
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
  secondNoun = anotherNouns[Math.floor(Math.random() * anotherNouns.length)];
}

function firstPlace() {
  firstPlace = placesSettings[Math.floor(Math.random() * placesSettings.length)];
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
  setSentence();
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
