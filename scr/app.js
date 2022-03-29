const API_URL = "https://icanhazdadjoke.com/";

const HTMLResponse = document.querySelector('#app');

//const dades;

/*fetch(`${API_URL}/slack`)
    .then((response)=> response.json())
    .then(json => console.log(json));*/
//amb json no arriben dades
fetch('https://icanhazdadjoke.com/', {method :'GET', mode: 'no-cors', headers: {'Accept': 'application/json', 'User-Agent': ''}})
      .then(response => response.json())
      .then(data => console.log(data));
      HTMLResponse = <div>${data}</div>

