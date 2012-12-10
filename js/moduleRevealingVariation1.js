'use strict';
var BalanceModule = (function(){
  function BalanceModule(){
  }

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

  BalanceModule.prototype.get = function(){
    return balance;
  };

  BalanceModule.prototype.increase = function(amount){
    updateBalance(amount, '+');
  };

  BalanceModule.prototype.decrease = function(amount){
    updateBalance(amount, '-');
  };

  BalanceModule.prototype.deleteBalance = function(){
    updateBalance(balance, '-');
  };

  return BalanceModule;
})();

var balanceModule = new BalanceModule();
balanceModule.increase(1000000);
console.log('balanceModule total: ' + balanceModule.get());

var balanceModule2 = new BalanceModule();
balanceModule2.increase(500);
console.log('balanceModule2 total: ' + balanceModule2.get());

console.log(balanceModule === balanceModule2);
