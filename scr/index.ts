//temps
'use strict'
window.onload = function() {
    weather();
  };
	
function weather() {

    fetch('https://www.el-tiempo.net/api/json/v2/provincias/08', {
        method: "GET",
        headers: { Accept: "application/json" },
      })
        .then(quote => quote.json())
        .then(data => {
           
            document.getElementById("weather")!.innerHTML = `Avui: ${data.ciudades[6].stateSky.description}`;
        }
        )
  }
	

var imatge = document.getElementById('fons') as HTMLImageElement;
var dir = 'scr/svg/';

//acudits
function acudit(){
    
    var random = Math.ceil(Math.random()*2);
    
  random == 1 ? mostraAcudits(): mostraAcuditsChuk();
  //random == 1 ? imatge?.setAttribute("style", "background-image: url(" + dir + "blob1.svg); background-repeat: no-repeat; background-size: 388px 388px")
  //            : imatge?.setAttribute("style", "background-image: url(" + dir + "blob2.svg); background-repeat: no-repeat; background-size: 388px 388px");
  random == 1 ? imatge.setAttribute("src", 'scr/svg/blob1.svg')
              : imatge.setAttribute("src", 'scr/svg/blob2.svg')
};


const url='https://icanhazdadjoke.com/slack';
//const peticio= fetch(url, { method: "GET", headers: {'Accept': 'application/json'}});
const el = document.createElement('element');
const seccio: any = document.getElementById('app')?.appendChild(el);


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
 function mostraAcudits(){
  fetch(url, { method: "GET", headers: {'Accept': 'application/json'}}).then(dades => dades.clone().json())
            .then(data => {
                el.textContent = data.attachments[0].text;
          })
          .catch((err)=>console.log('error: '+ err))

   document.getElementById("button1")!.hidden = false;
   document.getElementById("button2")!.hidden = false;
   document.getElementById("button3")!.hidden = false;       

}

const urlChuk='https://api.chucknorris.io/jokes/random';
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
function mostraAcuditsChuk(){
   
  fetch(urlChuk, { method: "GET", headers: {'Accept': 'application/json'}}).then(dades => dades.clone().json())
          .then(data => {
            el.textContent = data.value;
          },)
          .catch((err)=>console.log('error: '+ err))
   document.getElementById("button1")!.hidden = false;
   document.getElementById("button2")!.hidden = false;
   document.getElementById("button3")!.hidden = false;   
   
}

//valoració acudits
var today = new Date;
var reportAcudits: any = [];

function addToList(score: any) {
    var reportAcudit: any = {}
    reportAcudit.joke = seccio.innerHTML;
    reportAcudit.score = score;
    reportAcudit.date = new Date().toISOString()
    reportAcudits.push(reportAcudit)
    console.log(reportAcudits)
}
