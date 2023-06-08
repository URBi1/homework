let priceBeans=2
const coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 3},
    doubleShot: {beanRequirement:15, proce: 6},
    frenchPress: {beanRequirement:12, proce: 5}
  },

  makeDrink: function (drinkType) {
    if(!this.drinkRequirements[drinkType]) alert("sorry we dont make"+drinkType)
    else if(this.drinkRequirements?.[drinkType].beanRequirement<=this.beans) 
    this.beans-=this.drinkRequirements[drinkType].beanRequirement
    else alert("Sorry, we’re all out of beans")    
    },
  buyBeans: function (numBeans)
  {
    if(this.money>numBeans*priceBeans) {
      this.money -= numBeans*priceBeans
      this.beans += numBeans
    } 
    else alert ("no money no honey") 
  },
  buyDrink: function(drinkType) {
    if(this.drinkRequirements[drinkType]) {
      this.money += this.drinkRequirements[drinkType].price
      this.makeDrink(drinkType)
    } 
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
coffeeShop.buyDrink("her")
coffeeShop.buyDrink("latte")
coffeeShop.buyDrink("americano")
coffeeShop.buyDrink("latte")
coffeeShop.buyDrink("latte")
coffeeShop.buyDrink("latte")
coffeeShop.buyDrink("latte")
coffeeShop.buyDrink("latte")
coffeeShop.buyDrink("latte")



