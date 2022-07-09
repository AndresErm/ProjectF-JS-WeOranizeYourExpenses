// console.log("Hi Youre The best in 15 Days André Start Whit This SHIT");

let price = 2300;
const discountStatic = [50 , 60 , 40];
let extractDiscounts = discountStatic.slice(function(values){
    values[0];
    console.log(  values );
});
console.log(extractDiscounts);


let calculatingSpendPerDay = function(price){
    
    let operationGetDiscountFinal = 100 - extractDiscounts[0]; 
    let operationGetPriceFinalFirst = ( price * operationGetDiscountFinal ) / 100;
    let getValPriceFinalOne = operationGetPriceFinalFirst;
    let operationGetPriceFinalSecond = getValPriceFinalOne * extractDiscounts[1] / 100;
    let operationGetPriceFinalThree = (getValPriceFinalOne * extractDiscounts[2]) / 100;
    // let returnValuesMoneySpendPerDay = console.log( "1: ", getValPriceFinal + "  " 
    //     + "2: ", operationGetPriceFinalSecond + "  "
    //     + "3: ", operationGetPriceFinalThree  )
    
    return [ "\n"+"CANTIDAD PARA GASTAR EN GASTOS BASICOS: " + getValPriceFinalOne, "\n--------------"+"CANTIDAD PARA AHORRAR: " +operationGetPriceFinalSecond ,"\n------------" +"CANTIDAD PARA GASTOS PERSONALES: " +operationGetPriceFinalThree];
    
};



let onClickButtonSpendYouSalariPerDay = function(){
    const inputGetSalary = document.getElementById("InputGetSalaryNeto");

    const salaryValue = inputGetSalary.value;
    console.log( salaryValue );

    const salaryFinallySpendPerDay = calculatingSpendPerDay(salaryValue);
    console.log( salaryFinallySpendPerDay );

    const resulP = document.getElementById("ResultEquilibrioEconomic");
    resulP.textContent = "Spend PER Day: "+ salaryFinallySpendPerDay; 
    


}