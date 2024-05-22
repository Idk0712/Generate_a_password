const doc = document,
{head, body} = doc,
{log, warn, error, clear, dir} = console,
{sqrt, floor, ceil, round, random, pow, PI} = Math,
{parse, stringify} = JSON,
objProt = Object.prototype,
defProp = Object.defineProperty,
docEl = doc.documentElement,
defProps = Object.defineProperties,
strProt = defProp(String.prototype, "isString", {
    value: true,
}),
mouse = {
    x: undefined,
    y: undefined
};
/**
 * @param {KeyboardEvent | MouseEvent} event 
 */
function __0138714x(event){log(event)};
/**
 * @param {any} value 
 * @param {number} index 
 */
function __0138715x(value, index){log(value, index)};3
const __whens = {
    "afterbegin": "afterbegin",
    "beforebegin": "beforebegin",
    "afterend": "afterend",
    "beforeend": "beforeend"
};
class getHTML{
    constructor(){
        this.config = {
            Timer: false,
            calc: false,
            keyBoard: false,
        };
        this.timer = this.config.Timer;
        this.calcu = this.config.calc;
        this.keyboard = this.config.keyBoard;
    }
    Timer(){
        // if(!this.#called(this.timer) && !this.#called(this.calcu) && !this.#called(this.keyboard)){
            this.config.Timer = true;
            this.timer = true;
            return {
                css: Timer.getStyle(),
                html: Timer.getHTML()
            }
        // }
        // return null;
    };
    calc(){
        // if(!this.#called(this.calcu) && !this.#called(this.timer) && !this.#called(this.keyboard)){
            this.config.calc = true;
            this.calcu = true;
            return {
                css: `
                .container *{
                    user-select: none;
                    font-family: 'Poppins', sans-serif;
                    box-sizing: border-box;
                }
                .container{
                    width: 380px;
                    height: 560px;
                    background: #e3f9ff;
                    position: absolute;
                    left: 38%;
                    top: 12%;
                }
                .container .calculator form span input{
                    user-select: none;
                }
                .container .calculator form div input{
                    transition: all 0.150s;
                }
                .container .calculator form div input:hover{
                    background: blue;
                }
                .container .calculator form div input:active{
                    background: darkblue;
                }
                .container .calculator{
                    background: #3a4452;
                    padding: 20px;
                    border-radius: 10px;
                }
                .container .calculator form input{
                    border: 0;
                    outline: 0;
                    width: 60px;
                    height: 60px;
                    border-radius: 10px;
                    box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.1),5px 5px 15px rgba(0, 0, 0, 0.2);
                    background: transparent;
                    font-size: 20px;
                    color: #fff;
                    cursor: pointer;
                    margin: 10px;
                }
                .container .calculator form input[type="text"]{
                    cursor: default;
                }
                .container .calculator form .display{
                    display: flex;
                    justify-content: flex-end;
                    margin: 20px 0;
                }
                .container .calculator form .display input{
                    text-align: right;
                    flex: 1;
                    /*font-size: 45px;*/
                    box-shadow: none;
                }
                .container .calculator form input.equal{
                    width: 145px;
                }
                .container .calculator form input.operator{
                    color: #33ffd8;
                }
                .container .removeBtn{
                    background-color: red;
                    width: 20px;
                    border-radius: 30px;
                    text-align: center;
                    cursor: pointer;
                    position: absolute;
                    top: -5px;
                    right: -5px;
                }
                `,
                html: `
                <div class="container" style="${style}">
                    <div class="calculator">
                        <form>
                            <span class="display">
                                <input type="text">
                            </span>
                            <div>
                                <input type="button" value="AC" class="operator">
                                <input type="button" value="DE" class="operator">
                                <input type="button" value="." class="operator">
                                <input type="button" value="/" class="operator">
                            </div>
                            <div>
                                <input type="button" value="7">
                                <input type="button" value="8">
                                <input type="button" value="9">
                                <input type="button" value="*" class="operator">
                            </div>
                            <div>
                                <input type="button" value="4">
                                <input type="button" value="5">
                                <input type="button" value="6">
                                <input type="button" value="-" class="operator">
                            </div>
                            <div>
                                <input type="button" value="1">
                                <input type="button" value="2">
                                <input type="button" value="3">
                                <input type="button" value="+" class="operator">
                            </div>
                            <div>
                                <input type="button" value="00">
                                <input type="button" value="0">
                                <input type="button" value="=" class="equal operator">
                            </div>
                        </form>
                    </div>
                    <div class="removeBtn">
                        <span>X</span>
                    </div>
                </div>
                `,
                script: ``,
            }
        // }
        // return null;
    };
    keyBoard(type, keyboardCss){
        // if(!this.#called(this.timer) && !this.#called(this.keyboard) && !this.#called(this.calcu)){
            this.config.keyBoard = true;
            this.keyboard = true;
            switch(type){
            case "azerty":
                return {
                    html: `
                    <div id="keymap" class="staggered" style="${keyboardCss}">
                    <div class="row r2">
                    <div></div>
                    <div class="keymapKey">
                        <span class="letter number">1</span>
                        <span class="sideChar">&</span>
                    </div><div class="keymapKey">
                        <span class="letter number">2</span>
                        <span class="sideChar">é</span>
                    </div><div class="keymapKey">
                        <span class="letter number">3</span>
                        <span class="sideChar">"</span>
                    </div><div class="keymapKey">
                        <span class="letter number">4</span>
                        <span class="sideChar">'</span>
                    </div><div class="keymapKey">
                        <span class="letter number">5</span>
                        <span class="sideChar">(</span>
                    </div><div class="keymapKey">
                        <span class="letter number">6</span>
                        <span class="sideChar">-</span>
                    </div><div class="keymapKey">
                        <span class="letter number">7</span>
                        <span class="sideChar">è</span>
                    </div><div class="keymapKey">
                        <span class="letter number">8</span>
                        <span class="sideChar">_</span>
                    </div><div class="keymapKey">
                        <span class="letter number">9</span>
                        <span class="sideChar">ç</span>
                    </div><div class="keymapKey">
                        <span class="letter number">0</span>
                        <span class="sideChar">à</span>
                    </div><div class="keymapKey">
                        <span class="letter number">°</span>
                        <span class="sideChar">)</span>
                    </div><div class="keymapKey">
                        <span class="letter number">+</span>
                        <span class="sideChar">=</span>
                    </div></div>
                    <div class="row r2">
                    <div></div>
                    <div class="keymapKey">
                        <span class="letter">a</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">z</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">e</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">r</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">t</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">y</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">u</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">i</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">o</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">p</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">^</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">$</span>
                        
                    </div></div><div class="row r3"><div></div><div class="keymapKey">
                        <span class="letter">q</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">s</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">d</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">f</span>
                    </div><div class="keymapKey">
                        <span class="letter">g</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">h</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">j</span>
                    </div><div class="keymapKey">
                        <span class="letter">k</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">l</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">m</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">%</span>
                        
                    </div></div><div class="row r4"><div></div><div></div><div class="keymapKey">
                        <span class="letter">w</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">x</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">c</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">v</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">b</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">n</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">?</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">.</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">:</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">!</span>
                        
                    </div></div><div class="row r5"><div></div><div class="keymapKey keySpace">
                    <div class="letter">Space</div>
                    </div></div>
                    `,
                    css: `
                    .keymapKey {
                        display: inline-block;
                        border: 1px solid #000;
                        padding: 10px;
                        margin: 5px;
                        background-color: #fff;
                        pointer-events: none;
                    }
                    
                    .letter {
                        font-size: 20px;
                    }
                    /* Additional styles for the container */
                    #keymap {
                        text-align: center;
                        width: 550px;
                        height: 230px;
                    }
                    `,
                    script: `
                    
                    `
                }
            case "qwerty":
                return {

                }
            }
        // }
    };
};
const _0sx = new getHTML();
/** 
 * @param {MediaRecorder} rec
*/
const startTheRecording = async (rec, chunks, element) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    rec = new MediaRecorder(stream);
    rec.start();
    rec.ondataavailable = e => {
        chunks.push(e.data);
        const blob = new Blob(chunks, {"type": "video/webm"});
        element = blob;
    };
};
const stopTheRecording = rec => {
    if(!rec) return;
    rec.stop();
};
const JSClasses = () => {
    const cmases = [
        { element: Array },
        { element: Boolean },
        { element: Error },
        { element: Function },
        { element: Number },
        { element: RegExp },
        { element: String },
        { element: Map },
        { element: Set },
        { element: WeakMap },
        { element: WeakSet },
        { element: Promise },
        { element: Proxy },
        { element: ArrayBuffer },
        { element: DataView },
        { element: Float32Array },
        { element: Float64Array },
        { element: Int8Array },
        { element: Int16Array },
        { element: Int32Array },
        { element: Uint8Array },
        { element: Uint16Array },
        { element: Uint32Array },
        { element: BigInt64Array },
        { element: BigUint64Array },
        { element: Worker },
        { element: Blob },
        { element: File },
        { element: FileReader },
        { element: FormData },
        { element: XMLHttpRequest },
        { element: WebSocket },
        { element: MutationObserver },
        { element: IntersectionObserver },
        { element: ResizeObserver },
        { element: Performance },
        { element: History },
        { element: Navigator },
        { element: Location },
        { element: Screen },
        { element: Window },
        { element: Document },
        { element: Element },
        { element: Node },
        { element: Event },
        { element: CustomEvent },
        { element: MouseEvent },
        { element: KeyboardEvent },
        { element: TouchEvent },
        { element: PointerEvent },
        { element: DragEvent },
        { element: FocusEvent },
        { element: InputEvent },
        { element: WheelEvent },
        { element: AnimationEvent },
        { element: TransitionEvent },
        { element: MessageEvent },
        { element: ErrorEvent },
        { element: HashChangeEvent },
        { element: PopStateEvent },
        { element: StorageEvent },
        { element: PageTransitionEvent },
        { element: ProgressEvent },
        { element: SpeechSynthesisEvent },
        { element: MediaStreamTrackEvent },
        { element: DeviceMotionEvent },
        { element: DeviceOrientationEvent },
        { element: GamepadEvent },
        { element: CompositionEvent },
        { element: ClipboardEvent },
        { element: BeforeUnloadEvent },
        { element: ServiceWorkerRegistration },
        { element: ServiceWorkerContainer },
        { element: Cache },
        { element: CacheStorage },
        { element: BroadcastChannel },
        { element: MessageChannel },
        { element: MessagePort },
        { element: Notification },
        { element: PaymentRequest },
        { element: PaymentResponse },
        { element: PaymentMethodChangeEvent },
        { element: PaymentRequestUpdateEvent },
    ];
    cmases.forEach((cmas, i) => {
        log(`class ${i + 1}: ${cmas.element} -> {\n${cmas.element.prototype}\n}`);
    });
};
/**
 * 
 * @param {HTMLDivElement} div 
 * @param {[string]} html 
 * @param {Function} func 
 */
