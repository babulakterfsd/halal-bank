// deposit
let depositDisplay = document.getElementById('deposit-display-amount');
let depositBtn = document.getElementById('deposit-add-btn');
depositBtn.addEventListener('click', function() {
    let depositBox = document.getElementById('deposit-input-box');
    let depositValue = depositBox.value;
    let depositAmount = parseFloat(depositValue);

    let previousDeposit = depositDisplay.innerText;
    let previousDepositAmount = parseFloat(previousDeposit)

    depositDisplay.innerText = depositAmount + previousDepositAmount;
    depositBox.value = ''

    //update balance
    let balance = document.getElementById('balance-display-amount');
    let previousBalancevalue = balance.innerText;
    let previousBalanceAmount = parseFloat(previousBalancevalue);
    let mainBalance = previousBalanceAmount + depositAmount;
    balance.innerText = mainBalance;
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

    withdrawDisplay.innerText = withdrawAmount + previousWithdrawAmount;
    withdrawBox.value = ''

    //update balance
    let balance = document.getElementById('balance-display-amount');
    let previousBalancevalue = balance.innerText;
    let previousBalanceAmount = parseFloat(previousBalancevalue);
    let mainBalance = previousBalanceAmount - withdrawAmount;
    balance.innerText = mainBalance;
})

//logout
let logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', function() {
    window.location.href = '../index.html'
})