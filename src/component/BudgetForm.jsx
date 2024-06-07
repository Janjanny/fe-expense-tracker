import React from "react";
import '../styles/BudgetFormStyles.css';
import { useState } from "react";


const BudgetForm = ({closeModalBudget, setBudget}) => {

    const [amount, setAmount] = useState()

    const handleInputChange = (e) => {
        setAmount(e.target.value);
    }

    const addBudget = () => {
        setBudget(amount)
        closeModalBudget()
    }

   
    return (<>
        <div className="budget-card-backdrop">
            <div className="budget-card">
                <h2>Add Budget</h2>
                <div className="currency">PHP</div>
                <input type="number" className="input-amount" value={amount} onChange={handleInputChange} />
                <button className="close-btn" onClick={closeModalBudget}>Close</button>
                <button className="submit-btn" onClick={addBudget}>Submit</button>
            </div>
        </div>
      </>)
}

export default BudgetForm