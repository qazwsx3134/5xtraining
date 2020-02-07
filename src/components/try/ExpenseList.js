import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props)=> (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=>{
            
            return <ExpensesListItem key={expense.id} {...expense}/> //把props的東西通通丟到ExpensesListItem 並render ExpensesListItem component
            
        })}
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses,state.filters) //用selector搭配filter去把state map 到 props
    };
}

export default connect(mapStateToProps)(ExpenseList); //前面放用arrow func return的object(從物件裡挑的) 後面放要連結的component 然後對於後面的component就能用props 擷取資料

