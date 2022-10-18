let {dataStore} = require('./txn')

// Get the timeStamp from dataStore
const unixDateObject = dataStore.filter((element, index) =>{
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
const deleteTransaction = () => dataStore.pop({});

// Get A transaction by Id
const updateTransaction = () => {
 for(let i =0; i< len; i++){
    dataStore.timeStamp ==="";
 }

}
// Update an existing Transaction

// Get All transactions by type (Withdraw/  Deposit ✅ )
const depositTransaction = dataStore.filter((element, index) =>{
        return element.TransactionType === 'DEPOSIT' 
})


// Bonus: Get all transactions done on a particular date
const transactionByDate = dataStore.filter((element, index)=>{
    
});

// Get length of the array
const len = dataStore.length;
console.log(len)

// Total amount of depositTransaction
const totalDeposit = depositTransaction.filter((element, index) =>{
    return element.Token ===  "XRP"
    // return element.Token ===  "ETH"
    // return element.Token ===  "BTC"
    
}) 
console.log(totalDeposit)
