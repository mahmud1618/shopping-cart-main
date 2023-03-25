// ==================================================
//                      for function
// ==================================================

function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);

    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotal = document.getElementById('phone-total')
    phoneTotal.innerText = newPhoneNumber * 1219;
}


// ======================================================
//                    for addEventListener
// ======================================================

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();

})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    newPhoneNumber = updatePhoneNumber(false);
    
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();
})