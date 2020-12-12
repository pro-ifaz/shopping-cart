// for iphone 11

function handleProductChange (isIncrease){
    const productQt = document.getElementById('productQt');
    const productValueNum = parseInt(productQt.value);
    let productNewCount = productValueNum;
    if (isIncrease == true) {
        productNewCount = productValueNum +1;
    }
    if (isIncrease == false && productValueNum > 0){
        productNewCount = productValueNum -1;
    }
    productQt.value = productNewCount;
    const phonePriceTotal =  productNewCount * 1219;
    document.getElementById('phonePrice').innerText = phonePriceTotal;
}



// for iphone case

function handleProductChange2 (isIncrease){
    const productQt = document.getElementById('productQt2');
    const productValueNum = parseInt(productQt.value);
    let productNewCount = productValueNum;

    if (isIncrease ==true){
        productNewCount = productValueNum + 1;
    }
    if (isIncrease ==false && productValueNum > 0) {
        productNewCount = productValueNum -1
    }
    
    productQt.value = productNewCount;
    const productPriceTotal = productNewCount * 59;
    document.getElementById("casePrice").innerText = productPriceTotal;
}