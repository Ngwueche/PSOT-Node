let {dataStore} = require('./txn')

// Get the timeStamp from dataStore
const unixDateObject = dataStore.filter((element) =>{
    return element.TimeStamp;
})

const unixTimestamp = unixDateObject;
const milliseconds = unixTimestamp * 1000
const dateObject = new Date(milliseconds)
const humanDateFormat = dateObject.toLocaleString()


 
const newTransaction = {
    "TimeStamp" : "1571967200",
    "TransactionType" : "DEPOSIT",
    "Amount" : "10.683640",
    "Token" : "ETH"
}
//Get all transactions
const getAllTransactions = ()=> dataStore

// Add a transaction
const addTransaction = () => dataStore.push(newTransaction)

// Add a delete transaction
const deleteTransaction = (id) => {
   for(i =1; i<dataStore.length; i++){
    if(dataStore[i].TimeStamp === id){
        dataStore.pop(id)
    }
};
deleteTransaction("1571966421")
    
// Get A transaction by Id
const updateTransaction = (id) =>{
for(i =1; i<dataStore.length; i++){
    if(dataStore[i].TimeStamp === id){
        return console.log(id)
    }
}
updateTransaction('1571965892')


// Update an existing Transaction
const updateTransactionElement=(tran)=>{
        dataStore.map((element) => {
        if(element.TimeStamp === ts){
            element.Token = 'BTC'
            return console.log(element)
        }
    })
}
updateTransactionElement('157196589')
    
// Get All transactions by type (Withdraw/  Deposit ✅ )
const depositTransaction = dataStore.filter((element) =>{
        return element.TransactionType === 'DEPOSIT' 
})


// Bonus: Get all transactions done on a particular date
const transactionByDate = dataStore.filter((element)=>{
    
});

// Get length of the array
const len = dataStore.length;
console.log(len)

const getTokenTransaction = depositTransaction.filter((element) =>{
    return element.Token ===  "XRP"
    // return element.Token ===  "ETH"
    // return element.Token ===  "BTC"
    
}) 
console.log(getTokenTransaction)
