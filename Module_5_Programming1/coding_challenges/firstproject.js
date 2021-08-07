//https://codepen.io/miguelacruz/pen/vYmVMdX

const weeklyIncome = parseInt(prompt("Weekly Income:"));
const foodCost = parseInt(prompt("Food cost:"));
const housingCost = parseInt(prompt("Housing cost:"));
const transCost = parseInt(prompt("Transportation cost:"));
const otherCost = parseInt(prompt("Other costs:"));

const yearlySav = parseInt(prompt("How much do you want to save in a year?"))

let potentialSav = yearlySav/52;

let totExpense = foodCost+housingCost+transCost+otherCost;
let leftOver = weeklyIncome-totExpense;

if (leftOver > potentialSav) {
  console.log("Nice! You are on track.");
} else {
  let x = potentialSav-leftOver;
  var y = x.toFixed(2);
  console.log("You must save $"+ y +" more a week.");
}