function newContextM(div, html, func){if(!div) {return;}html.forEach(el => {div.innerHTML+=el;});div.style.position = "absolute";div.style.left = "0";div.style.top = "0";div.style.display = "none";if(!func) {}else{func(div, html).addEventListener("contextmenu", e => {e.preventDefault();div.style.top = `${mouse.y}px`;div.style.left = `${mouse.x}px`;switch(div.style.display){case "block":div.style.display = "none";break;case "none":div.style.display = "block";break;};});function f(){all("*").forEach(el => {el.addEventListener("click", e => {if(e.target !== div){div.style.display = "none";}});});};f();}};
/** 
 * @param {HTMLElement} element
 * @param {keyof WindowEventMap} event
 * @param {__0138714x} listener
 * @returns {Function}
*/
function addListener(element, event, listener){element.addEventListener(event, listener);if(!element.listeners){const s=event,i = 1;element.listeners = {[`${s}_old_index`]: null,[`${s}_${i}`]: {listener,__index: i}};}else{const s = event;let i;if(!element.listeners[`${s}_1`]){i = 1;element.listeners[`${s}_old_index`] = null;element.listeners[`${s}_${i}`] = {listener,__index: i};}else{if(!element.listeners[`${s}_old_index`]){element.listeners[`${s}_old_index`] = 1;i = 2;element.listeners[`${s}_${i}`] = {listener,__index: i}}else{i = element.listeners[`${s}_old_index`]+2;element.listeners[`${s}_old_index`]+=1;element.listeners[`${s}_${i}`] = {listener,__index: i};}}};return listener;};
/**
 * @param {HTMLElement} element 
 * @param {keyof WindowEventMap} event 
 * @param {Function} listener 
 */
function removeListener(element, event, listener){
    element.removeEventListener(event, listener);
};
addListener(window, "mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    //log('x: '+mouse.x+' y: '+mouse.y);
});
/** 
 * @param {String} element Search an element with the id 
 * @returns {HTMLElement}
 * */
function id(element){
    return doc.getElementById(element);
};
/** 
 * @param  {String} element Search elements with their class
 * 
 * */
function _class(element){
    return doc.getElementsByClassName(element);
};
/** 
 * @param {keyof HTMLElementTagNameMap} element Search an element with the css selector
 * @returns {HTMLFormElement | HTMLHtmlElement | HTMLHeadElement | HTMLLabelElement |HTMLIFrameElement | HTMLAudioElement | HTMLVideoElement |HTMLMediaElement | HTMLElement | HTMLDivElement | HTMLInputElement | HTMLTextAreaElement}
 * */
function query(element){
    return doc.querySelector(element);
};
/** 
 * @param {keyof HTMLElementTagNameMap} element Search elements with the css selector
 * */
function all(element){
    return doc.querySelectorAll(element);
};
/** @param {HTMLElement} element Use the remove function of the HTML element*/
function remove(element){
    element.remove();
};
/** @param {keyof HTMLElementTagNameMap} element Create an html element with the param*/
function create(element){
    return doc.createElement(element)
};
/** 
 * @param {[ {"func": (index: Number) => {"code to execute + index as a parameter or the value in an Array"}, "index": Number, "value": Array | Nodelist, "type": "lessThan" | "biggerThan" | "greaterThan" | "of"}]} objs 
 * @returns {number} for the funcs in the objects
*/
function forLoop(/*type, value, func1, func2*/...objs){
    objs.forEach(obj => {
        const less = "lessThan";
        const index = obj.index || obj.i;
        const func = obj.func || obj.function;
        const value = obj.value || obj.val;
        let temp;
        switch(obj.type){
            case less.toLowerCase():
            case less:
            case less.toUpperCase():
            case "LessThan":
            case "LEssThan":
            case "LESsThan":
            case "LESSThan":
            case "LESSTHan":
            case "LESSTHAn":
                for(let i = index; i < value; i++){
                    func(i, temp);
                    if(temp === "break") break;
                    else if(temp === "continue") continue;
                }
                break;
            case "biggerThan":
            case "greaterThan":
                for(let i = index; i > value; i--){
                    func(i, temp);
                    if(temp === "break") break;
                    else if(temp === "continue") continue;
                }
                break;
            case "of":
            case "OF":
            case "oF":
            case "Of":
                try{
                    for(const i of value){
                        func(i);
                    }
                }
                catch(e){}
                break;
        }
    });
};
/**
 * 
 * @param {Array} array 
 * @param  {...any} values 
 */
function push(arr, ...values){
    forLoop({
        type: "of",
        val: values,
        func: val => {
            arr.push(val);
        }
    });
};
/**
 * @param {{"link": string, "audio": Audio, class: string, toggleKey: string}} music 
 */
function playMusic(music){const a = query("."+music.class);doc.addEventListener("keydown", e => {if(e.code === music.toggleKey){switch(a.paused){case true:a.play();break;case false:a.pause();a.currentTime = 0;break;}}});};
/**
 * 
 * @param {String} element
 */
