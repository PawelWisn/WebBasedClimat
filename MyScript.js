// homepage.html
Date.prototype.getSecondsStr = function () {
    let seconds = new Date().getSeconds();
    return seconds < 10 ? '0' + seconds : seconds;
};

Date.prototype.getHoursStr = function () {
    let hours = new Date().getHours();
    return hours < 10 ? '0' + hours : hours;
};

Date.prototype.getMinutesStr = function () {
    let minutes = new Date().getMinutes();
    return minutes < 10 ? '0' + minutes : minutes;
};

const d = new Date();
const clock = document.getElementById("clock");

function updateClock() {
    clock.innerHTML = d.getHoursStr() + ':' + d.getMinutesStr() + ':' + d.getSecondsStr();
    d.setSeconds(d.getSeconds() + 1);
}

// causes.html
function changeParagraph() {
    document.getElementById("par_change").innerHTML = "A greenhouse gas is a gas that absorbs and emits radiant energy within the thermal infrared range.";
}

function fillIterativeCauses() {
    console.log("fillIterativeCauses");
    let parList = document.getElementsByClassName('iteratingCauses');
    iteratingCausesFor(parList[0]);
    iteratingCausesWhile(parList[1]);
}

function iteratingCausesFor(par) {
    console.log("iteratingCausesFor");
    let causes = ['Wasting water', 'Using coal', 'Internal combustion engines'];
    let newHTML = par.innerHTML + "\n<ul>";
    for (let elem of causes) {
        newHTML += "\n<li>" + elem + "</li>";
    }
    newHTML += "\n</ul>";
    par.innerHTML = newHTML;
}

function iteratingCausesWhile(par) {
    console.log("iteratingCausesWhile");
    let causes = ['Wasting water', 'Using coal', 'Internal combustion engines'];
    let i = 0;
    let newHTML = par.innerHTML + "\n<ul>";
    while (i < causes.length) {
        newHTML += "\n<li>" + causes[i] + "</li>";
        i++;
    }

    newHTML += "\n</ul>";
    par.innerHTML = newHTML;
}

// console
let alternateCase = function (s) {
    let chars = s.toLowerCase().split("");
    for (let i = 0; i < chars.length; i++) {
        chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
};

let txt = "this text has been changed to upper case";
console.log(alternateCase(txt));


// feedback.html
function validateName() {
    let name =
        document.getElementById("feedbackName").value;
    if (name[0] !== name[0].toUpperCase() || /\d/.test(name)) {
        alert("Name should start with a capital letter and shouldn't contain any digits")
    } else {
        alert("Name is OK")
    }

}

