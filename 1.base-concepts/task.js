"use strict"

function solveEquation (a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d < 0) {
    return arr;
  }
  if (d === 0) {
    arr.push(-b/(2*a));
    return arr;
  }
  if (d > 0) {
    arr.push ((-b + Math.sqrt(d) )/(2*a));
    arr.push ((-b - Math.sqrt(d) )/(2*a));
    return arr;
  }
}


function calculateTotalMortgage (percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 100 / 12; //месячный процент
  let loanBody = amount - contribution; //тело кредита
  let monthlyPayment = loanBody* (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths - 1)))); // ежемесячный платеж
  let totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));
  return totalAmount;  
}