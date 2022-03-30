"use strict";
window.onload = function() {
    weather();
  };
	
function weather() {

    fetch('https://www.el-tiempo.net/api/json/v2/provincias/08', {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
      
        .then(quote => quote.json())
  
        .then(data => {
            console.log(data);
            document.getElementById("weather").innerHTML = `Avui: ${data.ciudades[6].stateSky.description}`;
        }
        )
  }
	
		
