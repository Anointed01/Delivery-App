var cardPasta = document.getElementById('pasta-card');
var cardSalad = document.getElementById('salad-card');
var cardDisserts = document.getElementById('desserts-card');

var pastaDesc = document.getElementById('pasta-desc');
var saladDesc = document.getElementById('salad-desc');
var dessertsDesc = document.getElementById('desserts-desc');

cardPasta.addEventListener("click", ()=>{
    saladDesc.style.display = "none";
    pastaDesc.style.display = "block";
    dessertsDesc.style.display = "none";
    cardPasta.classList.add("cardStyle");
    cardSalad.classList.remove("cardStyle");
    cardDisserts.classList.remove("cardStyle");

});
cardSalad.addEventListener("click", ()=>{
saladDesc.style.display = "block";
pastaDesc.style.display = "none";
dessertsDesc.style.display = "none";
cardPasta.classList.remove("cardStyle");
cardSalad.classList.add("cardStyle");
cardDisserts.classList.remove("cardStyle");
});
cardDisserts.addEventListener("click", ()=>{
    saladDesc.style.display = "none";
    pastaDesc.style.display = "none";
    dessertsDesc.style.display = "block";
    cardPasta.classList.remove("cardStyle");
    cardSalad.classList.remove("cardStyle");
    cardDisserts.classList.add("cardStyle");

});