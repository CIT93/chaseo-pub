// The Price for the Shirt and the Gift Wrap!
const shirtPrice = 15;
const giftWrapPrice = 2;


export const calculateTotal = function(orderData) {
    // To make sure it will always be a number
    const qty = parseInt(orderData.qty) || 0;

    let total = qty * shirtPrice;
    
    // Keyword in this requirement is "if"
    if (orderData.giftWrap) {
        // Add the Gift Wrap to the entire price
        total += giftWrapPrice;
    }
    return { totalPrice: total };
};