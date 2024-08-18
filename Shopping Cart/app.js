// function for update case numnber

function updateProductNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing) {
        caseNumber = parseInt(caseNumber) + 1;

    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;

    // update the product price
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();

}
function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}
function calculateTotal() {
   
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    // update on html total
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

// update case input
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case',59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case',59, false);

});

// update phone number
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219 , true);

});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone',1219, false);
});    
