const doc = document;
const body = doc.body;
const head = doc.head;
function query(element){
    return doc.querySelector(element);
};
function id(element){
    return doc.getElementById(element);
};
function classes(element){
    return doc.getElementsByClassName(element);
};
function all(element){
    return doc.querySelectorAll(element);
};
const sqrt = Math.sqrt;
const floor = Math.floor;
const ceil = Math.ceil;
const log = console.log;
const warn = console.warn;
const clear = console.clear;
const round = Math.round;
const random = Math.random;
const title = query(".title");
const password = query("input");
const copyButton = query(".copyButton");
const Arrays = ["Random1","Random2","Random3","Random4","Random1","Random2","Random3","Random4","Random5","Random6","Random7","Random8","Random9","Random10","Random11","Random12","Random13","Random14","Random15","Random16","Random17","Random18","Random19","Random20","Random21","Random22","Random23","Random24","Random25","Random26","Random27","Random28","Random29","Random30","Random31","Random32","Random33","Random34","Random35","Random36","Random37","Random38","Random39","Random40","Random41","Random42","Random43","Random44","Random45","Random46","Random47","Random48"];
const things = {
    ["letters"]: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["Letters"]: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
    ["numbers"]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["symbols"]: ["$", "<", ">", "^", "*", "~", "`", "ù", "%", "!", "?", ";", ",", "¤", "£", "_", "-", "/", "&", "#", `"`, `'`, "{", "}", "[", "]", "@", "ç", "(", ")", "!", "§"]
};
password.addEventListener("keydown", dodgeWriting);
function dodgeWriting(e){
    e.preventDefault();
};
const Random = {
    ["Random1"]: things.letters[floor(random() * things.letters.length)],
    ["Random2"]: things.letters[floor(random() * things.letters.length)],
    ["Random3"]: things.letters[floor(random() * things.letters.length)],
    ["Random4"]: things.letters[floor(random() * things.letters.length)],
    ["Random5"]: things.letters[floor(random() * things.letters.length)],
    ["Random6"]: things.letters[floor(random() * things.letters.length)],
    ["Random7"]: things.letters[floor(random() * things.letters.length)],
    ["Random8"]: things.letters[floor(random() * things.letters.length)],
    ["Random9"]: things.letters[floor(random() * things.letters.length)],
    ["Random10"]: things.letters[floor(random() * things.letters.length)],
    ["Random11"]: things.letters[floor(random() * things.letters.length)],
    ["Random12"]: things.letters[floor(random() * things.letters.length)],
    ["Random13"]: things.Letters[floor(random() * things.letters.length)],
    ["Random14"]: things.Letters[floor(random() * things.letters.length)],
    ["Random15"]: things.Letters[floor(random() * things.letters.length)],
    ["Random16"]: things.Letters[floor(random() * things.letters.length)],
    ["Random17"]: things.Letters[floor(random() * things.letters.length)],
    ["Random18"]: things.Letters[floor(random() * things.letters.length)],
    ["Random19"]: things.Letters[floor(random() * things.letters.length)],
    ["Random20"]: things.Letters[floor(random() * things.letters.length)],
    ["Random21"]: things.Letters[floor(random() * things.letters.length)],
    ["Random22"]: things.Letters[floor(random() * things.letters.length)],
    ["Random23"]: things.Letters[floor(random() * things.letters.length)],
    ["Random24"]: things.Letters[floor(random() * things.letters.length)],
    ["Random25"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random26"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random27"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random28"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random29"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random30"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random31"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random32"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random33"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random34"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random35"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random36"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random37"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random38"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random39"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random40"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random41"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random42"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random43"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random44"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random45"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random46"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random47"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random48"]: things.symbols[floor(random() * things.symbols.length)],
};
//password.value = `${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}`;
function generatePassword(){
    password.value = `${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}`;
};
function copyText(x){
    if(!x) return;
    password.select();
    doc.execCommand("copy");
};
copyButton.onclick = () => copyText(password);
