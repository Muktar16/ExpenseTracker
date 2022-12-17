import ExpenseItem from "./components/ExpenseItem";

function App(){
    
    let expenseDate = new Date(2022,12,17);
    let expenseTitle = "School Fees";
    let expenseAmount = 300;

   return(
    <div>
        <h2>Let's get Started</h2>
        <ExpenseItem 
            date={expenseDate} 
            title={expenseTitle} 
            amount={expenseAmount}>
        </ExpenseItem>
   </div>
   )
}

export default App;