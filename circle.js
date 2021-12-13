var pi = 3.14;

function circleArea(r) {
    return pi*r*r;
    // for (let i =lownumber; i <= highNumber; i++) {
    //     let isPrime = true;
    //     for (let j = 2; j <= i; j ++) {
    //         if( i % j ===0 && j !==i) {
    //             isPrime = false
    //         }
    //     }

    //     if(isPrime) {
    //         console.log(i);
    //     }
    // }
}

function circleCircumference(r) {
    return 2*pi*r;
}
module.exports = {
    circleArea,
    circleCircumference
}