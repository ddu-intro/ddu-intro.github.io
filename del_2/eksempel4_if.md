# Eksempel : if statements

Det er ofte nødvendigt at forgrene kode i forskellig retning. Dette kaldes flow-control, og if-statements er en af den vigtigste måde at skabe flow-control.

- [https://www.w3schools.com/js/js_if_else.asp](https://www.w3schools.com/js/js_if_else.asp)

```html    
    <p id="id1">0</p>
    <button onclick="doStuff('+1')">TÆL OP!</button>
    <button onclick="doStuff('-1')">TÆL NED!</button>

    <script>
        let v = 0;

        function doStuff(t){
            v = v + Number(t) ;
            document.getElementById("id1").innerHTML = v;
        }

    </script>
```