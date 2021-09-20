import React , {useState} from 'react'; 
import ExpenseForm from './ExpenseForm'; 
import './NewExpense.css';

const NewExpense = (props)=>{   
    const [showExpense,showExpenseHandler] = useState('False'); 

    const getExpense = (enteredExpense)=>{ 
        const curData = {
            ...enteredExpense , 
            id : Math.random().toString()
        };  
        props.onSaveExpenseData(curData);
    }  

    const showExpenseForm = () =>{
        showExpenseHandler('True');
    }   
    const notShowExpenseForm = () => {
        showExpenseHandler('False');
    }
    let form;
    if(showExpense === 'False'){
         form = <button onClick={showExpenseForm}>Add new Expense</button>
    }else{
         form = <ExpenseForm onSaveExpenseData={getExpense} formChanger={notShowExpenseForm}></ExpenseForm>
    }
    
    return ( 
        <div className="new-expense"> 
            {form}    
        </div>
        
    );
} 

export default NewExpense;