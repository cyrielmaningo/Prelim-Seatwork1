const calculator = (num1, num2, opt) => {
    
    const operator = ["+","-","/","*"]
    const sum = num1 + num2;
    const diff = num1 / num2;
    const prod = num1 * num2;
    const div = num1 - num2;

    return sum,diff,prod,div,operator;
}
    console.log(calculator(10,6,"+"))

//const diff = (num1, num2) => {
   // const totalDiff = num1 - num2;

   // if(num1 < num2){
   //     return 0;
    //}

   // return totalDiff;
//}

//console.log(diff(6,3))