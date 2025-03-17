import { initHeader } from "./header.js";
import { initCarousel } from "./carousel.js";
import { Console, upgradedConsole } from "./console.js";

console.log("Javascript file is connected");

const PS1 = new Console(
  "PlayStation",
  "1994",
  "history_text",
  "feature_text",
  "accessory_text",
  ["Final Fantasy VII", "Resident Evil 2", "Crash Bandicoot"]
);
PS1.info();
PS1.gameInfo();
console.log(PS1);

const PS2 = new Console(
  "PlayStation 2",
  "2000",
  "history_text",
  "feature_text",
  "accessory_text",
  ["Grand Theft Auto: San Andreas", "Shadow of the Colossus", "God of War II"]
);
PS2.info();
PS2.gameInfo();
console.log(PS2);

const PS3 = new Console(
  "PlayStation 3",
  "2006",
  "history_text",
  "feature_text",
  "accessory_text",
  ["The Last of Us", "Uncharted 2: Among Thieves", "Red Dead Redemption"]
);
PS3.info();
PS3.gameInfo();
console.log(PS3);

const PS4 = new Console(
  "PlayStation 4",
  "2013",
  "history_text",
  "feature_text",
  "accessory_text",
  ["Red Dead Redemption 2", "Marvel's Spider-Man", "The Last of Us Part II"]
);
PS4.info();
PS4.gameInfo();
console.log(PS4);

const PS5 = new upgradedConsole(
  "PlayStation 5",
  "2020",
  "history_text",
  "feature_text",
  "accessory_text",
  ["God Of War Ragnarok", "Elden Ring", "Hogwarts Legacy"],
  "real-time ray tracing"
);
PS5.info();
PS5.gameInfo();
PS5.extraInfo();
console.log(PS5);

initHeader();
initCarousel();
