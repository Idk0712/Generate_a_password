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
const options = all("option");
const passwordLength = query(".passwordLength");
options.forEach(option => {
    option.innerHTML = option.value;
});
let passwordL = 35;
passwordLength.addEventListener("change", () => {
    passwordL = passwordLength.value;
});
const Randoms = [
"Random1",
"Random2",
"Random3",
"Random4",
"Random1",
"Random2",
"Random3",
"Random4",
"Random5",
"Random6",
"Random7",
"Random8",
"Random9",
"Random10",
"Random11",
"Random12",
"Random13",
"Random14",
"Random15",
"Random16",
"Random17",
"Random18",
"Random19",
"Random20",
"Random21",
"Random22",
"Random23",
"Random24",
"Random25",
"Random26",
"Random27",
"Random28",
"Random29",
"Random30",
"Random31",
"Random32",
"Random33",
"Random34",
"Random35",
"Random36",
"Random37",
"Random38",
"Random39",
"Random40",
"Random41",
"Random42",
"Random43",
"Random44",
"Random45",
"Random46",
"Random47",
"Random48",
"Random49",
"Random50",
"Random51",
"Random52",
"Random53",
"Random54",
"Random55",
"Random56",
"Random57",
"Random58",
"Random59",
"Random60",
"Random61",
"Random62",
"Random63",
"Random64",
"Random65",
"Random66",
"Random67",
"Random68",
"Random69",
"Random70",
"Random71",
"Random72",
"Random73",
"Random74",
"Random75",
"Random76",
"Random77",
"Random78",
"Random79",
"Random80",
"Random81",
"Random82",
"Random83",
"Random84",
"Random85",
"Random86",
"Random87",
"Random88",
"Random89",
"Random90",
"Random91",
"Random92",
"Random93",
"Random94",
"Random95",
"Random96",
"Random97",
"Random98",
"Random99",
"Random100",
"Random101",
"Random102",
"Random103",
"Random104",
"Random105",
"Random106",
"Random107",
"Random108",
"Random109",
"Random110",
"Random111",
"Random112",
"Random113",
"Random114",
"Random115",
"Random116",
"Random117",
"Random118",
"Random119",
"Random120",
"Random121",
"Random122",
"Random123",
"Random124",
"Random125",
"Random126",
"Random127",
"Random128",
"Random129",
"Random130",
"Random131",
"Random132",
"Random133",
"Random134",
"Random135",
"Random136",
"Random137",
"Random138",
"Random139",
"Random140",
"Random141",
"Random142",
"Random143",
"Randoms144"
];
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
    ["Random49"]: things.letters[floor(random() * things.letters.length)],
    ["Random50"]: things.letters[floor(random() * things.letters.length)],
    ["Random51"]: things.letters[floor(random() * things.letters.length)],
    ["Random52"]: things.letters[floor(random() * things.letters.length)],
    ["Random53"]: things.letters[floor(random() * things.letters.length)],
    ["Random54"]: things.letters[floor(random() * things.letters.length)],
    ["Random55"]: things.letters[floor(random() * things.letters.length)],
    ["Random56"]: things.letters[floor(random() * things.letters.length)],
    ["Random57"]: things.letters[floor(random() * things.letters.length)],
    ["Random58"]: things.letters[floor(random() * things.letters.length)],
    ["Random59"]: things.letters[floor(random() * things.letters.length)],
    ["Random60"]: things.letters[floor(random() * things.letters.length)],
    ["Random61"]: things.Letters[floor(random() * things.letters.length)],
    ["Random62"]: things.Letters[floor(random() * things.letters.length)],
    ["Random63"]: things.Letters[floor(random() * things.letters.length)],
    ["Random64"]: things.Letters[floor(random() * things.letters.length)],
    ["Random65"]: things.Letters[floor(random() * things.letters.length)],
    ["Random66"]: things.Letters[floor(random() * things.letters.length)],
    ["Random67"]: things.Letters[floor(random() * things.letters.length)],
    ["Random68"]: things.Letters[floor(random() * things.letters.length)],
    ["Random69"]: things.Letters[floor(random() * things.letters.length)],
    ["Random70"]: things.Letters[floor(random() * things.letters.length)],
    ["Random71"]: things.Letters[floor(random() * things.letters.length)],
    ["Random72"]: things.Letters[floor(random() * things.letters.length)],
    ["Random73"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random74"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random75"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random76"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random77"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random78"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random79"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random80"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random81"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random82"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random83"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random84"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random85"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random86"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random87"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random88"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random89"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random90"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random91"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random92"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random93"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random94"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random95"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random96"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random97"]: things.letters[floor(random() * things.letters.length)],
    ["Random98"]: things.letters[floor(random() * things.letters.length)],
    ["Random99"]: things.letters[floor(random() * things.letters.length)],
    ["Random100"]: things.letters[floor(random() * things.letters.length)],
    ["Random101"]: things.letters[floor(random() * things.letters.length)],
    ["Random102"]: things.letters[floor(random() * things.letters.length)],
    ["Random103"]: things.letters[floor(random() * things.letters.length)],
    ["Random104"]: things.letters[floor(random() * things.letters.length)],
    ["Random105"]: things.letters[floor(random() * things.letters.length)],
    ["Random106"]: things.letters[floor(random() * things.letters.length)],
    ["Random107"]: things.letters[floor(random() * things.letters.length)],
    ["Random108"]: things.letters[floor(random() * things.letters.length)],
    ["Random109"]: things.Letters[floor(random() * things.letters.length)],
    ["Random110"]: things.Letters[floor(random() * things.letters.length)],
    ["Random111"]: things.Letters[floor(random() * things.letters.length)],
    ["Random112"]: things.Letters[floor(random() * things.letters.length)],
    ["Random113"]: things.Letters[floor(random() * things.letters.length)],
    ["Random114"]: things.Letters[floor(random() * things.letters.length)],
    ["Random115"]: things.Letters[floor(random() * things.letters.length)],
    ["Random116"]: things.Letters[floor(random() * things.letters.length)],
    ["Random117"]: things.Letters[floor(random() * things.letters.length)],
    ["Random118"]: things.Letters[floor(random() * things.letters.length)],
    ["Random119"]: things.Letters[floor(random() * things.letters.length)],
    ["Random120"]: things.Letters[floor(random() * things.letters.length)],
    ["Random121"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random122"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random123"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random124"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random125"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random126"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random127"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random128"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random129"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random130"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random131"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random132"]: things.numbers[floor(random() * things.numbers.length)],
    ["Random133"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random134"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random135"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random136"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random137"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random138"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random139"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random140"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random141"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random142"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random143"]: things.symbols[floor(random() * things.symbols.length)],
    ["Random144"]: things.symbols[floor(random() * things.symbols.length)]
};
//password.value = `${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}${Random[`${Arrays[floor(random() * Arrays.length)]}`]}`;
function generatePassword(){    
    if(passwordL == 8) {
        password.maxLength = passwordL;
        password.value = `${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}`;
    }
    if(passwordL == 12) {
        password.maxLength = passwordL;
        password.value = `${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}`;
    }
    if(passwordL == 16) {
        password.maxLength = passwordL;
        password.value = `${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}`;
    }
    if(passwordL == 20) {
        password.maxLength = passwordL;
        password.value = `${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}`;
    }
    if(passwordL == 24) {
        password.maxLength = passwordL;
        password.value = `${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}`;
    }
    if(passwordL == 28) {
        password.maxLength = passwordL;
        password.value = `${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}`;
    }
    if(passwordL == 35) {
        password.maxLength = passwordL;
        password.value = `${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}`;
    }
    if(passwordL == 40) {
        password.maxLength = passwordL;
        password.value = `${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}`;
    }
    if(passwordL == 45) {
        password.maxLength = passwordL;
        password.value = `${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}`;
    }
    if(passwordL == 50) {
        password.maxLength = passwordL;
        password.value = `${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}${Random[`${Randoms[floor(random() * Randoms.length)]}`]}`;
    }
};
function copyText(x){
    if(!x) return;
    password.select();
    doc.execCommand("copy");
};
copyButton.onclick = () => copyText(password);
