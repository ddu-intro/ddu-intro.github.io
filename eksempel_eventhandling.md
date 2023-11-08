# Eksempel: javascript event-handling og html ændring

Javascript er programmeringssproget, der giver websites funktionalitet -
hvor html og css er visningen.

Funktiomaliteteten kan være mange forskellige ting, men specielt det and håndtere brugerinput og ændre i html'en, dvs. visningen er en af js hovedfunktionaliteter.

Nedenfor ses en html og js kode blandet sammen:

```html
<h2>Spændende website med events...</h2>
<p id="p1">Tryk på knappen</p>
<button onclick="handleClick('p1')">KLIK</button>

<script>
    let tryk = 0;

    function handleClick(id){
        let id1 = document.getElementById(id);
        tryk++;
        id1.innerText = "Du har trykket på knappen " + tryk + " gange ";
    }
</script>
```

