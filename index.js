function distanceFromHqInBlocks (someValue) {
    const hqLocation = 42 
    return Math.abs(someValue - hqLocation)
}

function distanceFromHqInFeet(someValue) {
    const distanceInBlocks = distanceFromHqInBlocks(someValue);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
}
 
function distanceTravelledInFeet(start, destination) {
    const distanceFromHqInBlocks =  Math.abs(start - destination);
    return distanceFromHqInBlocks * 264;
}



function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination)*264;
     if (distance <= 400){
       return 0;
     } else if (distance > 400 && distance <= 2000) {
         return (distance - 400)*0.02;
     } else if (distance > 2000 && distance <= 2500) {
         return 25;
     } else {
         return "cannot travel that far";
     }
    }