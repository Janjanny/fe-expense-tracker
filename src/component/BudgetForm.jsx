import React from "react";
import '../styles/BudgetFormStyles.css';

const BudgetForm = () => {
    return (<>
        <div className="budget-card">
            <h2>Add Budget</h2>
            <div className="currency">PHP</div>
            <input type="number" className="input-amount" />
            <button className="close-btn">Close</button>
            <button className="submit-btn">Submit</button>
        </div>
      </>)
}

export default BudgetForm