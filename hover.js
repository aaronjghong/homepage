let hoverBar = document.getElementById("hover-bar");

let elems = document.querySelectorAll(".hover-elem");

const body = document.body;

let prev_i = -1;

function display(i){
    console.log("new display" + i);
    if (prev_i == -1){
        // Loading the first display
        let disp = document.createElement("div");
        disp.classList.add("display")
        body.appendChild(disp)
        loadText(disp, i);

        // Keeping track of previous hovers to clear previous displays
        prev_i = i;
    }
    else{
        // Clear the previous Display
        clear();

        // Load the next one
        let disp = document.createElement("div");
        disp.classList.add("display")
        body.appendChild(disp)
        loadText(disp, i);

        // Keeping track of previous hovers to clear previous displays
        prev_i = i;
    }

}

function load(){
    console.log("loading");

    for (let i = 0, len = elems.length; i < len; i++){
        elems[i].addEventListener("mouseover", ()=>{
            console.log("hover"+[i]);
            display(i);
        })
    }

    console.log("loaded");
}

function clear(){
    let disp = document.getElementsByClassName("display");
    body.removeChild(disp[0]);
}

function loadText(display, i){
    let mainHead = document.createElement("h2");
    let text = document.createElement("p");
    let pic = document.createElement("img");
    if (i == 0){
        mainHead.textContent = "Email"
        text.textContent = "example@email.com"
        pic.src = "pics/email.png";
        pic.width = "300";
        mainHead.style.opacity = 0;
        text.style.opacity = 0;
        pic.style.opacity = 0;
        display.appendChild(mainHead);
        display.appendChild(text);
        display.appendChild(pic);
        fade(mainHead);
        fade(text);
        fade(pic);
    }
    else if (i == 1){
        mainHead.textContent = "Phone"
        text.textContent = "+1 (000)-000-000"
        pic.src = "pics/phone2.png";
        pic.width = "300";
        mainHead.style.opacity = 0;
        text.style.opacity = 0;
        pic.style.opacity = 0;
        display.appendChild(mainHead);
        display.appendChild(text);
        display.appendChild(pic);
        fade(mainHead);
        fade(text);
        fade(pic);
    }
    else if (i == 2){
        mainHead.textContent = "Twitter"
        text.textContent = "@handle"
        pic.src = "pics/twitter.png";
        pic.width = "300";
        mainHead.style.opacity = 0;
        text.style.opacity = 0;
        pic.style.opacity = 0;
        display.appendChild(mainHead);
        display.appendChild(text);
        display.appendChild(pic);
        fade(mainHead);
        fade(text);
        fade(pic);
    }
}

function fade(element) {
    let op = 0.1;  // initial opacity
    //element.style.display = 'block';
    let timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 25);
}

window.onload = load;