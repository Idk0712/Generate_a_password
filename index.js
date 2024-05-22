const title = query(".title");
const password = query("input");
const copyButton = query(".copyButton");
const options = all("option");
const passwordLength = query(".passwordLength");
const otherChoicesContainer = query(".otherChoicesContainer");
const ChooseAChoice = query(".otherChoicesContainer .chooseAChoice");
const things = {
    ["letters"]: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["Letters"]: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
    ["numbers"]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["symbols"]: ["$", "<", ">", "^", "*", "~", "`", "ù", "%", "!", "?", ";", ",", "¤", "£", "_", "-", "/", "&", "#", `"`, `'`, "{", "}", "[", "]", "@", "ç", "(", ")", "!", "§"]
};
options.forEach(option => {
    option.innerHTML = option.value;
});
let passwordLen = 35;
ChooseAChoice.childNodes.forEach(btn => {
    btn.addEventListener("click", () => {
        const prevText = btn.innerHTML;
        /**
         * @type {HTMLSpanElement}
         */
        const spanF = query(".otherChoicesContainer .otherChoices #first");
        /**
         * @type {HTMLSpanElement}
         */
        const spanS = query(".otherChoicesContainer .otherChoices #second");
        /**
         * @type {HTMLSpanElement}
         */
        const spanT = query(".otherChoicesContainer .otherChoices #third");
        if(btn.innerHTML.includes("#1")){
            const string = spanF.innerHTML.substring(4, spanF.innerHTML.length);
            log(string);
            copy(string);
        }
        else if(btn.innerHTML.includes("#2")){
            const string = spanS.innerHTML.substring(4, spanS.innerHTML.length);
            log(string);
            copy(string);
        }
        else if(btn.innerHTML.includes("#3")){
            const string = spanT.innerHTML.substring(4, spanT.innerHTML.length);
            log(string);
            copy(string);
        };
        btn.innerHTML = "Copied!";
        setTimeout(() => {
            btn.innerHTML = prevText;
        }, 3000);
    });
});
const randoms = {};
const ever = ["letters", "Letters", "numbers", "symbols"];
passwordLength.addEventListener("change", () => {
    passwordLen = passwordLength.value;
});
password.addEventListener("keydown", e => e.preventDefault());
function copyPass(){
    copy(password.value);
};
function generatePassword(){    
    password.maxLength = passwordLen;
    for(let i = 1; i<145;i++){
        let option = "";
        for(let i = 0; i<passwordLen;i++){
            const type = ever[floor(random() * ever.length)];
            option+=things[type][floor(random() * things[type].length)];
        };
        randoms[`Random${i}`] = option;
    }
    log(randoms);
    let passwordGiven = randoms[`Random${floor(random() * 144)}`];
    password.value = passwordGiven;
    if(otherChoicesContainer.style.display === "none"){
        otherChoicesContainer.style.display = "block";
    }
    (() => {
        /**
         * @param {HTMLSpanElement} span 
         */
        function checkLength(span){
            if(passwordLen>=100){
                span.style.fontSize = "8px";
            }
            else if(passwordLen<=28){
                span.style.fontSize = "25px";
            }
            else if(passwordLen>=35 && passwordLen<=50){
                span.style.fontSize = "16px";
            }
        };
        const spanF = query(".otherChoicesContainer .otherChoices #first");
        const spanS = query(".otherChoicesContainer .otherChoices #second");
        const spanT = query(".otherChoicesContainer .otherChoices #third");
        checkLength(spanF);
        checkLength(spanS);
        checkLength(spanT);
        const otherChoices = {};
        const n1 = floor(random() * 144);
        const n2 = floor(random() * 144);
        const n3 = floor(random() * 144);
        otherChoices.n1 = randoms[`Random${n1}`];
        otherChoices.n2 = randoms[`Random${n2}`];
        otherChoices.n3 = randoms[`Random${n3}`];
        if(otherChoices.n1 === passwordGiven){
            otherChoices.n1 = randoms[`Random${floor(random() * 144)}`];
        }
        if(otherChoices.n2 === passwordGiven || otherChoices.n2 === otherChoices.n1){
            otherChoices.n2 = randoms[`Random${floor(random() * 144)}`];
        }
        if(otherChoices.n3 === passwordGiven || otherChoices.n3 === otherChoices.n1 || otherChoices.n3 === otherChoices.n2){
            otherChoices.n3 = randoms[`Random${floor(random() * 144)}`];
        }
        spanF.textContent = "#1: "+otherChoices.n1;
        spanS.textContent = "#2: "+otherChoices.n2;
        spanT.textContent = "#3: "+otherChoices.n3;
    })();
};
