// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber){
    let distanceBlocks;
    distanceBlocks = Math.abs(streetNumber-42);
    return distanceBlocks;
}

function distanceFromHqInFeet(streetNumber) {
    let distanceFeet;
    distanceFeet = distanceFromHqInBlocks(streetNumber)*264;
    return distanceFeet;
}
 function distanceTravelledInFeet(start, destination){
     let blockDif;
     blockDif = Math.abs((start-destination)*264);
     return blockDif;
 }

 function calculatesFarePrice(start, destination) {
     let fare;
     let fareDistance = distanceTravelledInFeet(start, destination);

     if (fareDistance<=400) {
        fare = 0;
     } else if(fareDistance>400 && fareDistance<=2000){

        fare = (fareDistance-400)*0.02;

     } else if(fareDistance>2000 && fareDistance<=2500){

        fare = 25;

     } else if(fareDistance>2500){

         fare = `cannot travel that far`;

     }
     return fare;
 }