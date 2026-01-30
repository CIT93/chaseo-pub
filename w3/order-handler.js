const orderForm = document.getElementById("order-form");

//References the Quantity Input
const qtyInput = orderForm.querySelector("#qty");

//References the Gift Wrap Checkbox
const giftWrapInput = orderForm.querySelector("#gift-wrap");

//References all the size radio buttons
const sizeRadios = orderForm.querySelectorAll('input[name="size"]');

//This shows what size radio button is selected
const getSelectedRadioValue = function (radioButtons) {
  for (const radio of radioButtons) {
    if (radio.checked) return radio.value;
  }
    return null;
};


export const getOrderInputs = function () {
    console.log('Get order form inputs')
    return {
       qty: parseInt(qtyInput.value) || 1,
       size: getSelectedRadioValue(sizeRadios),
       giftWrap: giftWrapInput.checked, 
    };
};
