

const PizzaRestaurant = require("./pizza-restaurant").default;

const pizzaRestaurant = new PizzaRestaurant();

pizzaRestaurant.listenToClients([["onion", "garlic", "riba"], ["zevel", "water", "marak", "daisa"]])