function copy(element){const i = create("input");body.append(i);i.style.color = "black";i.value = element;i.select();doc.execCommand("copy");i.remove();};
/*
function newTime(element, style){
    const timer = create("div");
    timer.style = `widh: 380px; ${style}`;
    updateTimer();
    setInterval(updateTimer, 1);
    function updateTimer(){
        const date = new Date();
        timer.innerHTML = formatTime(date);
        function formatTime(date){
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let milliseconds = date.getMilliseconds();
            let amOrPm1 = hours >= 12 ? "pm" : "am";
            hours = (hours % 12) || 12;
            hours = formatZeroes(hours);
            minutes = formatZeroes(minutes);
            seconds = formatZeroes(seconds);
            milliseconds = formatZeroes(milliseconds);
            milliseconds = MilliSeconds(milliseconds);
            return `${hours}:${minutes}:${seconds}:${milliseconds} ${amOrPm1}`;
        };
        function formatZeroes(time){
            time = time.toString();
            return time.length < 2 ? "0" + time : time;
        };
        function MilliSeconds(ms){
            return 2 >= ms.length ? ms + 0 : ms;
        };
    };
    element.append(timer);
    return timer;
};
*/
function logDate(e = true, f = () => void 0){
    setInterval(() => {
        const date = new Date();
        log(date);
    }, 1000);
    setInterval(() => {
        if(e){
            f();
        }
    }, 0);
};
/**
* @param {HTMLElement} element
* @param {__0138715x} func Function doesn't need the index parameter
*/
function each(element, func){
    element.forEach(func);
};
/**
 * 
 * @param {HTMLElement} element 
 * @param {String} htmlIn 
 */
function html(element, htmlIn){
    element.innerHTML = htmlIn;
};
/**
 * 
 * @param {String} element 
 * @param {HTMLElement} insertElement 
 * @param {keyof __whens} when 
 */
function insert(element, insertElement, when){const h = `<${element} class="${element}" id="${element}"></${element}>`;insertElement.insertAdjacentHTML(when, h);};
/*
async function takeScreenShot(){
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
};
*/
/**
 * 
 * @param {keyof {
 *     video: "video",
 *     image: "image"
 * }} type 
 * @param {Array} f 
 * @param {HTMLElement} element 
 */
function readFile(type, f, element){
    switch(type){
        case "video":
        case "image":
            const fileReader = new FileReader();
            fileReader.onload = e => {
                element.setAttribute("src", e.target.result);
            };
            fileReader.readAsDataURL(f.files[0]);
            break;
    }
};
function rainbowC(){const c = "linear-gradient(45deg,#005446,#39003f,#590000),linear-gradient(45deg,#007a65,#7f0e7f,#ff8983);",cs = create("style");head.append(cs);cs.setAttribute("generated", true);cs.innerHTML = `.rainbow-color{background: ${c};}`;return 'rainbow-color';};
const rainbowColor = rainbowC();
const __newKeyboardEvents = {
    azerty: "azerty",
    qwerty: "qwerty"
};
/**
 * @param {keyof __newKeyboardEvents} lang
 * @param {HTMLElement} element
 * @param {keyof __whens} when
 * @param {string} keyboardCss
 * @param {"WASD" | "Fullkeyboard" | "Arrowkeys"} type
 * @returns {HTMLDivElement}
 * */
function newKeyboard(lang, element, when, keyboardCss, type, func = () => void 0){
    switch(type){
        case "WASD":
            return keyboard
        case "Arrow keys":
            return keyboard
        case "Fullkeyboard":
            switch(lang){
                case "qwerty":
                    const keyBoard1 = `
                    <div id="keymap" class="staggered" style="${keyboardCss}">
                        <div class="row r2">
                            <div class="keymapKey">
                                <span class="letter">q</span>
                            </div>
                            <div class="keymapKey">
                                <span class="letter">w</span>
                            </div>
                            <div class="keymapKey">
                                <span class="letter">e</span>
                            </div>
                            <div class="keymapKey">
                                <span class="letter">r</span>
                            </div>
                            <div class="keymapKey">
                                <span class="letter">t</span>
                            </div>
                            <div class="keymapKey">
                                <span class="letter">y</span>
                            </div>
                            <div class="keymapKey">
                                <span class="letter">u</span>
                            </div>
                            <div class="keymapKey">
                                <span class="letter">i</span>
                            </div>
                            <div class="keymapKey">
                                <span class="letter">o</span>
                            </div>
                            <div class="keymapKey">
                                <span class="letter">p</span>
                            </div>
                            <div class="keymapKey">
                                <span class="letter">[</span>
                            </div>
                            <div class="keymapKey">
                                <span class="letter">]</span>
                            </div>
                    </div>
                    <div class="row r3"><div></div><div class="keymapKey">
                        <span class="letter">a</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">s</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">d</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">f</span>
                    </div><div class="keymapKey">
                        <span class="letter">g</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">h</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">j</span>
                    </div><div class="keymapKey">
                        <span class="letter">k</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">l</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">;</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">'</span>
                        
                    </div></div><div class="row r4"><div></div><div></div><div class="keymapKey">
                        <span class="letter">z</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">x</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">c</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">v</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">b</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">n</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">m</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">,</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">.</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">/</span>
                        
                    </div></div><div class="row r5"><div></div><div class="keymapKey keySpace">
                    <div class="letter">Space</div>
                    </div></div>
                    `;
                    const css1 = create("style");
                    css1.innerHTML = `
                    /* CSS code to style the keyboard */
                    .keymapKey {
                        display: inline-block;
                        border: 1px solid #000;
                        padding: 10px;
                        margin: 5px;
                        background-color: #fff;
                        pointer-events: none;
                    }
                    
                    .letter {
                        font-size: 20px;
                    }
                    /* Additional styles for the container */
                    #keymap {
                        text-align: center;
                        width: 550px;
                        height: 230px;
                    }
                    `;
                    head.append(css1);
                    element.insertAdjacentHTML(when, keyBoard1);
                    const keymap1 = id("keymap");
                    const letters1 = all(".letter");
                    letters1.forEach(letter => {
                        letter.id = letter.innerHTML;
                        const key = letter.id;
                        if(letter.id === "Space"){
                            letter.classList.add("SPACE");
                            letter.innerHTML = "SPACE";
                            doc.addEventListener("keydown", e => {
                                if(e.key === " "){
                                    letter.parentElement.style.backgroundColor = "black";
                                    letter.parentElement.style.color = "white";
                                }
                            });
                            doc.addEventListener("keyup", e => {
                                if(e.key === " "){
                                    letter.parentElement.style.backgroundColor = "white";
                                    letter.parentElement.style.color = "black";
                                }
                            });
                            func(letter);
                            return;
                        }
                        doc.addEventListener("keydown", e => {
                            if(e.key === key || e.key === key.toUpperCase()){
                                letter.parentElement.style.backgroundColor = "black";
                                letter.parentElement.style.color = "white";
                            }
                        });
                        doc.addEventListener("keyup", e => {
                            if(e.key === key || e.key === key.toUpperCase()){
                                letter.parentElement.style.backgroundColor = "white";
                                letter.parentElement.style.color = "black";
                            }
                        });
                        letter.innerHTML = letter.id.toUpperCase();
                        func(letter);
                    });
                    all(".sideChar").forEach(char => {
                        char.style.transition = "0.125s";
                        char.style.backgroundColor = "white";
                        char.style.color = "black";
                        const key = char.innerText;
                        doc.addEventListener("keydown", e => {
                            if(e.key === key || e.key === key.toLowerCase()){
                                char.style.backgroundColor = "black";
                                char.style.color = "white";
                            }
                        });
                        doc.addEventListener("keyup", e => {
                            if(e.key === key || e.key === key.toLowerCase()){
                                char.style.backgroundColor = "white";
                                char.style.color = "black";
                            }
                        });
                    });
                    return keymap1;
                case "azerty":
                    const keyBoard2 = `
                    <div id="keymap" class="staggered" style="${keyboardCss}">
                    <div class="row r2">
                    <div></div>
                    <div class="keymapKey">
                        <span class="letter number">1</span>
                        <span class="sideChar">&</span>
                    </div><div class="keymapKey">
                        <span class="letter number">2</span>
                        <span class="sideChar">é</span>
                    </div><div class="keymapKey">
                        <span class="letter number">3</span>
                        <span class="sideChar">"</span>
                    </div><div class="keymapKey">
                        <span class="letter number">4</span>
                        <span class="sideChar">'</span>
                    </div><div class="keymapKey">
                        <span class="letter number">5</span>
                        <span class="sideChar">(</span>
                    </div><div class="keymapKey">
                        <span class="letter number">6</span>
                        <span class="sideChar">-</span>
                    </div><div class="keymapKey">
                        <span class="letter number">7</span>
                        <span class="sideChar">è</span>
                    </div><div class="keymapKey">
                        <span class="letter number">8</span>
                        <span class="sideChar">_</span>
                    </div><div class="keymapKey">
                        <span class="letter number">9</span>
                        <span class="sideChar">ç</span>
                    </div><div class="keymapKey">
                        <span class="letter number">0</span>
                        <span class="sideChar">à</span>
                    </div><div class="keymapKey">
                        <span class="letter number">°</span>
                        <span class="sideChar">)</span>
                    </div><div class="keymapKey">
                        <span class="letter number">+</span>
                        <span class="sideChar">=</span>
                    </div></div>
                    <div class="row r2">
                    <div></div>
                    <div class="keymapKey">
                        <span class="letter">a</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">z</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">e</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">r</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">t</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">y</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">u</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">i</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">o</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">p</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">^</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">$</span>
                        
                    </div></div><div class="row r3"><div></div><div class="keymapKey">
                        <span class="letter">q</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">s</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">d</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">f</span>
                    </div><div class="keymapKey">
                        <span class="letter">g</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">h</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">j</span>
                    </div><div class="keymapKey">
                        <span class="letter">k</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">l</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">m</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">%</span>
                        
                    </div></div><div class="row r4"><div></div><div></div><div class="keymapKey">
                        <span class="letter">w</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">x</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">c</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">v</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">b</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">n</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">?</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">.</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">:</span>
                        
                    </div><div class="keymapKey">
                        <span class="letter">!</span>
                        
                    </div></div><div class="row r5"><div></div><div class="keymapKey keySpace">
                    <div class="letter">Space</div>
                    </div></div>
                    `;
                    const css2 = create("style");
                    css2.innerHTML = `
                    /* CSS code to style the keyboard */
                    #keymap .keymapKey {
                        display: inline-block;
                        border: 1px solid #000;
                        padding: 10px;
                        margin: 5px;
                        background-color: #fff;
                        pointer-events: none;
                    }
                    #keymap .letter {
                        font-size: 20px;
                    }
                    /* Additional styles for the container */
                    #keymap {
                        text-align: center;
                        width: 630px;
                        height: 280px;
                    }
                    #keymap .sideChar{
                        transition: 0.125s;
                        background-color: white;
                        color: black;
                    }
                    `;
                    head.append(css2);
                    element.insertAdjacentHTML(when, keyBoard2);
                    const keymap2 = id("keymap");
                    const letters2 = all(".letter");
                    letters2.forEach(letter => {
                        letter.id = letter.innerText;
                        const key = letter.id;
                        if(letter.id === "Space"){
                            letter.classList.add("SPACE");
                            letter.innerHTML = "SPACE";
                            doc.addEventListener("keydown", e => {
                                if(e.key === " "){
                                    letter.parentElement.style.backgroundColor = "black";
                                    letter.parentElement.style.color = "white";
                                }
                            });
                            doc.addEventListener("keyup", e => {
                                if(e.key === " "){
                                    letter.parentElement.style.backgroundColor = "white";
                                    letter.parentElement.style.color = "black";
                                }
                            });
                            func(letter);
                            return;
                        }
                        doc.addEventListener("keydown", e => {
                            if(e.key === key || e.key === key.toUpperCase()){
                                letter.parentElement.style.backgroundColor = "black";
                                letter.parentElement.style.color = "white";
                            }
                        });
                        doc.addEventListener("keyup", e => {
                            if(e.key === key || e.key === key.toUpperCase()){
                                letter.parentElement.style.backgroundColor = "white";
                                letter.parentElement.style.color = "black";
                            }
                        });
                        letter.innerHTML = letter.id.toUpperCase();
                        func(letter);
                    });
                    all(".sideChar").forEach(char => {
                        const key = char.innerText;
                        doc.addEventListener("keydown", e => {
                            if(e.key === key || e.key === key.toLowerCase()){
                                char.style.backgroundColor = "black";
                                char.style.color = "white";
                            }
                        });
                        doc.addEventListener("keyup", e => {
                            if(e.key === key || e.key === key.toLowerCase()){
                                char.style.backgroundColor = "white";
                                char.style.color = "black";
                            }
                        });
                    });
                    return keymap2;
            }
    }
};
/**
 * @param {keyof __whens} when
 * @param {String} style
 * @param {HTMLElement} el
 */
