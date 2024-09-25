const saveToLocalStoreage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data)) // сохрание в лк
}

const getFromStorage = (key, default_n) => {
    return JSON.parse(localStorage.getItem(key)) || default_n // условие
}

const onLoad = () => {
    const cart = getFromStorage('cart', [])
}

document.addEventListener(
    "DOMContentLoaded", () => {
        onLoad() 
    }
)
