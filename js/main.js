
const confirmBtnElement = document.getElementById("confirmBtn");
const ageElement = document.getElementById("age");
const distanceElement = document.getElementById("distance");

confirmBtnElement.addEventListener("click", function(){
    
    const age = ageElement.value;
    const distance = distanceElement.value;
    const prezzoKm = 0.21;

    let costoBiglietto = distance * prezzoKm;

    if(age == "junior") {
        costoBiglietto = costoBiglietto * 0.80;
    } else if(age == "senior") {
        costoBiglietto = costoBiglietto * 0.60;
    }

    costoBiglietto = costoBiglietto.toFixed(2);
    
    console.log(age);
    console.log(distance);
    console.log(prezzoKm);
    console.log(costoBiglietto);

});
