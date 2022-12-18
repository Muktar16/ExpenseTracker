import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES = [
    {
        id:'e1',
        title:'School Fee',
        amount:'400',
        date: new Date(2022,12,2)
    },
]

const App = () => {

    const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        const updatedExpenses = [expense, ...expenses];
        console.log(updatedExpenses);
        setExpenses(updatedExpenses);
    }

   return(
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses item={expenses}></Expenses>
   </div>
   )
}

export default App;