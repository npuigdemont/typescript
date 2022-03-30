"use strict";
const url = 'https://icanhazdadjoke.com/slack';
const peticio = fetch(url);
peticio
    .then(datos => datos.json())
    .then(data => console.log(data.attachments[0].text))
    .catch(() => console.log("error"));
//# sourceMappingURL=index.js.map