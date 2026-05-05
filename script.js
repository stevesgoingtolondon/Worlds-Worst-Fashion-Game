const gamePrompts = [ "Jury Duty", 
    "A cat cafe.", 
    "Going shopping at his local strip mall", 
    "Visiting his sister at a country jail.", 
    "A concert.", "A date.", 
    "The library.", 
    "continuing his highschool education", 
    "Buying Resident Evil 10 day of release at GameStop.", 
    "Seeing Morbius in theaters", 
    "Going to an arcade.", 
    "Staying at home all day.", 
    "Going on a cute nature walk.", 
    "A really hot day. Global warming is a real issue.", 
    "Lunch with friends.", 
    "Gettiing arrested!", 
    "A serious talk with his family...", 
    "Family dinner!",
    "Running from loan sharks!",
    "Going to his brother's concert!",
    "Watching trash TV alone at 12:30 p.m. on a Friday night!",
    "Going to the TMobile store for a new phone.",
    "The torture labrynth",
    "A funeral!",
    "Going to a car dealership and buying a really expensive car.",
    "His minimum wage job he works just to feel something.",
    "Preforming with his brothers band.",
    "Experincing Ross Dress For Less for the first time."
];
var gamePromts = gamePrompts[Math.floor(Math.random()*items.length)];


const clothingData = {
 //Setting up the shirts 'n pants 'n stuff guhhhhh
  shirt: [
    { name: "Stars' Shirt", img: "starsshirt.png" },
    { name: "Button down Shirt", img: "buttondown.png" }
    { name: "White Boy Of The Year", img: "wboty.png" }
  ],

    pants: [
    { name: "Pajama Pants", img: "pjpants.png" },
    { name: "Short Shorts", img: "shortshorts.png" }
    { name: "Grey Sweat Pants", img: "greysweatpants.png" }
  ],

      shoes: [
    { name: "Bunny Slippers", img: "bunnyslippers.png" },
    { name: "Brown Shoes", img: "brownshoes.png" }
    { name: "Slides", img: "slides.png" }
  ],

       // acessiores: [
    //{ name: "shoes1", img: "shoes1" },
    //{ name: "shoes2", img: "shoes2.png" }
  //],
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
let outfit = {
  shirt: null,
  pants: null,
  shoes: null,
  accessory: null
};

let timer;
let timeLeft = 30;

//Function to start the game and timer
function startGame() {
  clearInterval(timer);
  timeLeft = 30;
  document.getElementById("timer").textContent = timeLeft;
  //Hello prompt
  generatePrompt();
  //Hello Store
  generateStore();
  //Ken appears in his underwear again. poor guy.
  resetOutfit();

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  timer = setInterval(() => {
    timeLeft;
    document.getElementById("timer")

    if (timeLeft <= 0) {
      clearInterval(timer);
      submitOutfit();
    }
  }, 1000);
}

function generatePrompt() {
  const random = prompts[Math.floor(Math.random() * prompts.length)];
//https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
  document.getElementById("prompt").textContent = random;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
function generateStore() {
  const store = document.getElementById("store");
  store.innerHTML = "";
}

function generateStore() {
  const store = document.getElementById("store");
  store.innerHTML = "";

  for (let category in clothingData) {
    for (let item of clothingData[category]) {
      const img = document.createElement("img");
      img.src = item.img;
      img.className = "item";

      img.onclick = () => selectItem(category, item, img);

      store.appendChild(img);
    }
  }




//Each clothing item will be looped over while being loaded with DOM.

//Click listeners on each cothing item to trigger their appearance on the character sprite.

//Creating the "store" itself. It will load images from a folder and create html elements for each.

//Each clothing item will be part the clothing class and part of one of 5 subclasses (Acessories, Pants, Shirts, Shoes) for layering purposes.
