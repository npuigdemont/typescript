
const url='https://icanhazdadjoke.com/slack';
const peticio=fetch(url);
const seccio = document.getElementById('app');
function mostraAcudits(){
      peticio.then(dades => dades.json())
            .then(data => {
                  const element = document.createElement('div');
                  element.id='pare';
                  element.innerHTML = `<h4>${data.attachments[0].text}</h4>`
                  seccio.appendChild(element);
            }
                  //console.log(data.attachments[0].text)
                  
                  )
            .catch(()=>console.log('error'))
}
