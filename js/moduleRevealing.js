'use strict';
var balanceModule = (function(){
  // all variables and functions are private
  var balance = 0;

  function logStatus(updateFigure, currentBalance, operatorSymbol, newBalanceFigure){
    console.log(currentBalance + ' ' + operatorSymbol + ' ' + updateFigure + ' = ' + newBalanceFigure);
  }

  function updateBalance(updateFigure, operatorSymbol){
    var newBalanceFigure;

    if(operatorSymbol == '+')
      newBalanceFigure = balance + updateFigure;
    else if(operatorSymbol == '-')
      newBalanceFigure = balance - updateFigure;

    logStatus(updateFigure, balance, operatorSymbol, newBalanceFigure);
    balance = newBalanceFigure;
  }

  function createBalance(initialBalanceAmount){
    updateBalance(initialBalanceAmount, '+');
  }

  function getBalance(){
    return balance;
  }

  function increaseBalance(amount){
    updateBalance(amount, '+');
  }

  function decreaseBalance(amount){
    updateBalance(amount, '-');
  }

  function deleteBalance(){
    updateBalance(balance, '-');
  }

  return {
    // variables and functions only exposed publicly through this returned object literal
    createBalance: createBalance,
    increaseBalance: increaseBalance,
    decreaseBalance: decreaseBalance,
    getBalance: getBalance,
    deleteBalance: deleteBalance
  };
})();

balanceModule.createBalance(100000);
console.log('new account balance: ' + balanceModule.getBalance());
balanceModule.increaseBalance(500000);
console.log('increase account balance: ' + balanceModule.getBalance());
balanceModule.decreaseBalance(200000);
console.log('decrease account balance: ' + balanceModule.getBalance());
balanceModule.deleteBalance();
console.log('delete account balance: ' + balanceModule.getBalance());
