//temps
'use strict';
var _a;
window.onload = function () {
    weather();
};
function weather() {
    fetch('https://www.el-tiempo.net/api/json/v2/provincias/08', {
        method: "GET",
        headers: { Accept: "application/json" }
    })
        .then(function (quote) { return quote.json(); })
        .then(function (data) {
        document.getElementById("weather").innerHTML = "Avui: ".concat(data.ciudades[6].stateSky.description);
    });
}
//acudits
function acudit() {
    var random = Math.ceil(Math.random() * 2);
    random == 1 ? mostraAcudits() : mostraAcuditsChuk();
}
;
var url = 'https://icanhazdadjoke.com/slack';
//const peticio= fetch(url, { method: "GET", headers: {'Accept': 'application/json'}});
var el = document.createElement('element');
var seccio = (_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.appendChild(el);
/*
async function mostraAcudits(){
    const joke = await peticio;
    const objJoke = await joke.json();
    el.innerHTML = objJoke.joke;
document.getElementById("button1")!.hidden = false;
document.getElementById("button2")!.hidden = false;
document.getElementById("button3")!.hidden = false;
}
*/
function mostraAcudits() {
    fetch(url, { method: "GET", headers: { 'Accept': 'application/json' } }).then(function (dades) { return dades.clone().json(); })
        .then(function (data) {
        el.textContent = data.attachments[0].text;
    })["catch"](function (err) { return console.log('error: ' + err); });
    document.getElementById("button1").hidden = false;
    document.getElementById("button2").hidden = false;
    document.getElementById("button3").hidden = false;
}
var urlChuk = 'https://api.chucknorris.io/jokes/random';
//const peticioChuk=fetch(urlChuk, { method: "GET", headers: {'Accept': 'application/json'}});
/*
async function mostraAcuditsChuk(){
    const joke = await peticioChuk;
    const objJoke = await joke.json();
    el.innerHTML = objJoke.value;
     
   document.getElementById("button1")!.hidden = false;
   document.getElementById("button2")!.hidden = false;
   document.getElementById("button3")!.hidden = false;
}
*/
function mostraAcuditsChuk() {
    fetch(urlChuk, { method: "GET", headers: { 'Accept': 'application/json' } }).then(function (dades) { return dades.clone().json(); })
        .then(function (data) {
        el.textContent = data.value;
    })["catch"](function (err) { return console.log('error: ' + err); });
    document.getElementById("button1").hidden = false;
    document.getElementById("button2").hidden = false;
    document.getElementById("button3").hidden = false;
}
//valoració acudits
var today = new Date;
var reportAcudits = [];
function addToList(score) {
    var reportAcudit = {};
    reportAcudit.joke = seccio.innerHTML;
    reportAcudit.score = score;
    reportAcudit.date = new Date().toISOString();
    reportAcudits.push(reportAcudit);
    console.log(reportAcudits);
}