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
    create: function(initialBalanceAmount){
      updateBalance(initialBalanceAmount, '+');
    },
    get: function(){
      return balance;
    },
    increase: function(amount){
      updateBalance(amount, '+');
    },
    decrease: function(amount){
      updateBalance(amount, '-');
    },
    deleteBalance: function(){
      updateBalance(balance, '-');
    }
  };
})();

balanceModule.create(100000);
console.log('new account balance: ' + balanceModule.get());
balanceModule.increase(500000);
console.log('increase account balance: ' + balanceModule.get());
balanceModule.decrease(200000);
console.log('decrease account balance: ' + balanceModule.get());
balanceModule.deleteBalance();
console.log('delete account balance: ' + balanceModule.get());
