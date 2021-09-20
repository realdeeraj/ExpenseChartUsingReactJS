import React, { useState } from "react";
import ExpenseBlock from "./components/Expenses/ExpenseBlock";
import NewExpense from "./components/NewExpense/NewExpense";
const dummyExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, expensesHandler] = useState(dummyExpense);

  const addExpense = (expense) => {
    expensesHandler(() => {
      return [expense, ...expenses];
    });
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onSaveExpenseData={addExpense}></NewExpense>
      <ExpenseBlock item={expenses}></ExpenseBlock>
    </div>
  );
}

export default App;
