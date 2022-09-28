let name = document.querySelector('.name');
let money = document.querySelector('.money');

let addUser = document.querySelector('.add-user');
let currentBalance = document.querySelector('.current-balance');

let accountName = document.querySelector('.account-name');

let deposit = document.querySelector('.deposit');
let withdraw = document.querySelector('.withdraw');

let makechange = document.querySelector('.make-change');

let errormessage = document.querySelector('.error-message');

let userData = {};


// Create a new account and adding the user information to the screen 
addUser.addEventListener('click', function (e) {
    e.preventDefault();
    getUser();
    displayAccount();

});

function getUser() {
    userData[name.value] = money.value;
    name.value = '';
    money.value = '';
    console.log(userData);

}

function displayAccount() {
    let account = '';
    let balance = '';

    for (const key in userData) {
        account += `${key}'s Account `;
        balance += userData[key];
    }
    currentBalance.innerHTML = balance;
    accountName.innerHTML = account;
}


// Making changes to the accout such as deposting withdrawing 

makechange.addEventListener('click', function (e) {
    e.preventDefault();
    transaction();
    

});

function transaction() {
    if (deposit.value && withdraw.value) {
        let message = '';

        message += `   <div class="alert alert-danger" role="alert">
        Can't deposit and with draw at the same time 
      </div>`
        errormessage.innerHTML = message;
        deposit.value = '';
        withdraw.value = '';
        


    }

    else if (deposit.value) {
        let total = Number(deposit.value) + Number(currentBalance.textContent);
        currentBalance.innerHTML = total;
        deposit.value = '';
        console.log(total);
        errormessage.style.display="none";
    }
    else if (withdraw.value) {
        let total = Number(currentBalance.textContent) - Number(withdraw.value)
        currentBalance.innerHTML = total;
        withdraw.value = '';
        console.log(total);
        errormessage.style.display="none";
    }

}