import React from 'react';  
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'; 

function ExpenseList(props){
    let expchanger;

    if(props.item.length === 0){
        return (<h2 className="expenses-list__fallback">No item found</h2> );
    }
    return ( 
    
    <ul className="expenses-list">
     {props.item.map( (exp) => <ExpenseItem   
        key = {exp.id}
        title = {exp.title} 
        date = {exp.date} 
        amount= {exp.amount}/>)}
    </ul>
    );
} 
export default ExpenseList;