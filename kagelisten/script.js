
let navne = [
    "anne",
    "hanne",
    "sanne"
];

for(let i = 0 ; i < navne.length ; i++){
    
    let valueP = document.createElement("p");
    valueP.textContent = 0; 
    valueP.style.display = "inline";
    valueP.addEventListener("click",doStuff);


    let nyP = document.createElement("p");
    nyP.textContent = navne[i] + " : ";
    nyP.appendChild(valueP);    
    document.body.appendChild(nyP);

}



function doStuff(event){
    event.target.textContent = Number(event.target.textContent) + 1;
}

