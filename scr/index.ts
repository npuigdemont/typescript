const url='https://icanhazdadjoke.com/slack';
const peticion=fetch(url);
    peticion
    .then(datos => datos.json())
    .then(data =>  console.log(data.attachments[0].text)
    )
    .catch(()=>console.log("error")) 
