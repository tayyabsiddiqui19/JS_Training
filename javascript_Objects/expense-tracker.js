let myAccount = {
    name: "Tayyab Siddiqui",
    expense: 0,
    income: 0
}

let addIncome = function(account, income) {
    account.income = account.income + income
}

let addExpense = function(account, expense) {
    account.expense = account.expense + expense
}

let resetAccount = function(account) {
    account.expense = 0
    account.income = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expense
    return `Account for ${account.name} has ${balance}. ${account.income} in income. ${account.expense} in expenses  ` 
} 

addIncome(myAccount,2000)
addIncome(myAccount,2000)
addIncome(myAccount,2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

