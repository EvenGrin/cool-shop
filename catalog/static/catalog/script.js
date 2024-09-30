document.addEventListener('DOMContentLoaded', () => {
    const cartListContainer = document.querySelector('.cart-list')

    cartList.forEach(product => {
        cartListContainer.insertAdjacentHTML(
            'beforeend',
            `
            <li data-id="${product.id}" class="product-item" >
                <img src="${product.imageURL}" alt="пока ничего" class="product-image">
                <div class="product-title"><a href="/catalog/${product.id}">${product.title}</a></div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">${product.price} р</div>
                <div class="cat">
                    <img class="icon"  src="${product.category_icon}">
                    <div class="product-category">${product.category_title}</div>
                </div>
                <div class="position-absolute bottom-0 mb-3">
                   <button class="product-add-button btn btn-success w-100">Добавить в корзину</button> 
                </div>
                
            </li>
            `
        )
    });

})
