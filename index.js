//Get elements from html that I will need in js
let myButton = document.getElementById("btn");
let theWeight = document.getElementById("weight");
let theHeight = document.getElementById("height");
let theOutput = document.getElementById("output");
let theAnswer = document.getElementById("answer");



//Declare variables for weight,height and BMI
let weight, height, bmi;

// Create a function for calculating BMI
function userBMI(){
    weight = theWeight.value
    height = theHeight.value
    bmi = (weight/Math.pow(height/100,2)).toFixed(2)
    theAnswer.innerHTML = bmi
 
    
// Underweight = weigh less than or equal to 18.4
// Overweight = weigh 25.0 - 39.9
// Normal weight = weigh 18.5 - 24.9
// Obese weight = weigh more than or equal to 40 and above

if(bmi < 18.4){
theOutput.innerHTML = "You are underweight ";
}
else if((bmi > 18.5) && (bmi <= 24.9) ) {
theOutput.innerHTML = "You fall under normal weight ";
}
else if ((bmi >= 25) && (bmi <= 39.9) ){
theOutput.innerHTML= "You are over weight";
}
else if(bmi >= 40) {
theOutput.innerHTML= "You are obese";
}

}






























