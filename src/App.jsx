import { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BudgetForm from './component/BudgetForm';
import './App.css';
import './styles/BudgetFormStyles.css'

function App() {

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
            <button className="budget-btn">Add Budget</button>
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

        <BudgetForm/>


        
      </div>
    </>
  )
}

export default App
