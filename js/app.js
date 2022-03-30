
const url='https://icanhazdadjoke.com/slack';
const peticio=fetch(url);
const seccio = document.getElementById('app');
function mostraAcudits(){
      peticio.then(dades => dades.json())
            .then(data => {
                  const element = document.createElement('div');
                  element.id='pare';
                  element.innerHTML = `<h4>${data.attachments[0].text}</h4>`;
                  seccio.appendChild(element);
            }
                  //console.log(data.attachments[0].text)
                  
                  )
            .catch(()=>console.log('error'))
     document.getElementById("button1").hidden = false;
     document.getElementById("button2").hidden = false;
     document.getElementById("button3").hidden = false;       
}
//valoració acudits
var today = new Date;
var reportAcudits = [];

function addToList(score) {
      var reportAcudit = {}
      reportAcudit.joke = seccio.innerHTML;
      reportAcudit.score = score;
      reportAcudit.date = new Date().toISOString()
      reportAcudits.push(reportAcudit)
      console.log(reportAcudits)
  }

