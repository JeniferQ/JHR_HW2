import { Console, upgradedConsole } from "./console.js";

const PS1 = new Console('PlayStation', '1994', 'history_text', 'feature_text', 'accessory_text', ['Final Fantasy VII', 'Metal Gear Solid', 'Crash Bandicoot']);
PS1.info();
PS1.gameInfo();
console.log(PS1);

const PS2 = new Console('PlayStation 2', '2000', 'history_text', 'feature_text', 'accessory_text', ['Grand Theft Auto', 'Shadow of the Colossums', 'God of War II']);
PS2.info();
PS2.gameInfo();
console.log(PS2);

const PS3 = new Console('PlayStation 3', '2006', 'history_text', 'feature_text', 'accessory_text', ['The Last of Us', 'Uncharted 2: Among Thieves', 'Metal Gear Solid 4: Guns of the Patriots']);
PS3.info();
PS3.gameInfo();
console.log(PS3);


const PS4 = new Console('PlayStation 4', '2013', 'history_text', 'feature_text', 'accessory_text', ['God of War', "Marvel's Spider-Man", 'The Last of Us Part II']);
PS4.info();
PS4.gameInfo();
console.log(PS4);


const PS5 = new upgradedConsole('PlayStation 5', '2020', 'history_text', 'feature_text', 'accessory_text', ["Demon's Souls", 'Ratchet & Clank: Rift Apart', "Marvel’s Spider-Man 2"], 'real-time ray tracing');
PS5.info();
PS5.gameInfo();
PS5.extraInfo();
console.log(PS5);