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

let imagesDirectory = "./images/";



const clothingData = {
  "shirts": [
    { name: "Stars' Shirt", img: "starsshirt.png" },
    { name: "Button down Shirt", img: "buttondown.png" },
    { name: "White Boy Of The Year", img: "wboty.png" },
    { name: "Pink Off the Shoulder", img: "offtheshoulder.png" }

  ],

  "pants": [
    { name: "Pajama Pants", img: "pjpants.png" },
    { name: "Short Shorts", img: "shortshorts.png" },
    { name: "Grey Sweat Pants", img: "sweatpants.png" },
    { name: "Brown Pants", img: "brownpants.png" },

  ],

  "shoes": [
    { name: "Bunny Slippers", img: "bunnyslippers.png" },
    { name: "Brown Shoes", img: "brownshoes.png" },
    { name: "Slides", img: "slides.png" },    
    { name: "Sneakers", img: "sneakers.png" }

  ],

 // "extra": [
    //{ name: "extra1", img: "extra1.png" },
    //{ name: "extra2", img: "extra2.png" }
  //],
}

let exampleShirts = imagesDirectory + clothingData["shirts"][0].img
let examplePants = imagesDirectory + clothingData["pants"][0].img
let exampleShoes = imagesDirectory + clothingData["shoes"][0].img
let exampleExtra = imagesDirectory + clothingData["extra"][0].img

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
let outfit = {
  shirt: null,
  pants: null,
  shoes: null,
  accessory: null
};

let timer;
let timeLeft = 30;

//Game functions yay

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
  timer = setInterval(function() {
    timeLeft--;

    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      submitOutfit();
    }
  }, 1000);
}

function generatePrompt() {
  const random = gamePrompts[Math.floor(Math.random() * gamePrompts.length)];

  //https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
  document.getElementById("prompt").textContent = random;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
function generateStore() {
  const store = document.getElementById("store");
  store.innerHTML = "";

  for (let category in clothingData) {
    for (let item of clothingData[category]) {
      const img = document.createElement("img");

      img.src = imagesDirectory + item.img;
      img.className = "item";

      img.onclick = function() {
        selectItem(category, item, img);
      };

      store.appendChild(img);
    }
  }
}

function selectItem(category, item, element) {
  outfit[category] = item;

  const layer = document.getElementById(category);

  if (layer) {
    layer.src = imagesDirectory + item.img;
  }
}

function resetOutfit() {
  outfit = {
    shirt: null,
    pants: null,
    shoes: null,
    accessory: null
  };

  document.querySelectorAll(".layer").forEach(function(layer) {
    layer.src = "";
  });
}

function submitOutfit() {
  clearInterval(timer);
  alert("Outfit complete yay!! ");
}

//https://www.w3schools.com/js/js_json_stringify.asp
function saveOutfit() {
  localStorage.setItem("outfit", JSON.stringify(outfit));
  alert("Outfit saved!");
}

//Starting actual Game
startGame();



//Click listeners on each cothing item to trigger their appearance on the character sprite.

//Creating the "store" itself. It will load images from a folder and create html elements for each.

//Each clothing item will be part the clothing class and part of one of 5 subclasses (Extra, Pants, Shirts, Shoes) for layering purposes.
}
//Each clothing item will be part the clothing class and part of one of 5 subclasses (Acessories, Pants, Shirts, Shoes) for layering purposes.
