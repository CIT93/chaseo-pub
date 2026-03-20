//Imports this file to the other orderhandler
//Imports this file to the price calculator
import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js";
// import * as resultsDisplay from "./results-display.js";
import * as orderStorage from "./order-storage.js";
import * as orderList from './order-list.js';

const orders = [];

//Reference to the Form
const orderForm = document.getElementById('order-form');

const handleDelete = function (id) {
    const indexToDelete = orders.findIndex(function (order) {
        return order.id === id;
    });

    if (indexToDelete !== -1) {
        orders.splice(indexToDelete, 1);
        orderStorage.saveOrders(orders);
        orderList.renderOrders(orders, {
            onDelete: handleDelete,
            onEdit: handleEdit
        });
    }
};

const giftWrapInput = document.getElementById('gift-wrap');
const qtyInput = document.getElementById('qty');
const orderIdInput = document.getElementById('order-id');

const handleEdit = function (id) {
    const orderToEdit = orders.find(function (order) {
        return order.id === id;
    });

    if (orderToEdit) {
        qtyInput.value = orderToEdit.qty;
        document.querySelector('input[name="size"][value="' + orderToEdit.size + '"]').checked = true;
        giftWrapInput.checked = orderToEdit.giftWrap;
        orderIdInput.value = orderToEdit.id;
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
};

//References the Order Summary
//const orderSummary = document.getElementById('order-summary');

//Handles the submit roder function
const handleOrderSubmit = function (event) {
    //Stop the reload
    event.preventDefault();

    //Call the Variable to get the data object
    const orderData = orderHandler.getOrderInputs();

    //Update the Page to show order details
    // orderSummary.textContent = `You Ordered ${orderData.qty} ${orderData.size} Shirt(s)${orderData.giftWrap ? ' with Premium Wrap!': ''}`;
    //console.log to return object literal

    const calculatedPrice = priceCalculator.calculateTotal(orderData);

    const currentOrderId = orderIdInput.value;
    
    if (currentOrderId) {
        const index = orders.findIndex(function (order){
            return order.id === currentOrderId;
        });

        if (index !== -1) {
            orders[index] = {
                ...orders[index],
                ...orderData,
                ...calculatedPrice
            };
        } else {
            const newOrder = {
                id: Date.now().toString(),
                ...orderData,
                ...calculatedPrice,
                timestamp: new Date().toISOString()
            };

            orders.push(newOrder);
        }
    } else {
        const newOrder = {
            id: Date.now().toString(),
            ...orderData,
            ...calculatedPrice,
            timestamp: new Date().toISOString()
        };

        orders.push(newOrder)
    }

    orderStorage.saveOrders(orders);

    orderList.renderOrders(orders, {
        onDelete: handleDelete,
        onEdit: handleEdit
    });
    

    // To store in the list
    //orders.push(newOrder);
    console.log(orders);
    //orderStorage.saveOrders(orders);
    orderHandler.clearOrderForm();
    orderIdInput.value = '';
    orderForm.reset();
};

//     console.log(`Order Input - Object Literal:`);
//     console.log(`key of qty value of ${orderData.qty}`);
//     console.log(`key of size value of ${orderData.size}`);
//     console.log(`key of giftWrap value of ${orderData.giftWrap}`);
//     console.log(orderData);
// };

    const handleClearData = function () {
        orders.length = 0;
        orderStorage.saveOrders(orders);
        orderList.renderOrders(orders, {
            onDelete: handleDelete,
            onEdit: handleEdit
        });
    };


    //Set up the init function with Event Listeners
    const init = function () {
        // console.log('App initialized: DOM is ready! Try submitting the form.');
        const loadedOrders = orderStorage.loadOrders();
        if (loadedOrders.length > 0) {
            orders.push(...loadedOrders);
            // Render the full list instead of just the last one
            orderList.renderOrders(orders, {
                onDelete: handleDelete,
                onEdit: handleEdit
            });
        }
        orderForm.addEventListener('submit', handleOrderSubmit);
        orderList.setClearButton(orders, handleClearData);
    };

    //This attaches the init function to the DOM Content Loader event
    document.addEventListener('DOMContentLoaded', init);
