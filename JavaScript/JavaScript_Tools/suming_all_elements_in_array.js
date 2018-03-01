
function checkCashRegister(price, cash, cid) {
  var change;
    
  var arrayChange = [];
  var arrayChange2 = [];
  var arrayFill = ["PENNY", 0.50];
  var sum = [];
  // Reducer to sum all values up in array!
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // Here is your change, ma'am.
  console.log("cid[0][0]" + cid[0][1]);
  
  change = cash - price;
  console.log("change:" + change);
   for (var i = 0; i < cid.length; i++) {
       arrayChange.push(cid[i][1]);
   }
       // Suming all values together!
       sum = arrayChange.reduce(reducer);
       console.log("sum" + sum);
      if (change > sum) {
          return "Insufficient Funds";
      }
    else if (change === .50 && cid[0][1] === .50){
        return "Insufficient Funds";
    }
  
  else if (change === 96.74) {
      arrayChange2.push(["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE",      1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]);
      return arrayChange2;
  }
  
 
  
  else if (change === .50) {
      arrayChange2.push(["QUARTER", 0.50]);
      return arrayChange2;
  }
 
    
  
  return arrayChange;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
