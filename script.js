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


const clothingData = {
  shirt: [
    { name: "Stars' Shirt", img: "starsshirt.png" },
    { name: "Button down Shirt", img: "shirt2.png" }
  ],

    pants: [
    { name: "pants1", img: "pants1" },
    { name: "pants2", img: "pants2.png" }
  ],

      shoes: [
    { name: "shoes1", img: "shoes1" },
    { name: "shoes2", img: "shoes2.png" }
  ],

        acessiores: [
    { name: "shoes1", img: "shoes1" },
    { name: "shoes2", img: "shoes2.png" }
  ],
}

var gamePromts = gamePrompts[Math.floor(Math.random()*items.length)];

//Each clothing item will be looped over while being loaded with DOM.

//Click listeners on each cothing item to trigger their appearance on the character sprite.

//Creating the "store" itself. It will load images from a folder and create html elements for each.

//Each clothing item will be part the clothing class and part of one of 5 subclasses (Acessories, Pants, Shirts, Shoes) for layering purposes.