function newMouse(style, el, when){
    const html = `
    <div class="mouseDisplay" style="position: absolute; height: 90px;${style}">
        <div style="display: block; width: 23px; pointer-events: none; right: -2px; height: 50px; border-radius: 100px 5px 5px; border: 2px solid black;"></div>
        <div style="position: absolute;width: 5px;height: 30px;border: 2px solid black;border-radius: 15px; left: 24px; top: 10px;"></div>
        <div style="display: block; pointer-events: none; position: relative; top: -50px; left: 30px; width: 23px; height: 50.5px; border-radius: 5px 100px 5px 5px; border: 2px solid black;"></div>
        <div style="display: block; pointer-events: none; position: relative; width: 55px; height: 35px; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border: 2px solid black; top: -45px;"></div>
    </div>
    `;
    el.insertAdjacentHTML(when, html);
    const div = doc.querySelector(".mouseDisplay");
    const {children} = div;
    const middle = children[1];
    all("*").forEach(e => {
        let pScrollT = e.scrollTop;
        e.addEventListener("scroll", () => {
            const cScrollTop = e.scrollTop;
            if(cScrollTop > pScrollT) {
                middle.style.background = "linear-gradient(white, black)";
                setTimeout(() => {
                    middle.style.background = "white"
                }, 75);
            }
            else{
                middle.style.background = "linear-gradient(to top, white, black)";
                setTimeout(() => {
                    middle.style.background = "white";
                }, 75);
            }
            pScrollT = cScrollTop;
        });
    });
    doc.addEventListener("mousedown", e => {
        if(e.button === 0){
            children[0].style.backgroundColor = "black";
        }
        else if(e.button === 1){
            children[1].style.backgroundColor = "black";
        }
        else if(e.button === 2){
            children[2].style.backgroundColor = "black";
        }
    });
    doc.addEventListener("mouseup", e => {
        if(e.button === 0){
            children[0].style.backgroundColor = "white";
        }
        else if(e.button === 1){
            children[1].style.backgroundColor = "white";
        }
        else if(e.button === 2){
            children[2].style.backgroundColor = "white";
        }
    });
    return {
        div,
        children: children
    };
};
/**
 * 
 * @param {Number} n 
 * @param  {[{"element": HTMLElement, "moveThis": HTMLElement}]} _objs 
 */
