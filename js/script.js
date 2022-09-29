let name = document.querySelector('.name');
let money = document.querySelector('.money');

let addUser = document.querySelector('.add-user');
let currentBalance = document.querySelector('.current-balance');

let accountName = document.querySelector('.account-name');

let deposit = document.querySelector('.deposit');
let withdraw = document.querySelector('.withdraw');

let makechange = document.querySelector('.make-change');

let errormessage = document.querySelector('.error-message');




class User {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


User.prototype.createAccount = function() {
    let account = '';
    let balance = '';

    account += `${this.name}'s Account `;
    balance += this.amount;

    name.value = '';
    money.value = '';

    currentBalance.innerHTML = balance;
    accountName.innerHTML = account;

}


User.prototype.transaction = function () {

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
        errormessage.style.display = "none";
    }
    else if (withdraw.value) {
        let total = Number(currentBalance.textContent) - Number(withdraw.value)
        currentBalance.innerHTML = total;
        withdraw.value = '';
        console.log(total);
        errormessage.style.display = "none";
    }

}



addUser.addEventListener('click', function (e) {
    e.preventDefault();
    let newUser = new User(name.value, money.value);
    newUser.createAccount();
});

makechange.addEventListener('click', function (e) {
    e.preventDefault();         
    let newUser = new User(name.value, money.value);
    newUser.transaction();

});





