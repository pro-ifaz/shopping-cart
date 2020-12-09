document
    .getElementById('addBtn')
    .addEventListener("click", function () {
        const productQt = document.getElementById('productQt');
        const productValueNum = parseInt(productQt.value);
        const productAdd = productValueNum + 1;
        productQt.value = productAdd;
        const phonePriceTotal = productAdd * 1219;
        document
            .getElementById("phonePrice")
            .innerText = phonePriceTotal;

    })

    document.getElementById("addBtn2").addEventListener("click",function(){
        const productQt2 = document.getElementById('productQt2');
        const productValueNum2 = parseFloat(productQt2.value);
        const productAdd2 = productValueNum2 + 1;
        productQt2.value = productAdd2;
        
        const productPriceTotal = productAdd2 * 59;

        document.getElementById("casePrice").innerText = productPriceTotal;
    })