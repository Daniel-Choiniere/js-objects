var fruitTwo = {apples: 35, 
				oranges: 10,
				grapes: 110,
				
 				totalFruit: function() {
					var allTheFruits = this.apples + this.oranges + this.grapes
					return "There are " + allTheFruits + " total fruits in stock."
				},
				appleCount: function(adjustApple) {
					var newAppleCount = this.apples + adjustApple
					if (newAppleCount < 5) {
						return "There are " + newAppleCount + " apples in stock. We need to order more apples ASAP!"
					} else {
						return "There are " + newAppleCount + " apples in stock. Sufficent apples in stock, check apple inventory again in three days."
					}
				},
				orangeCount: function(adjustOrange) {
					var newOrangeCount = this.oranges + adjustOrange
						if (newOrangeCount < 5) {
						return "There are " + newOrangeCount + " oranges in stock. We need to order more oranges ASAP!"
					} else {
						return "There are " + newOrangeCount + " oranges in stock. Sufficent oranges in stock, check orange inventory again in three days."
					}
				},
				grapeCount: function(adjustGrape) {
					var newGrapeCount = this.grapes + adjustGrape
						if (newGrapeCount < 5) {
						return "There are " + newGrapeCount + " grapes in stock. We need to order more grapes ASAP!"
					} else {
						return "There are " + newGrapeCount + " grapes in stock. Sufficent grapes in stock, check grape inventory again in three days."
					}
				},
				fruitSold: function(num) {
					if (((this.apples + this.oranges + this.grapes) - num) < 20) {
						return "There are now " + ((this.apples + this.oranges + this.grapes) - num) + " fruits in stock. We will run out of food to sell soon if order is not placed!!"
					} else {
						return "There are now " + ((this.apples + this.oranges + this.grapes) - num) + " fruits in stock. Do complete inventory again in three days.";
					}
				}
				
			};



console.log(fruitTwo.totalFruit());
console.log(fruitTwo.appleCount(-31));
console.log(fruitTwo.orangeCount(3));
console.log(fruitTwo.grapeCount(-99));
console.log(fruitTwo.fruitSold(100));