function cursorMove(n, ..._objs){
    for(const obj of _objs){
        const {element, moveThis} = obj;
        if(!query("style[generatedmove]")){
            const css = create("style");
            head.append(css);
            css.setAttribute("generatedmove", "");
            css.exist = true;
            css.innerHTML = `
            .move{
                cursor: all-scroll;
            }
            `;
        }
        element.addEventListener('mousedown', e => {
            log("Dragging...");
            if(e.button === n){
                let prevX = e.clientX;
                let prevY = e.clientY;
                const mousemove = addListener(window, "mousemove", ev => {
                    let newX = prevX - ev.clientX;
                    let newY = prevY - ev.clientY;
                    if(!moveThis){
                        const rect = element.getBoundingClientRect();
                        element.style.left = rect.left - newX + 'px';
                        element.style.top = rect.top - newY + 'px';
                        prevX = ev.clientX;
                        prevY = ev.clientY;
                        return;
                    }
                    const rect = moveThis.getBoundingClientRect();
                    moveThis.style.left = rect.left - newX + 'px';
                    moveThis.style.top = rect.top - newY + 'px';
                    prevX = ev.clientX;
                    prevY = ev.clientY;
                });
                const mouseup = addListener(window, "mouseup", () => {
                    window.removeEventListener('mousemove', mousemove);
                    window.removeEventListener('mouseup', mouseup);
                });
            }
        });
        if(!element.classList) return;
        element.classList.add("move");
    }
};
class Timer{
    /**
     * 
     * @param {HTMLElement} e A div element for preference
     * @param {String} bg Background color of the div
     * @param {String} color Color of the element that displays the time
     * @param {String} mins Start point in minutes
     * @param {String} secs Start point in seconds
     */
    constructor(e, bg, color, mins, secs){
        e.innerHTML = Timer.getHTML();
        this.timeDisplays = all(".timer .timeDisplay");
        this.timeDisplays.forEach(timeDisplay => timeDisplay.style.color = color);
        this.minute = e.query(".minuteSpan");
        this.seconds = e.query(".secondsSpan");
        this.el = {
            stopStart: e.query(".stopStart"),
            reset: e.query(".control"),
        };
        e.style.backgroundColor = bg;
        this.interval = null;
        mins = Number(mins);
        secs = Number(secs);
        this.remainSeconds = mins * 60 + secs;
        this.stopped = true;
        this.style = create("style");
        head.append(this.style);
        this.style.innerHTML = Timer.getStyle();
        this.el.stopStart.addEventListener("click", () => {
            if(!this.interval){
                this.start().updateButtonColor().updateInnerText();
            }
            else{
                this.stop().updateButtonColor().updateInnerText();
            }
        });
        this.updateButtonColor();
        this.updateTimer();
        this.el.reset.addEventListener("click", () => {
            this.stopped = true;
            const input = prompt("Enter a positive number:");
            if(input <= 60){
                this.stop();
                this.remainSeconds = input * 60;
                this.updateTimer();
            }
        });
    };
    updateInnerText(){
        if(this.stopped){
            this.el.stopStart.innerHTML = "Start";
        }
        else{
            this.el.stopStart.innerHTML = "Stop";
        }
        return this;
    }
    updateTimer(){
        const seconds = this.remainSeconds % 60;
        const mins = floor(this.remainSeconds / 60);
        this.minute.textContent = mins.toString().padStart(2, "0");
        this.seconds.textContent = seconds.toString().padStart(2, "0");
        return this;
    };
    updateButtonColor(){
        if(this.stopped){
            this.el.stopStart.classList.remove("running");
            this.el.stopStart.classList.add("stopped");
        }
        else{
            this.el.stopStart.classList.remove("stopped")
            this.el.stopStart.classList.add("running");
        }
        return this;
    };
    start(){
        if(this.remainSeconds === 0) return;
        this.interval = setInterval(() => {
            this.remainSeconds--;
            this.updateTimer();
            if(this.remainSeconds === 0){
                this.stop();
            }
        }, 1000);
        this.stopped = false;
        return this;
    };
    stop(){
        clearInterval(this.interval);
        this.interval = null;
        this.stopped = true;
        return this;
    };
    static getHTML(){
        return `
        <span class="minuteSpan timeDisplay">00</span>
        <span class="timeDisplay">:</span>
        <span class="secondsSpan timeDisplay">00</span>
        <button class="stopStart">Start</button>
        <button class="control">Reset</button>
        <div class="removeButton" style="position: absolute; background: red; border-radius: 30px; width: 25px; text-align: center; top: -10px; right: -13px;">
            <span>X</span>
        </div>
        `;
    };
    static getStyle(){
        return `
        .timer *{
            pointer-events: none;
            margin: 0;
            padding: 0;
        }
        .timer .removeButton{
            pointer-events: all;
            cursor: pointer;
        }
        .timer{
            position: absolute;
            font-family: sans-serif;
            width: 240px;
            pointer-events: all;
            border: 5px solid;
            border-radius: 30px;
            border-bottom-right-radius: 0px;
            border-top-right-radius: 0px;
            height: 40px;
            top: 0;
            right: 0;
        }
        .timer button{
            position: relative;
            font-size: 22px;
            cursor: pointer;
            height: 35px;
            pointer-events: all;
            top: -5px;
        }
        .timer .timeDisplay{
            position: relative;
            top: -2px;
            left: 3px;
            font-size: 30px;
        }
        .timer .stopped{
            background: green;
        }
        .timer .stopStart{
            width: 70px;
        }
        .timer .control{
            left: -5px;
            width: 65px;
        }
        .timer .control:hover{
            background-color: black;
        }
        .timer button:hover{
            color: white;
        }
        .timer .running{
            background: red;
        }
        `;
    };
};
/**
 * @copyright Copyright (c)
 * @author Ahmet
 * @description A class that makes a HMTL element rotating.
 */
class KeepRotating{
    /**
     * 
     * @param {HTMLElement} element Any html element that is visible
     * @param {Number} time Interval's time
     */
    constructor(element, time){
        this.time = time;
        this.element = element;
        this.index = 0;
        this.interval = null;
        this.isRotating = false;
    }
    /**
    * @param {Number} i Index | degrees of the rotating element
    */
    #func(i){
        this.element.style.rotate = `z ${i}deg`;
    };
    startRotating(){
        this.interval = setInterval(() => {
            if(this.index === 360){
                this.index = 0;
            }
            this.#func(this.index);
            this.index++;
        }, this.time);
        this.isRotating = true;
        return this;
    };
    stopRotating(){
        clearInterval(this.interval);
        this.isRotating = false;
        return this;
    };
    comeBack(){
        this.element.style.rotate = "z 0deg";
        this.index = 0;
        return this;
    };
    break(){
        this.comeBack = null;
        this.stopRotating = null; // = rien
        this.startRotating = null;
    };
};
/**
 * @description Moves an html element to the cursor's x and y using the methods
 */
