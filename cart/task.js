function changeQuantity(){
    const quantityControl = document.querySelectorAll('.product__quantity-control')
    for (let i = 0; i < quantityControl.length; i++){
        quantityControl[i].addEventListener('click', function(){
            if (quantityControl[i].className == 'product__quantity-control product__quantity-control_inc'){
                quantityControl[i].parentElement.children[1].textContent = Number(quantityControl[i].parentElement.children[1].textContent)+1;
            }
            else{
                if (Number(quantityControl[i].parentElement.children[1].textContent) == 0){
                    return false;
                }
                quantityControl[i].parentElement.children[1].textContent = Number(quantityControl[i].parentElement.children[1].textContent)-1;
            }
        })
    }
}


changeQuantity()