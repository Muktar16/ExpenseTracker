import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {
    let expenses = [
        {
            id:'e1',
            title:'School Fee',
            amount:'400',
            date: new Date(2022,12,2)
        },
        {
            id:'e2',
            title:'Books Fee',
            amount:'500',
            date:new  Date(2022,12,5)
        },
        {
            id:'e3',
            title:'House rent Fee',
            amount:'700',
            date: new Date(2022,12,7)
        },
        {
            id:'e4',
            title:'Foods',
            amount:'540',
            date: new Date(2022,12,10)
        }

    ]

   return(
    <div>
        <NewExpense />
        <Expenses expenses={expenses}></Expenses>
   </div>
   )
}

export default App;