let priceBeans=2
const coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if(!this.drinkRequirements[drinkType]) alert("sorry we dont make"+drinkType)
    else if(this.drinkRequirements?.[drinkType]<=this.beans) this.beans-=this.drinkRequirements[drinkType]
    else alert("Sorry, we’re all out of beans")    
    },
  buyBeans: function (numBeans)
  {
    if(this.money>numBeans*priceBeans) {
      this.money -= numBeans*priceBeans
      this.beans += numBeans
    } 
    else alert ("no money no honey") 
  }
}
coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(10)
coffeeShop.buyBeans(10)
coffeeShop.buyBeans(10)


