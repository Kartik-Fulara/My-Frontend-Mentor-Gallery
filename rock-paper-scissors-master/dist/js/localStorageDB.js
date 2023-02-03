const setToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

const getFromLocalStorage = (key) => {
    let value = localStorage.getItem(key);
    return value !== null ? value : 0;
};
