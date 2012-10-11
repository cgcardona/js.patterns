'use strict';
var balanceModule = (function(){
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

  return {
    createBalance: function(initialBalanceAmount){
      updateBalance(initialBalanceAmount, '+');
    },
    getBalance: function(){
      return balance;
    },
    increaseBalance: function(amount){
      updateBalance(amount, '+');
    },
    decreaseBalance: function(amount){
      updateBalance(amount, '-');
    },
    deleteBalance: function(){
      updateBalance(balance, '-');
    }
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
