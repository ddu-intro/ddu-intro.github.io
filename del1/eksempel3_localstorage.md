# Eksempel : local storage

At gemme data en vigtig del af softwareprodukter, så det ikke forsvinder når man slukker programmet.   
Ofte anvendes forskellige avancerede typer databaser til dette formål.  
Vi skal kigge på en simpel lokal database der eksisterer i alle moderne browsere "local storage".

- [https://www.w3schools.com/js/js_api_web_storage.asp](https://www.w3schools.com/js/js_api_web_storage.asp)

Her er et eksempel på hvordan man kan gemme data vha. lokalstorage:

```html
    <p id="id1">Her står data fra databasen</p>
    <button onclick="doStuff()">KLIK HER!</button>

    <script>
        //Number funktionen anvendes til at sikre antalKlik er et tal!
        let antalKlik = Number(localStorage.getItem("data"));

        function doStuff(){
            antalKlik++;
            document.getElementById("id1").innerHTML = antalKlik;
            localStorage.setItem("data",antalKlik);
        }

    </script>
```
