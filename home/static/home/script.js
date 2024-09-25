const saveToLocalStoreage = (key, data) => {
    localStorage.setItem(key, data)
}

const getFromStorage = (key, default_n) => {
    return JSON.parse(localStorage.getItem(key)) || default_n
}

const onLoad = () => {
    const cart = getFromStorage('cart', [])
    console.log(cart) // проверка возвращения массива
}

document.addEventListener(
    "DOMContentLoaded", () => {
        onLoad() 
    }
)
