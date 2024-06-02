import { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";

import BudgetForm from './component/BudgetForm';
import './App.css';
import './styles/BudgetFormStyles.css'
import { CSSTransition } from "react-transition-group";


function App() {

  const[modalBudget, setModalBudget] = useState(false);

  const openModalBudget = () => {
    setModalBudget(true);
  }

  const closeModalBudget = () => {
    setModalBudget(false);
  }

  return (
    <>
      <div className="screen">
        <div className="header">
          <IconContext.Provider value={{ color: "black", className: "icon", size:'1.5rem' }}>
            <div>
              <HiMenu/>
            </div>
          </IconContext.Provider>
          <h2>Dashboard</h2>
        </div>

        <div className="bubble">
          <p className="budget"><span>$</span>10,000</p>

          <p className="currency">PHP</p>
        </div>

        <div className="expense-section">
          <div className="expense-header">
            <p>Expenses</p>
            <button className="budget-btn" onClick={openModalBudget}>Add Budget</button>
          </div>

          {/* expenses entry */}
        <div className="expense-card">
          <div className="tip-color"></div>
          <div className="expense-detail">
            <p className="name">Groceries</p>
            <p className="description">Lorem, ipsum dolor.</p>
          </div>
          <div className="expense-amount">
            <p className="amount"><span>$</span> 9.99</p>
          </div>
        </div>

        <div className="expense-card">
          <div className="tip-color"></div>
          <div className="expense-detail">
            <p className="name">Groceries</p>
            <p className="description">Lorem, ipsum dolor.</p>
          </div>
          <div className="expense-amount">
            <p className="amount"><span>$</span> 9.99</p>
          </div>
        </div>

        <div className="expense-card">
          <div className="tip-color"></div>
          <div className="expense-detail">
            <p className="name">Groceries</p>
            <p className="description">Lorem, ipsum dolor.</p>
          </div>
          <div className="expense-amount">
            <p className="amount"><span>$</span> 9.99</p>
          </div>
        </div>
        </div>

        <button className="add-btn">
          +
        </button>

        <CSSTransition in={modalBudget} timeout={300} classNames={"modalB"} unmountOnExit>
          <BudgetForm closeModalBudget={closeModalBudget} />
        </CSSTransition>


        
      </div>
    </>
  )
}

export default App
