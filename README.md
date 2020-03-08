# Pizza-Restaurant
Implementing a pizza restaurant management system

The pizza restaurant is composed of the following personnels:
- 2 Dough chefs - each one has a 7 seconds dough preparation time
- 3 topping chefs - each one has 4 seconds to put toppings on a pizza
- 1 oven - has a 10 seconds preparation time
- 2 waiters - each one serves the pizza in 5 seconds.

### Running the restaurant locally

To run the application locally, execute the following commands:
```sh
npm i
npm run build
sudo node dist/main.js
```
### Running the restaurant in a Docker container

To run the application in a Docker container, execute the following commands:
```sh
docker build -t <YOUR_IMAGE_NAME_OF_CHOICE> .
docker run -v /var/log:/var/log -i <YOUR_CHOSEN_IMAGE_NAME>
```

### Application usage

Both in the Docker case and in the local case, the application receives pizza orders via the standard input of the process.
A pizza order is of the following schema:
> [{"name": "<PIZZA_NAME>", "toppings": ["<TOP_1>", "<TOP_2>", ...]}, ... ]

The application prints the progress of the order to the standard output and to a log file as well.
The file is visibile in <strong>/var/log/pizza-restaurant.log</strong>

The application will be closed upon Ctrl-C, with an appropriate message.

Bon Appétit!
