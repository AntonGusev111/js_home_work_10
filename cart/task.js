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
    let cartProducts = document.querySelectorAll('.cart__product');
    const position = Array.from(cartProducts).find(item => item.dataset.id ==  product.children[0].dataset.id);
    if (position){
        console.log(position.children[1].textContent)
        position.children[1].textContent = Number(position.children[1].textContent) + Number(product.children[0].children[1].textContent)
    }
    else {
        cart.insertBefore(product, null);
    }
}





changeQuantity()