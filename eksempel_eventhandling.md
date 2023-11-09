# Eksempel: javascript event-handling og html ændring

Javascript er programmeringssproget, der giver websites funktionalitet -
hvor html og css er visningen.

Nedenfor ses nogle vigtige øvelser, som i lige skal se, inden i kan forstå koden nedenfor:
- [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)
- [https://www.w3schools.com/js/js_assignment.asp](https://www.w3schools.com/js/js_assignment.asp)
- [https://www.w3schools.com/js/js_functions.asp](https://www.w3schools.com/js/js_functions.asp)
- [https://www.w3schools.com/tags/ev_onclick.asp](https://www.w3schools.com/tags/ev_onclick.asp)
- [https://www.w3schools.com/js/js_htmldom_elements.asp](https://www.w3schools.com/js/js_htmldom_elements.asp)

Håndtering af brugerinput, kaldet events, og ændring i html'en kan anvendes til at bygge kagelisten.
Nedenfor ses et eksempel på dette:

```html
<h2>Spændende website med events...</h2>
<p id="p1">Tryk på knappen</p>
<button onclick="handleClick('p1')">KLIK HER!</button>

<script>
    let tryk = 0;

    function handleClick(id){
        let id1 = document.getElementById(id);
        tryk++;
        id1.innerText = "Du har trykket på knappen " + tryk + " gange ";
    }
</script>
```