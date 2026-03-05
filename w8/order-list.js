
const orderTableBody = document.getElementById('order-table-body');

const clearBtn = document.getElementById('clear-btn');

//const tableBody = document.getElementById('order-table-body');

let moduleCallbacks = {};

orderTableBody.addEventListener('click', function(event) {
    const target = event.target;
    
    // 1. Get the ID from the button that was clicked
    const id = target.dataset.id;

    // 2. Guard Clause: If they clicked a row (white space) but NOT a button, 
    // there will be no ID. So we stop the function immediately.
    if (!id) return;

    // 3. Temporary Test: Log the ID to prove it works!
    //console.log("Clicked button with ID:", id); 
    if (target.classList.contains('delete-btn')) {
        if (moduleCallbacks.onDelete) {
            moduleCallbacks.onDelete(id);
        }
    }

    if (target.classList.contains('edit-btn')) {
        if (moduleCallbacks.onEdit) {
            moduleCallbacks.onEdit(id);
        }
    }
});

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

export const renderOrders = function (orders, callbacks) {
    moduleCallbacks = callbacks || {};

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
        <td>
            <button class="edit-btn" data-id="${order.id}">Edit</button>
            <button class="delete-btn" data-id="${order.id}">Delete</button>
        </td>
        `;

        // Append
        orderTableBody.appendChild(row);
    }
};