//Imports this file to the other orderhandler
//Imports this file to the price calculator
import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
import * as resultsDisplay from "./results-display.js";
import * as orderStorage from "./order-storage.js";

const orders = [];

//Reference to the Form
const orderForm = document.getElementById('order-form');

//References the Order Summary
//const orderSummary = document.getElementById('order-summary');

//Handles the submit roder function
const handleFormSubmit = function (event) {
    //Stop the reload
    event.preventDefault();

    //Call the Variable to get the data object
    const orderData = orderHandler.getOrderInputs();

    //Update the Page to show order details
    // orderSummary.textContent = `You Ordered ${orderData.qty} ${orderData.size} Shirt(s)${orderData.giftWrap ? ' with Premium Wrap!': ''}`;
    //console.log to return object literal

    const calculatedPrice = priceCalculator.calculateTotal(orderData);

    const newOrder = {
        ...orderData,
        ...calculatedPrice,
        timestamp: new Date().toISOString()
    };

    resultsDisplay.displayResults(newOrder);

    // To store in the list
    orders.push(newOrder);

    console.log(orders);
    orderHandler.clearOrderForm();
};

//     console.log(`Order Input - Object Literal:`);
//     console.log(`key of qty value of ${orderData.qty}`);
//     console.log(`key of size value of ${orderData.size}`);
//     console.log(`key of giftWrap value of ${orderData.giftWrap}`);
//     console.log(orderData);
// };


    //Set up the init function with Event Listeners
    const init = function () {
        console.log('App initialized: DOM is ready! Try submitting the form.');
        const loadedEntries = orderStorage.loadOrders();
        if (loadedEntries.length > 0) {
            orders.push(...loadedEntries);
            console.log('Data has been loaded from localStorage');
        } else {
            console.log('No data has been found in localStorage');
        }
        orderForm.addEventListener('submit', handleFormSubmit);
    };

    //This attaches the init function to the DOM Content Loader event
    document.addEventListener('DOMContentLoaded', init);
