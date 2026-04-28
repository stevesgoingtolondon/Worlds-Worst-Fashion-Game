# Worlds Worst Fashion Game
**WEB-115 Final Project Proposal**
Student: Kat Morris | Repo: `WEB-115_FinalProject_Morris`

---

## Overview
Ever played those stupid flash games as a kid? Well, this is a parody of them. Useres will be presented with a character and a prompt, and a timer. Users will also recive a random selection of 10 of each clothing items, and must try to match them to the prompt. Local storage will be used to save outfits and clothing layers.


---

## Features
- 30+ Unique clothing sprites that will be randomize each round of the game.
- A timer
- 20+ Random Prompts
- A saving system

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** |Each clothing item will be looped over while being loaded with DOM. |
| **Event Listeners** | Click listeners on eachcothing item to trigger their appearance on the character sprite. |
| **DOM Element Creation** |Creating the "store" itself. It will load images from a folder and create html elements for each. |
| **Classes & Subclasses** | Each clothing item will be part the clothing class and part of one of 5 subclasses (Acessories, Pants, Shirts, Shoes) for layering purposes.  |

---

## DLC — Additional Topics

### JSON & Local Storage
Users can save their favorite outfits with Local Storage.

---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- `localStorage` for tournament persistence
- VS Code + GitHub
