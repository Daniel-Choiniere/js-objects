//create an exchage rate calculator
//create an object with all currencies and there current exchange rates
//ask the user for the amount of money they have 
//ask the user what currenct they would like to convert to
//return the amount of money they have in the new currency


//var currencyAbbrev = ["AUD", "GBP", "EUR", "JPY", "CHF", "USD", "AFN", "ALL", "DZD", "AOA"];

var readline = require('readline-sync'); 
var toConvert = readline.question("How much money in USD dollars do you have to exchange?");
var exchange = readline.question("What currency would you like to convert to? (use the three letter abbreviation Capitalized)")

//console.log(exchange);

var currencies = {
        AUD: 1.40446,
        GBP: 0.75771,
        EUR: 0.86376,
        JPY: 112.21,
        CHF: 0.99069,
        AFN: 75.5237,
        ALL: 107.697,
        DZD: 117.996,
        AOA: 301.442,
        
        
        toExchange: function() {
					var newExchange = this[exchange]  * toConvert
					return "You now have " + newExchange +  exchange + " dollars."
				},
}

console.log(currencies.toExchange());

