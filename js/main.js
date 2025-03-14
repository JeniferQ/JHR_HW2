import { Console, PlayStation5 } from "./console.js";

const PS1 = new Console('PlayStation - PS1', '1994', 'history_text', 'feature_text');
PS1.info();
console.log(PS1);

const PS2 = new Console('PlayStation 2 - PS1', '2000', 'history_text', 'feature_text');
PS2.info();
console.log(PS2);

const PSP = new Console('PlayStation Portable - PSP', '2004', 'history_text', 'feature_text');
PSP.info();
console.log(PSP);

const PS3 = new Console('PlayStation 3 - PS1', '2006', 'history_text', 'feature_text');
PS3.info();
console.log(PS3);

const PSVITA = new Console('PlayStation Vita - PS Vita', '2011', 'history_text', 'feature_text');
PSVITA.info();
console.log(PSVITA);

const PS4 = new Console('PlayStation 4 - PS4', '2013', 'history_text', 'feature_text');
PS4.info();
console.log(PS4);

const PS4PRO = new Console('PlayStation 4 Pro - PS4 Pro', '2016', 'history_text', 'feature_text');
PS4PRO.info();
console.log(PS4PRO);

const PS5 = new PlayStation5('PlayStation 5 - PS5', '2020', 'history_text', 'feature_text', 'real-time ray tracing');
PS5.info();
PS5.extra();
console.log(PS5);