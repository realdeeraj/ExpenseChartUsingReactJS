import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import "./ExpenseBlock.css";

function ExpenseBlock(props) {
  const [newYear, newYearHandler] = useState("2020");
  const onYearChange = (selectedYear) => {
    newYearHandler(selectedYear);
  };
  const filteredByYear = props.item.filter(
    (x) => x.date.getFullYear() == newYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={newYear}
          onYearChanging={onYearChange}
        ></ExpensesFilter> 
        <ExpenseChart filteredexp={filteredByYear}></ExpenseChart>
        <ExpenseList item={filteredByYear}></ExpenseList>
      </Card>
    </div>
  );
}
export default ExpenseBlock;
