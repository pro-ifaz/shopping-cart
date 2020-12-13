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
    const phonePriceTotal1 =  productNewCount * 1219;
    document.getElementById('phonePrice').innerText = phonePriceTotal1;

    total ();
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
        productNewCount = productValueNum -1;
    }
    
    productQt.value = productNewCount;
    const casePriceTotal2 = productNewCount * 59;
    document.getElementById("casePrice").innerText = casePriceTotal2;

    total();
}


// grand total

function total () {

    const phonePrice = document.getElementById('phonePrice');
    const phonePriceNum = parseInt(phonePrice.innerText);
    const casePrice = document.getElementById('casePrice');
    const casePriceNum = parseInt(casePrice.innerText);
    const subTotal = phonePriceNum + casePriceNum;

    document.getElementById("subtotal").innerText = subTotal;
    document.getElementById('total').innerText = subTotal;


}
