
const orderTableBody = document.getElementById('order-table-body');

export const renderOrders = function (orders) {

    // Clear
    orderTableBody.innerHTML = '';

    // Loop
    for (const order of orders) {
        // Create Row
        const row = document.createElement('tr');
        
        // Date
        const formateDate = new Date(order.timestamp).toLocaleDateString();

        row.innerHTML = `
        
        <td>${formateDate}</td>
        <td>${order.qty}</td>
        <td>${order.size}</td>
        <td>${order.totalPrice}</td>
        `;

        // Append
        orderTableBody.appendChild(row);
    }
};