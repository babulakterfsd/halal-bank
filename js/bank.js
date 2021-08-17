// deposit
let depositDisplay = document.getElementById('deposit-display-amount');
let depositBtn = document.getElementById('deposit-add-btn');
depositBtn.addEventListener('click', function() {
    let depositBox = document.getElementById('deposit-input-box');
    let depositValue = depositBox.value;
    let depositAmount = parseFloat(depositValue);

    let previousDeposit = depositDisplay.innerText;
    let previousDepositAmount = parseFloat(previousDeposit)

    depositBox.value = ''

    //update balance
    let balance = document.getElementById('balance-display-amount');
    let previousBalancevalue = balance.innerText;
    let previousBalanceAmount = parseFloat(previousBalancevalue);

    if(depositAmount <= 0 || isNaN(depositAmount)) {
        alert('deposit amount must be greater than 0 and a number')
    } else {
        depositDisplay.innerText = depositAmount + previousDepositAmount;
        let mainBalance = previousBalanceAmount + depositAmount;
        balance.innerText = mainBalance;
    }
    
})



//withdraw
let withdrawDisplay = document.getElementById('withdraw-display-amount');
let withdrawBtn = document.getElementById('withdraw-add-btn');
withdrawBtn.addEventListener('click', function() {
    let withdrawBox = document.getElementById('withdraw-input-box');
    let withdrawValue = withdrawBox.value;
    let withdrawAmount = parseFloat(withdrawValue);

    let previousWithdraw = withdrawDisplay.innerText;
    let previousWithdrawAmount = parseFloat(previousWithdraw)

    //update balance
    let balance = document.getElementById('balance-display-amount');
    let previousBalancevalue = balance.innerText;
    let previousBalanceAmount = parseFloat(previousBalancevalue);

    if(withdrawAmount > previousBalanceAmount) {
        alert('you do not have enough money');
        withdrawBox.value = '';
    }else if(withdrawAmount <= 0 || isNaN(withdrawAmount)) {
        alert('withdraw amount must be greater than 0 and a number');
        withdrawBox.value = '';
    } else {
        withdrawDisplay.innerText = withdrawAmount + previousWithdrawAmount;
        withdrawBox.value = '';

        let mainBalance = previousBalanceAmount - withdrawAmount;
        balance.innerText = mainBalance;
    }
})

//logout
let logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', function() {
    window.location.href = '../index.html'
})