function changeQuantity(){
    const quantityControl = document.querySelectorAll('.product__quantity-control')
    const addButton = document.querySelectorAll('.product__add')
    for (let i = 0; i < quantityControl.length; i++){
        quantityControl[i].addEventListener('click', function(){
            if (quantityControl[i].className == 'product__quantity-control product__quantity-control_inc'){
                quantityControl[i].parentElement.children[1].textContent = Number(quantityControl[i].parentElement.children[1].textContent)+1;
            }
            else{
                if (Number(quantityControl[i].parentElement.children[1].textContent) == 1){
                    return false;
                }
                quantityControl[i].parentElement.children[1].textContent = Number(quantityControl[i].parentElement.children[1].textContent)-1;
            }
        })
    }
    for (let i = 0; i <addButton.length; i++){
        addButton[i].addEventListener('click', function(){
            let cartProduct = document.createElement('div');
            cartProduct.innerHTML = `<div class="cart__product" data-id=${addButton[i].parentElement.parentElement.parentElement.dataset.id}>
                                        <img class="cart__product-image" src=${addButton[i].parentElement.parentElement.parentElement.children[1].src}>
                                        <div class="cart__product-count">${addButton[i].previousElementSibling.children[1].outerText}</div>
                                    </div>`
            addToCart(cartProduct)                        
        })
    }

}


function addToCart(product){
    const cart = document.querySelector('.cart__products');
    let cartProducts = document.getElementsByClassName('cart__product');
    if (cartProducts.length == 0){
        cart.insertBefore(product, null);
        return false
    }
    else{
        for (let i = 0; i < cartProducts.length; i++){
            if (cartProducts[i].dataset.id == product.children[0].dataset.id){
               cartProducts[i].children[1].textContent = Number(cartProducts[i].children[1].textContent)+Number(product.children[0].children[1].textContent);
                return false
            }
        }
        cart.insertBefore(product, null);
    }

}

changeQuantity()