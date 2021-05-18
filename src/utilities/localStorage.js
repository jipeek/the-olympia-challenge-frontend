export const load = item => {
    try {
        return localStorage.getItem(item);
    } catch (err) {
        return null;
    }
};
export const save = (item, data) => {
    try {
        localStorage.setItem(item, data);
    } catch (err) {
        //Ignore write when is error
    }
};
export const loadObject = item => {
    try {
        const serializedState = localStorage.getItem(item);
        return JSON.parse(serializedState);
    } catch (err) {
        return null;
    }
};
export const saveObject = (item, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(item, serializedState);
    } catch (err) {
        //Ignore write when is error
    }
};
export const deleteItem = item => {
    try {
        localStorage.removeItem(item);
    } catch (err) {
        //Ignore write when is error
    }
};

export const clear = () => {
    try {
        localStorage.clear();
    } catch (err) {
        //Ignore write when is error
    }
};
