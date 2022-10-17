//Get all transactions
// Add a new transaction
// Update an existing Transaction
//Delete A transaction
// Get A transaction by Id
// Get All transactions by type (Withdraw/ Deposit)
// Bonus: Get all transactions done on a particular date

let {dataStore} = require('./txn')

//Get all transactions
const getAllTransactions = ()=> dataStore

// Add a delete transaction
const deleteTransaction = () => dataStore.pop({});

// Add a new transaction
const  addNewTransaction = () => dataStore.push({});
// Add a new transaction

const  addNewTransaction = () => dataStore.push({});


// Update an existing Transaction
const updateTransaction = (element) => {
 for(let i =0; i< len; i++){
    dataStore.timeStamp ==="";

 }

}
// Get length of the array
const len = dataStore.length;
console.log(len)

// Get array of Transaction of deposit type
const depositTransaction = dataStore.filter((element, index) =>{
        return element.TransactionType === 'WITHDRAWAL' 
})
// console.log(depositTransaction)


// Total amount of depositTransaction
const totalDeposit = depositTransaction.filter((element, index) =>{
    return element.Token ===  "XRP"
    return element.Token ===  "ETH"
    return element.Token ===  "BTC"
    
}) 
// console.log(totalDeposit)

// Total amount of withdrawalTransaction

// const addNewTransaction = () =>{
//     return dataStore.push({
//         "TimeStamp" : "157196718",
//         "TransactionType" : "WITHDRAWAL",
//         "Amount" : "10.8660",
//         "Token" : "BTC"
//     })
// }
// const deleteTransaction = () =>{
//     return dataStore.pop[0]
// }

// // Get A transaction by Id
// const getTransactionById = ()=>{
//     return dataStore.find({'TimeStamp':'1571967110'})
// }

// // Get All transactions by type (Withdraw/ Deposit)
// const getTransactionByType = ()=>{
//     return dataStore.find({'TransactionType':'DEPOSIT'})
//     }

// //Get all transactions done on a particular date
// const timeStamp = () =>{
//    return dataStore.find({'TimeStamp'}).toLocaleTimeString()


// console.log(deleteTransaction())

// // arrayMethods
// // 
// // 
