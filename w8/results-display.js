const orderSummary = document.getElementById('order-summary');

const displayTotal = document.getElementById('display-total');

const displayQty = document.getElementById('display-qty');

const displaySize = document.getElementById('display-size');

const displayGift = document.getElementById('display-gift');

export const displayResults = function (newOrder) {
    // This shows the box
    orderSummary.style.display = 'block';
    // These match above and show the info on the screen
    displayTotal.textContent = newOrder.totalPrice;
    displayQty.textContent = newOrder.qty;
    displaySize.textContent = newOrder.size;
    // Used the ternary operator instead of using the if else
    displayGift.textContent = newOrder.giftWrap ? 'Yes :)' : 'No :(';
};
