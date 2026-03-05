
const orderTableBody = document.getElementById('order-table-body');

const clearBtn = document.getElementById('clear-btn');

let confirmClear = false;
let confirmTimeoutId = null;

const resetClearButton = function () {
    if (confirmTimeoutId) {
        clearTimeout(confirmTimeoutId);
    }

        confirmClear = false;
        clearBtn.textContent = 'Clear Data';
};

export const setClearButton = function (orders, isConfirmClear) {
    clearBtn.style.display = 'none';

    clearBtn.addEventListener('click', function () {
        
        if (!confirmClear) {

            confirmClear = true;

            clearBtn.textContent = 'This will delete your data! Are you sure?'

            confirmTimeoutId = setTimeout (function () {
                resetClearButton();
            },  5000);
        } else {
            resetClearButton();
            isConfirmClear();
        }
    });
};

export const renderOrders = function (orders) {

    // Clear
    orderTableBody.innerHTML = '';

    if (orders.length === 0) {
        clearBtn.style.display = 'none';
        return;
    } else {
        clearBtn.style.display = 'block';
    }

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