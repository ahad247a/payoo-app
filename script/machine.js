function getValueFromInput(id){
 const input =document.getElementById(id)
 const value = input.value 
 return value
}

function getBalance(){
    const balanceElement = document.getElementById("balance")
    const balance = balanceElement.innerText
    console.log("current balance", Number(balance))
    return Number(balance)
}


function setBalance(value){
    const balanceElement = document.getElementById("balance")
    balanceElement.innerText=value
}


function showOnly (id) {
    const addMoney = document.getElementById('add-money') 
    const cashout = document.getElementById('cashout')
    const newHistory = document.getElementById("history")
    const transaction =document.getElementById("transfer-money")
    const bonus =document.getElementById("get-bonus")

    addMoney.classList.add('hidden')
    cashout.classList.add('hidden')
    newHistory.classList.add('hidden')
    transaction.classList.add('hidden')
    bonus.classList.add('hidden')


    const selected = document.getElementById(id)

    selected.classList.remove('hidden')
}