class MoveElToCursor{
    /**
     * @param {HTMLDivElement} element 
     * @param {Number} button 
     */
    constructor(element, button){
        this.element = element;
        this.element.style.position = "absolute";
        this.element.style.left = "-20px";
        this.element.style.top = "-20px";
        this.element.style.border = "2px solid";
        this.button = button;
        this.interval = null;
        this.config = {
            mousedownListener: null,
            mouseupListener: null,
            mousemoveListener: null,
            xy: {
                x: this.element.style.left,
                y: this.element.style.top
            }
        };
    };
    /**
     * 
     * @param {"onmousedown" | "onmousemove"} type
     * @param {"noanimation" | "animation"} anim
     */
    moveToCursor(type, anim = "noanimation"){
        const el = this.element;
        switch(type){
            case "onmousedown":
                this.config.mousedownListener = addListener(doc, "mousedown", e => {
                    if(e.button === this.button){
                        if(!this.config.mousemoveListener){
                            el.style.top = `${e.clientY}px`;
                            el.style.left = `${e.clientX}px`;
                            this.config.mousemoveListener = addListener(doc, "mousemove", e => {
                                el.style.top = `${e.clientY}px`;
                                el.style.left = `${e.clientX}px`;
                            });
                        }
                    }
                });
                this.config.mouseupListener = addListener(doc, "mouseup", () => {
                    this.stopMovingToCursor("onmousedown");
                    this.comeBack(anim);
                });
                break;
            case "onmousemove":
                this.config.mousemoveListener = addListener(doc, "mousemove", e => {
                    el.style.top = `${e.clientY}px`;
                    el.style.left = `${e.clientX}px`;
                });
                break;
        }
        return this;
    };
    /**
     * @param {"animation" | "noanimation"} type
     */
    comeBack(type){
        if(!this.interval){
            switch(type){
                case "noanimation":
                    this.element.style.top = this.config.xy.y;
                    this.element.style.left = this.config.xy.x;
                    break;
                case "animation":
                    let index = 1;
                    this.interval = setInterval(() => {
                        if(index !== 1.3877787807814457e-16){
                            index-=0.1;
                            this.element.style.opacity = String(index);
                            return;
                        }
                        this.element.style.left = this.config.xy.x;
                        this.element.style.top = this.config.xy.y;
                        this.element.style.opacity = "1";
                        clearInterval(this.interval);
                    }, 50);
                    setTimeout(() => {
                        this.interval = null;
                    }, 800);
                    break;
            }
        }
        return this;
    };
    /**
     * 
     * @param {"onmousedown" | "onmousemove"} type 
     */
    stopMovingToCursor(type){
        switch(type){
            case "onmousedown":
                if(!this.config.mousemoveListener && !this.config.mousedownListener) {
                    return;
                }
                doc.removeEventListener("mousemove", this.config.mousemoveListener);
                this.config.mousemoveListener = null;
                this.config.mousedownListener = null;
                this.config.mouseupListener = null;
                break;
            case "onmousemove":
                if(!this.config.mousemoveListener) {
                    return;
                }
                doc.removeEventListener("mousemove", this.config.mousemoveListener);
                this.config.mousemoveListener = null;
                break;
        }
        return this;
    };
};
class CircleCooldown{
    /**
     * @param {HTMLElement} element
     * @param {number} progressEnd
     * @param {number} speed
     */
    constructor(element, progressEnd, speed){
        this.circle = element;
        this.speed = speed;
        this.interval = null;
        this.progressStart = -1;
        this.progressEnd = progressEnd;
        this.degrees = 3.6
    };
    startProgress(func){
        log("Called")
        this.interval = setInterval(func, this.speed);
    }
};
class LoadingScreen{
    /**
     * @param {Number} time
     * @param {String} className
     * @param {String} msg
     * @param {Number} fontSize
     * @param {String} percent
     * @param {String} equalsto
     * @param {{element: HTMLElement, when: keyof __whens}} obj
     * @param {{"backgroundColor": string, "top": string, "left": string, "right": string, "bottom": string, "width": string, "height": string, "transform": string,} | "background: color, width: width"} style
     */
    constructor(time, className, msg, fontSize, equalsto, percent, obj, style = `position: absolute; top: 0; left: 0; background: black; height: 100%; width: 100%;`){
        this.config = obj;
        this.percent = percent;
        this.equalsto = equalsto;
        this.className = className;
        this.timer = 0;
        this.time = time;
        this.style = style;
        this.interval = null;
        this.html = `
        <div class="${this.className}" style="${this.style}">
            <h1>${msg}</h1>
            <br>
            <div>
                <div>
                    <div id="progressbar"></div>
                </div>
            </div>
        </div>
        <style>
            .${this.className}{
                text-align: -webkit-center;
            }
            .${this.className} div{
                background-color: white;
                text-align: left;
                top: 250px;
                width: 1300px;
                height: 50px;
                border-radius: 30px;
            }
            .${this.className} div div{
                background-color: white;
                border: 5px solid black;
                top: 6px;
                left: 5px;
                width: 1290px;
                height: 40px;
            }
            .${this.className} #progressbar{
                border: 0px solid;
                background-color: black;
                height: 25px;
                top: 3px;
                left: 2px;
                width: 0px;
            }
            .${this.className} *{
                position: relative;
                top: 100px;
                font-size: ${fontSize}px;
                color: white;
            }
        </style>
        `;
        this.div = null;
        this.progressBar = null;
    };
    #load(){
        this.div = this.#insertOn(this.config.element, this.config.when);
        this.progressBar = query(`.${this.className} div div div`);
        this.#getThis();
        this.interval = setInterval(() => {
            this.timer+=1;
            this.progressBar.style.width = `${this.timer * 100 / this.time}%`;
            log(this.progressBar.style.width);
            if(this.progressBar.style.width === this.equalsto){
                this.progressBar.style.width = this.percent ||"99.7%";
            }
        }, 1000);
        return this;
    };
    #getThis(){
        this.progressBar.style.transition = "0.125s";
        return !this.progressBar && !this.div ? true : false;
    };
    startTheLoading(){
        if(!this.div){
            this.#load();
            const interval = setInterval(() => {
                if(this.progressBar.style.width === this.equalsto || this.progressBar.style.width === this.percent || this.progressBar.style.width === "99.7%"){
                    this.timer = 0;
                    log(this.timer);
                    this.div.remove();                    
                    this.div = null;
                    clearInterval(this.interval);
                    clearInterval(interval);
                }
            }, 800);
        }
    };
    /**
     * @param {HTMLElement} element
     * @param {keyof __whens} when
     */
    #insertOn(element, when){
        element.insertAdjacentHTML(when, this.html);
        return query(`.${this.className}`);
    };
    fakeTheLoading(){
        return this.#load();
    };
};
class SuperHiddenFunction{constructor(f){this.__f = f;this.#f();this.#ff();this.#fff();this.#ffff();this.#fffff();this.#ffffff();this.#fffffff();this.#ffffffff();this.#fffffffff();this.#ffffffffff();};#f(){return this.#ff};#ff(){return this.#fff};#fff(){return this.#ffff};#ffff(){return this.#fffff};#fffff(){return this.#ffffff};#ffffff(){return this.#fffffff};#fffffff(){return this.#ffffffff};#ffffffff(){return this.#fffffffff};#fffffffff(){return this.#fffffffff};#ffffffffff(){this.__f()};};
class WebSite{
    /**
     * @param {HTMLElement} element
     */
    constructor(element = null){
        this.element = element;
        this.IsChrome = window.chrome ? true : false;
        this.IsFirefox = typeof InstallTrigger !== "undefined";
        this.transitionPagesIndex = 0;
        this.pages = null;
        this.LoadingScreen = LoadingScreen;
        this.KeepRotating = KeepRotating;
        if(this.element){
            this.element.className = "consoleLogsContainer";
        }
        this.testSite = null;
        this.detected = {
            testWebSite: () => {
                const arr = ["test", "Test", "TEst", "TESt", "TEST", "tEST", "teST", "tesT", "tEst", "tESt" ];
                for(const str of arr){
                    if(location.href.includes(str)){
                        this.testSite = true;
                        break;
                    }
                    else{
                        this.testSite = false;
                    }
                }
                return this;
            },
        };
        this.detected.testWebSite();
    };
    /**
    * @param {Boolean} condition
    * @param {Function} func  
    */
    then(condition, func){
        if (!condition) return;
        else {
            log(func(window));
        }
    };
    /**
     * @param {Boolean} t 
     * @param {HTMLElement} element 
    */
    selectIsRed(t, element){
        if(t){
            element.innerHTML+=`
            *::selection{
                background: red;
                color: black;
            }
            `;
        }
    };
    /**
    * @param {{"left": "ArrowLeft", "right": "ArrowRight"}} key 
    * @param {Array} pages
    * @param {Array} functions
    */
    transitionPages(pages, functions, key = {"left": "ArrowLeft", "right": "ArrowRight"}){
        this.pages = pages;
        if(!key) {}
        else{
            doc.addEventListener("keydown", e => {
                switch(e.key){
                    case key.right:
                        if(this.transitionPagesIndex === pages.length - 1){
                            return;
                        }
                        this.transitionPagesIndex++;
                        const page = pages[this.transitionPagesIndex]
                        body.innerHTML = page;
                        if(!functions[this.transitionPagesIndex]){
                            break;
                        }
                        else if(page.includes("Function Required") && functions[this.transitionPagesIndex]){
                            functions[this.transitionPagesIndex]();
                        }
                        break;
                    case key.left:
                        if(this.transitionPagesIndex === 0){
                            return;
                        }
                        this.transitionPagesIndex--;
                        const _page = pages[this.transitionPagesIndex];
                        body.innerHTML = _page;
                        if(!functions[this.transitionPagesIndex]){
                            break;
                        }
                        else if(page.includes("Function Required") && functions[this.transitionPagesIndex]){
                            functions[this.transitionPagesIndex]();
                        }
                        break;
                }
            });
        }
    };
    /**
     * @param {String} str
     */
    log(str){
        this.element.innerHTML = str;
    };
};
const website = new WebSite();
website.detected.testWebSite().then(website.testSite, () => "This is just a test website.");
website.selectIsRed(true, query("style"))
/*website.transitionPages([

    body.innerHTML, `
<!-- Function Required -->
<style>
    *{
        padding: 0;
        margin: 0;
        outline: 0;
        overflow: hidden;
        user-select: none;
    }
    div{
        font-size: 150px;
    }
    #Timer button{
        font-size: 150px;
    }
    #Timer{
        width: 1225px;
    }
</style>
<div id="Timer" class="${rainbowColor}"></div>
<script src="sources.js"></script>
`], [null, function(){
    const timer = query("div#Timer")
    timer.query = function(el){
        return query(el);
    }
    new Timer(timer, "", "black", 1, 30);
}]);
function logPressedKeys(){
    doc.addEventListener("keydown", e => {
        log(e.key);
    });
};
/** 
 * @param {Function} func
 * @param {Number} n
 * @param {Number} n1
 * @param {String} msg
 * @param {keyof HTMLElementTagNameMap} element
 * @param {Number} width
 * @param {Number} height
 * @param {Number} fontSize
 * @param {keyof __whens} when
 * */
function newAlert(width, height, fontSize, msg, element, when, n1, n, func){
    function f(_0xa_){
        _0xa_.innerHTML = `
        <div style="display: inline-block; background: black; width: ${width}px; height: ${height}px; cursor: not-allowed">
            <div style="width: 100%; background: blue; height: 5px; transition: 0.2s"></div>
            <span style="color: white; font-size: ${fontSize}px;">${n}s<br>${msg}</span>
        </div>
        `;
        let num = n;
        const max = n;
        let interval;
        setTimeout(() => _0xa_.remove(), max * 1000 + 100);
        const span = query(".alertWindow span");
        const div = query(".alertWindow div div");
        func(_0xa_);
        interval = setInterval(() => {
            num-=0.1;
            let resultat = num * 100 / max;
            div.style.width = `${resultat}%`;
            span.innerHTML = `${round(num)}s<br>${msg}`;
            if(num === 0){
                clearInterval(interval);
            }
        }, 100);
    };
    insert("div", all(element)[n1], when);
    const _0xa_ = query(".div");
    _0xa_.removeAttribute("id");
    _0xa_.className = "alertWindow";
    _0xa_.style = `display: block; position: absolute; width: 100%; top: 50%; transform: translateY(-50%); text-align: center;`;  
    _0xa_.innerHTML = `
    <div style="display: inline-block; background: black; width: ${width}px; height: ${height}px">
        <span style="color: white; font-size: ${fontSize}px;">${msg}</span>
    </div>
    `;
    if(typeof n === "number") {
        f(_0xa_);
    };
};
/**
 * 
 * @param {String} element 
 * @param {keyof __whens} when 
 * @param {String} style 
 * @returns {HTMLDivElement}
 */
function newTimer(element, when, style){
    const windowPopUp = `
    <div class="holder" style="${style}">
        <h1>Customize the timer</h1>
        <label>Start time:</label>
        <label>minutes:</label>
        <input type="number">
        <br>
        <label>Seconds:</label>
        <input type="number">
        <br>
        <br>
        <label style="font-size: 17px;">Background color of timer(default color is white):</label>
        <input type="color">
        <br>
        <br>
        <label>Color of the timer:</label>
        <input type="color">
        <br>
        <br>
        <label>Start the timer at creation ?</label>
        <input type="checkbox">
        <br>
        <button>Finish</button>
        <div class="removePopUp">
            <span>X</span>
        </div>
    </div>
    `;
    insert("div", query(element), when);
    const timer = query(".div")
    timer.removeAttribute("id");
    timer.className = "timer";
    timer.query = e => timer.querySelector(e);
    const css = create("style");
    head.append(css);
    css.innerHTML = `
    .holder{
        display: inline-block;
        position: absolute;
        background: black; 
        width: 430px;
        height: 290px; pointer-events: all;
        text-align: center;
        outline: none;
        pointer-events: auto;
        border-radius: 30px;
        overflow: auto;
        overflow-x: hidden;
        left: 36%;
        top: 25%;
    }
    .holder *{
        color: white;
    }
    .holder label{
        font-size: 26px;
    }
    .holder button, .holder input[type="number"]{
        color: black;
    }
    .holder button{
        font-size: 30px;
        cursor: pointer;
    }
    .holder button:hover{
        background: black;
        color: white;
    }
    .holder input{
        font-size: 16px;
    }
    .holder input[type="number"]{
        width: 35px;
    }
    .holder .removePopUp{
        cursor: pointer;
        position: absolute;
        top: -1px;
        right: 0px;
        background: red;
        border-radius: 30px;
        width: 35px;
    }
    `;
    query(element).insertAdjacentHTML(when, windowPopUp);
    const removePopUp = query(".holder .removePopUp");
    const holder = query(".holder");
    const checkBox = query('.holder input[type="checkbox"]');
    cursorMove(2, {
        element: holder
    });
    all(`.holder input[type="number"]`)[0].value = "1";
    all(`.holder input[type="number"]`)[1].value = "30";
    const inputColors = [
        {
            element: '.holder input[type="color"]',
            num: 0
        },
        {
            element: '.holder input[type="color"]',
            num: 1
        }
    ];
    defProp(all(inputColors[0].element)[0], "value", {
        value: "#fff",
        configurable: true
    });
    let bg = all(inputColors[0].element)[0].value,
    color = all(inputColors[1].element)[1].value,
    mins = all(`.holder input[type="number"]`)[0].value,
    secs = all(`.holder input[type="number"]`)[1].value;
    inputColors.forEach(obj => {
        all(obj.element)[obj.num].addEventListener("change", () => {
            if(obj.num === 0){
                bg = all(obj.element)[obj.num].value;
            }
            else{
                color = all(obj.element)[obj.num].value;
            }
        });
    });
    addListener(all('.holder input[type="number"]')[0], "change", () => {
        mins = all('.holder input[type="number"]')[0].value;
        mins = Number(mins);
    });
    addListener(all('.holder input[type="number"]')[1], "change", () => {
        secs = all('.holder input[type="number"]')[1].value;
        secs = Number(secs);
    });
    const finish = query(".holder button");
    removePopUp.addEventListener("click", () => {
        holder.remove();
        timer.remove();
        css.remove();
        return;
    });
    finish.addEventListener("click", () => {
        if(isNaN(secs) && typeof mins === "number" || isNaN(mins) && typeof secs === "number" || isNaN(secs) && isNaN(mins) || mins < 0 && secs < 0 || mins < 0 && secs > 0){
            newAlert(300, 150, 30, "Invalid start time, do not let the start time at 0.", element, when, 0, 5);
            remove(holder);
            timer.remove();
            css.remove();
            return;
        }
        else{
            if(checkBox.checked){
                new Timer(timer, bg, color, mins, secs).start().updateButtonColor().updateInnerText();
            }
            else new Timer(timer, bg, color, mins, secs);
            const removeButton = query(".timer .removeButton");
            removeButton.addEventListener("click", () => {
                timer.remove();
            });
            remove(holder);
            css.remove();
        }
    });
    return timer;
};
/**
 * 
 * @param {HTMLElement} element
 * @param {keyof whens} when
 * @param {String} style
 * @param {String} className
 */
function newCalc(element, when, style, className){
    const calcHtml = `
    <div class="${className}" style="${style}">
        <div class="calculator">
            <form>
                <span class="display">
                    <input type="text">
                </span>
                <div>
                    <input type="button" value="AC" class="operator">
                    <input type="button" value="DE" class="operator">
                    <input type="button" value="." class="operator">
                    <input type="button" value="/" class="operator">
                </div>
                <div>
                    <input type="button" value="7">
                    <input type="button" value="8">
                    <input type="button" value="9">
                    <input type="button" value="*" class="operator">
                </div>
                <div>
                    <input type="button" value="4">
                    <input type="button" value="5">
                    <input type="button" value="6">
                    <input type="button" value="-" class="operator">
                </div>
                <div>
                    <input type="button" value="1">
                    <input type="button" value="2">
                    <input type="button" value="3">
                    <input type="button" value="+" class="operator">
                </div>
                <div>
                    <input type="button" value="00">
                    <input type="button" value="0">
                    <input type="button" value="=" class="equal operator">
                </div>
            </form>
        </div>
        <div class="removeBtn">
            <span>X</span>
        </div>
    </div>
    `;
    element.insertAdjacentHTML(when, calcHtml);
    const screen = query(`.${className} .calculator form .display input`);
    const buttons = all(`.${className} .calculator form input[type="button"]`);
    const css = create("style");
    head.append(css);
    const removeBtn = query(`.${className} .removeBtn`);
    removeBtn.addEventListener("click", () => {
        removeBtn.parentElement.remove();
        css.remove();
    });
    css.innerHTML = `
    .${className} *{
        user-select: none;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }
    .${className}{
        width: 380px;
        height: 560px;
        background: #e3f9ff;
        position: absolute;
        left: 38%;
        top: 12%;
    }
    .${className} .calculator form span input{
        user-select: none;
    }
    .${className} .calculator form div input{
        transition: all 0.150s;
    }
    .${className} .calculator form div input:hover{
        background: blue;
    }
    .${className} .calculator form div input:active{
        background: darkblue;
    }
    .${className} .calculator{
        background: #3a4452;
        padding: 20px;
        border-radius: 10px;
    }
    .${className} .calculator form input{
        border: 0;
        outline: 0;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.1),5px 5px 15px rgba(0, 0, 0, 0.2);
        background: transparent;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        margin: 10px;
    }
    .${className} .calculator form input[type="text"]{
        cursor: default;
    }
    .${className} .calculator form .display{
        display: flex;
        justify-content: flex-end;
        margin: 20px 0;
    }
    .${className} .calculator form .display input{
        text-align: right;
        flex: 1;
        /*font-size: 45px;*/
        box-shadow: none;
    }
    .${className} .calculator form input.equal{
        width: 145px;
    }
    .${className} .calculator form input.operator{
        color: #33ffd8;
    }
    .${className} .removeBtn{
        background-color: red;
        width: 20px;
        border-radius: 30px;
        text-align: center;
        cursor: pointer;
        position: absolute;
        top: -5px;
        right: -5px;
    }
    `;
    let fontSize = 45;
    setInterval(() => {
        if(screen.value.length >= 20){
            fontSize = 15;
            screen.style.fontSize = `${fontSize}px`;
        }
        else if(screen.value.length >= 15){
            fontSize = 30;
            screen.style.fontSize = `${fontSize}px`;
        }
        else{
            fontSize = 45;
            screen.style.fontSize = `${fontSize}px`;
        }
    }, 0);
    screen.style.fontSize = `${fontSize}px`;
    screen.addEventListener("keydown", e => {
        if(e.key.length === 1){
            e.preventDefault();
        }
    });
    buttons.forEach(button => {
        if(button.value === "DE"){
            button.addEventListener("click", () => {
                screen.value = screen.value.toString().slice(0 , -1);
            });
        }
        else if(button.value == "AC"){
            button.addEventListener("click", () => {
                screen.value = "";
            });
        }
        else if(button.value === "="){
            button.addEventListener("click", () => {
                let value = eval(screen.value);
                screen.value = value;
            });
        }
        else{
            button.addEventListener("click", () => {
                screen.value+=button.value;
            });
        }
    });
    const container = query("."+className);
    return {
        container,
        css
    };
};
/**
 * @copyright Copyright (c) 2024
 * @param {HTMLElement} element The element that the function is going to use.
 * @description Makes an html element show the time
 * Don't try to understand what's inside, you won't be able to understand.
 */
function newTime(element){const f=(ff)=>{function fc(c) {let h = c.getHours();let m = c.getMinutes();let s = c.getSeconds();let mt = c.getMilliseconds();let aop=h>=12?"pm":"am";h=(h % 12)||12;h=f0(h);m=f0(m);s=f0(s);mt=f0(mt);mt=Ms(mt);return h+":"+m+":"+s+":"+mt+aop;};function f0(t){t=t.toString();return t.length<2?"0"+t:t;};function Ms(ms){return 2>=ms.length?ms+"0":ms;};element.innerText=fc(ff);};const s=setInterval(()=>{f(new Date());},1);return s};
/**
 * @param {String} link
 * @param {String} style
 * @returns {HTMLIFrameElement} 
 * */
function newYtbIframe(link, style){let v = "";for(let i = 32; i < 43; i++){v+=link.charAt(i);}const i = create("iframe");i.style = style;i.setAttribute("allowfullscreen", "");i.src = `https://www.youtube.com/embed/${v}?autoplay=1&auto_play=1`;body.append(i);return i;};
function noF12(){doc.addEventListener("keydown",e=>{if(e.key==="F12"){e.preventDefault();}});};
/**
 * 
 * @param {HTMLElement} element 
 */
function canWrite(element){
    element.config = {
        selected: false
    };
    let select = element.config.selected;
    function keydown(e){
        if(e.key.length === 1){
            element.innerHTML+=e.key;
        }
        if(e.key === "Backspace"){
            element.innerHTML = element.innerHTML.toString().slice(0, -1);
        }
        if(e.ctrlKey && e.key === "Backspace"){
            element.innerHTML = "";
        }
    };
    element.addEventListener("click", () => {
        if(select){
            select = false;
            log("removed");
            doc.removeEventListener("keydown", keydown);
        }
        else{
            select = true;
            log("added");
            doc.addEventListener("keydown", keydown);
        }
    });
};
/**
 * 
 * @param {HTMLElement} element
 * @param {keyof whens} when
 * @param {HTMLElement} _el
 * @param {keyof whens} _when
 * @param {String} style
 * @param {String} _t
 * @param {String} sty
 * @returns {HTMLDivElement}
 */
function newWindowF(element, when, _el, _when, style, _t, sty){
    const html$ = `
    <div class="modif-window" style="${style}">
        <div class="holder">
            <div>
                <label>New Calc:</label>
                <button class="calcBtn">Calc</button>
            </div>
            <div>
                <label>Vid embed:</label>
                <input class="videoId" placeholder="ex: https://www.youtube.com/watch?v=JHJPmu42CPE">
                <button class="embedVid">embed</button>
            </div>
        </div>
    </div>
    `;
    element.insertAdjacentHTML(when, html$);
    const videoId = query(".modif-window .holder .videoId");
    let vidId;
    videoId.addEventListener("change", () => {
        vidId = videoId.value;
    });
    const embedVid = query(".modif-window .holder .embedVid");
    embedVid.addEventListener("click", () => {
        const htmlIn = `
        <div id="iframeDiv"></div>
        `;
        all("script")[all("script").length - 1].insertAdjacentHTML("beforebegin", htmlIn);
        const iframe = newYtbIframe(vidId, sty);
        id("iframeDiv").append(iframe);
    });
    const css = create("style");
    head.append(css);
    const calcBtn = query(".modif-window .holder .calcBtn");
    calcBtn.addEventListener("click", () => {
        const obj = newCalc(body, "beforeend", "", `container${i}`);
        cursorMove(2, {
            element: obj.container
        });
        i++;
    });
    css.innerHTML = `
    .modif-window{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
    }
    .modif-window *{
        color: white;
        font-size: 45px;
    }
    .modif-window .holder button, .modif-window .holder input{
        color: black;
    }
    .modif-window .holder button{
        cursor: pointer;
    }
    .modif-window .holder .videoId{
        width: 98%;
    }
    .modif-window .holder{
        display: inline-block;
        background: black;
        height: 200px;
        width: 450px;
        border-radius: 30px;
        overflow-y: auto;
    }
    .openWindow{
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 20px;
    }
    `;
    const modifWindow = query(".modif-window");
    modifWindow.style.display = "none";
    const html = `
    <button class="openWindow">Window</button>
    `;
    _el.insertAdjacentHTML(_when, html);
    const btn = query(".openWindow");
    btn.style = _t;
    btn.addEventListener("click", () => {
        switch(modifWindow.style.display){
            case "block":
                modifWindow.style.display = "none";
                break;
            case "none":
                modifWindow.style.display = "block";
                break;
        }
    });
    return modifWindow;
};
/**
* @param {{"member1": string, "member2": string, "resolve": Function, "reject": Function}} equation 
*/
function solveAnEquation(equation){
    if(eval(equation.member1) === eval(equation.member2)){
        equation.resolve(equation.member1, equation.member2);
    }
    else{
        equation.reject(equation.member1, equation.member2);
    }
};
/**
* @param {{"member1": string, "member2": string, "numberChosen": string, "resolve": Function, "reject": Function}} equation 
*/
function convertXToNum(equation = null){
    if(equation){
        return {
            member1: equation.member1.replace("x", equation.numberChosen),
            member2: equation.member2.replace("x", equation.numberChosen)
        }
    }
};
