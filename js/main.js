import { initHeader } from "./header.js";
import { initCarousel } from "./carousel.js";
import { Console, upgradedConsole } from "./console.js";
import { slider } from "./slider.js";

console.log("Javascript file is connected");

const PS1 = new Console(
    "PlayStation",
    "1994",
    "alias1",
    "description_text1",
    "features_tex1t",
    "accessory_text1",
    ["Final Fantasy VII", "Resident Evil 2", "Crash Bandicoot"]
  );
  
  const PS2 = new Console(
    "PlayStation 2",
    "2000",
    "alias2",
    "description_text2",
    "features_text2",
    "accessory_tex2",
    ["Grand Theft Auto: San Andreas", "Shadow of the Colossus", "God of War II"]
  );
  
  const PS3 = new Console(
    "PlayStation 3",
    "2006",
    "alias3",
    "description_text3",
    "features_text3",
    "accessory_text3",
    ["The Last of Us", "Uncharted 2: Among Thieves", "Red Dead Redemption"]
  );
  
  const PS4 = new Console(
    "PlayStation 4",
    "2013",
    "alias4",
    "description_text4",
    "features_text4",
    "accessory_text4",
    ["Red Dead Redemption 2", "Marvel's Spider-Man", "The Last of Us Part II"]
  );
  
  const PS5 = new upgradedConsole(
    "PlayStation 5",
    "2020",
    "alias5",
    "description_text5",
    "features_text5",
    "accessory_text5",
    ["God Of War Ragnarok", "Elden Ring", "Hogwarts Legacy"],
    "real-time ray tracing"
  );

const consoles = [PS1, PS2, PS3, PS4, PS5];

consoles.forEach(console => {
    console.consoleInfo();
    console.gameInfo();
});

initHeader();
initCarousel();
slider(consoles);
