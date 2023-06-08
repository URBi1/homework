/*let boughtTesla = prompt("You bought tesla - is it true?")
if(boughtTesla==true){
    let isUSCitizen = prompt("You are us sitizen- is it true")
    if(isUSCitizen==true){
        let yearOfTeslaPurchase = prompt("Year of Purchase")
        const CURRENT_YEAR = 2023;
        if(CURRENT_YEAR-yearOfTeslaPurchase>=4){
            let ifLiketoUpgrade = prompt("Would you like to upgrade")     
        }
        else{
            let ifSatisfiedWithCar = prompt("Do you satisfied with Car")
        }
    }
    else{
        let wantToMovetoUS = prompt("Do you want to move to us")
    }
}
else {
    let wantToBuy = prompt("Want to buy a tesla?")
}

*/
 numbers = [1,2,3,4,5,6,7,8,9,10]

console.log(numbers);

numbers.splice(1, 2);
console.log(numbers);


numbers[3] = 1;
console.log(numbers);

numbers.splice(-4);
console.log(numbers);

numbers = [0, ...numbers];
console.log(numbers);

console.log(numbers);
