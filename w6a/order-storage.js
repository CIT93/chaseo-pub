
const LOCAL_STORAGE_KEY = 'tshirt_orders_data';

export const saveOrders = function (orders) {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
        console.log('Data has been saved to localStorage Successfully!');

    } catch (error) {
        console.error (`Error saving Data to localStorage: ${error}`);
    };
};

export const loadOrders = function () {
    try {
        const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (dataString) {
            return JSON.parse(dataString);
        }
        return [];
    } catch (e) {
        console.error(`Error loading the entries from localStorage: ${e}`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    };
};