
function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  
  // if change total === cid total
      // return "Closed"
  
  // else if change total > cid total
      // return "Insufficient Funds"
  
  // else
    
    // due = price - cash
    // for each currency in drawer starting from highest
      // remainder of currency
    
      
  
 // return change
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

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
