import React from "react";
import '../styles/BudgetFormStyles.css';

const BudgetForm = () => {
    return (<>
        <div className="budget-card">
            <h2>Add Budget</h2>
            <div className="currency">PHP</div>
            <input type="text" />
            <button>Submit</button>
        </div>
      </>)
}

export default BudgetForm