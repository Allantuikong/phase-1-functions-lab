// Code your solution in this file!
const scuberHq = 42;
let pickUp;


//  distanceFromHqInBlocks()
function distanceFromHqInBlocks(pickUp){
    if (pickUp > scuberHq){
        return pickUp -scuberHq;
    } else if (scuberHq > pickUp){
        return scuberHq - pickUp;
    }
} 

console.log(distanceFromHqInBlocks(43));

//   distanceFromHqInFeet()
// Each block = 264 feet
function distanceFromHqInFeet(pickUp){
    const blocks = distanceFromHqInBlocks(pickUp);
    return blocks * 264;
} 
console.log(distanceFromHqInFeet(43));

//  distanceTravelledInFeet()


function distanceTravelledInFeet(start, destination){

    if (start === destination) {
        return 0;
    }   else {
        const distance = Math.abs(start-destination) * 264;
        return distance;
    }

    // if(start> destination){
    //     return ((start - destination)*264);
    // }   else if(destination > start){
    //     return ((destination -start)*264);
    // }
}

console.log(distanceTravelledInFeet(43,48));

//  calculatesFarePrice(start, destination)

function calculatesFarePrice(start, destination){
    const fare = distanceTravelledInFeet(start, destination);

    if (fare<=400){
        return 0;
    }   else if (fare >400 && fare<=2000) {
        return (fare -400) * 0.02;
    }   else if (fare > 2000 && fare <= 2500) {
        return 25;
    }   else if (fare>2500) {
        return "cannot travel that far";
    }

}

console.log(calculatesFarePrice(43,48));
