function getTextElementValueById(elementId) {
    const textElementId = document.getElementById(elementId);
    const textElementString = textElementId.innerText;
    const textElement = parseInt(textElementString);
    return textElement;
}

function setTextElementValueById(elementId, newValue) {
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = newValue;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    const calculateTaxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const calculateTaxAmount = parseFloat(calculateTaxAmountString);
    setTextElementValueById('tax-amount', calculateTaxAmount);

    const finalTotal = currentSubTotal + calculateTaxAmount;
    setTextElementValueById('final-total', finalTotal);
}