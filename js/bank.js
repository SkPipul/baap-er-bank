// step:1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step:2 get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step:3 get the current deposit total
    // for the non input(element other than input, textarea) use innertext to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const prevDepositTotalString = depositTotalElement.innerText;
    const prevDepositTotal = parseFloat(prevDepositTotalString);
    
    // step:4 add numbers to set the total deposit
    const currentDepositTotal = prevDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step:5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalElementString = balanceTotalElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalElementString);

    // step:6 calculate current total balance
    const currentBalanceTotal = prevBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    depositField.value = '';
})

// withdraw section

// step:1 add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step:2 get the withdraw amount from the withdraw input field
    // for input field use .value to the value inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString); 

    // step:3 get the current withdraw total
    // for the non input(element other than input, textarea) use innertext to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = withdrawTotalElement.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);

    // step:4 add numbers to set the total deposit
    const currentWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    // set the deposit total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step:5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalElementString = balanceTotalElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalElementString);

    // step:6 calculate current total balance
    const currentBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    withdrawField.value = '';
})