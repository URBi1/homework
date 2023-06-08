const tipJar = {
  coinCount: 20,
  stealCoins: function(number1){
    this.coinCount -= number1
  },
  tip: function () {
    this.coinCount += 1;
  }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);