'use strict';
var balanceModule = (function(){
  // all variables and functions are private
  var balance = 0;

  function logStatus(updateFigure, currentBalance, operatorSymbol, newBalanceFigure){
    console.log(currentBalance + ' ' + operatorSymbol + ' ' + updateFigure + ' = ' + newBalanceFigure);
  }

  function update(updateFigure, operatorSymbol){
    var newBalanceFigure;

    if(operatorSymbol == '+')
      newBalanceFigure = balance + updateFigure;
    else if(operatorSymbol == '-')
      newBalanceFigure = balance - updateFigure;

    logStatus(updateFigure, balance, operatorSymbol, newBalanceFigure);
    balance = newBalanceFigure;
  }

  function create(initialBalanceAmount){
    update(initialBalanceAmount, '+');
  }

  function getBalance(){
    return balance;
  }

  function increase(amount){
    update(amount, '+');
  }

  function decrease(amount){
    update(amount, '-');
  }

  function deleteBalance(){
    update(balance, '-');
  }

  return {
    // variables and functions only exposed publicly through this returned object literal
    create: create,
    increase: increase,
    decrease: decrease,
    getBalance: getBalance,
    deleteBalance: deleteBalance
  };
})();

balanceModule.create(100000);
console.log('new account balance: ' + balanceModule.getBalance());
balanceModule.increase(500000);
console.log('increase account balance: ' + balanceModule.getBalance());
balanceModule.decrease(200000);
console.log('decrease account balance: ' + balanceModule.getBalance());
balanceModule.deleteBalance();
console.log('delete account balance: ' + balanceModule.getBalance());
