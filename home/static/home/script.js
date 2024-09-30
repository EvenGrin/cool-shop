let productList = []
let cartList = []

// Функции для сохранения данных в хранилище
const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

const getFromStorage = (key, default_) => {
    return JSON.parse(localStorage.getItem(key)) || default_;
}

// Парсинг карточек товара
const getProducts = () => {
    document.querySelectorAll('.product-item').forEach(element => {
        const productID = element.dataset.id
        const isInCart = cartList.some(productInCart => productInCart.id === productID);

        if (isInCart) {
            element.querySelector(".product-add-button").textContent = "Удалить из корзины"
            element.querySelector(".product-add-button").classList.remove('btn-success');
            element.querySelector(".product-add-button").classList.add('btn-danger');
        }

        productList.push({
            id: productID,
            title: element.querySelector(".product-title > a").textContent,
            description: element.querySelector(".product-description").textContent,
            imageURL: element.querySelector(".product-image").src,
            price: element.querySelector(".product-price").textContent,
            category_icon: element.querySelector(".icon").src,
            category_title: element.querySelector(".product-category").textContent
        })
    })
}

// Обработка событий карточки товара
const handleProductEvents = () => {
    document.querySelectorAll('.product-item').forEach(element => {
        const productID = element.dataset.id;
        element.querySelector('.product-add-button').addEventListener('click', event => {
            const isInCart = cartList.some(productInCart => productInCart.id === productID);

            if (isInCart) {
                event.target.classList.add('btn-success');
                event.target.classList.remove('btn-danger');
                event.target.textContent = "Добавить в корзину"
                cartList = cartList.filter(productInCart => productInCart.id !== productID);

            } else {
                event.target.classList.remove('btn-success');
                event.target.classList.add('btn-danger');
                event.target.textContent = "Удалить из корзины"
                const productToAdd = productList.find(productInList => productInList.id === productID);
                cartList.push(productToAdd);
            }

            saveToLocalStorage('cart', cartList)
        })
    })
}

// Функция вызова при загрузке страницы
const onLoad = () => {
    cartList = getFromStorage('cart', []);

    getProducts();
    handleProductEvents();
}

document.addEventListener("DOMContentLoaded", () => {
    onLoad();
})