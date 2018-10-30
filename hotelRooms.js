// create a Hotel object with four avaliable rooms for rent, with ammenties and prices for each.

var readline = require('readline-sync'); 


var rooms = {
        single: {
            available: true,
            beds: 1,
            sqft: 500, 
            televisionSize: 32, 
            sleeps: 2,
            price: 100,
        },
        double: {
            available: true,
            beds: 2,
            sqft: 500,
            televisionSize: 32,
            sleeps: 4,
            price: 120,
        },
        king: {
            available: true,
            beds: 2,
            sqft: 750,
            televisionSize: 50,
            sleeps: 4,
            price: 200,
        },
        family: {
            available: true,
            beds: 3,
            sqft: 1100,
            televisionSize: 50,
            sleeps: 8,
            price: 300,
        },
    };
    

    var availableRooms = " ";
    var room = readline.question("Welcome to the Div\'inn! What room are you interested in?");
    room = room.toLowerCase();
    
     if (room == "single") {
        rooms.single.available = false;
    }
    
    if (room == "double") {
        rooms.double.available = false;
    }
    
    if (room == "single") {
        rooms.king.available = false;
    }
    
    if (room == "single") {
        rooms.family.available = false;
    }
    
    console.log("The " + room + " is a great choice!")
    var roomTax = ((rooms[room].price * .07) + rooms[room].price)
    console.log("The " + room + " costs $" + roomTax + " with tax")
    
    var yesNo = readline.question("Do you need to rent another room? Yes, or No")
    yesNo = yesNo.toLowerCase();
    
    if (yesNo === "yes") {
        var nextRoom = readline.question("Ok, great what room would you like?")
    }
    
    if (rooms[nextRoom].available === false) {
        console.log("I'm sorry the " + nextRoom + " is not currently available")
    } else {
        console.log("The " + nextRoom + " is a great choice!")
        var nextRoomTax = ((rooms[nextRoom].price * .07) + rooms[nextRoom].price)
        console.log("The " + nextRoom + " costs $" + nextRoomTax + " with tax")
    };
    
    console.log("Your total cost today is $" + (roomTax + nextRoomTax))
    
    
   
    
    
    
    
    
    
    
    
    
    
 
    
    
    