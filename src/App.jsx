import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="screen">
        <div className="header">
          <h2>Dashboard</h2>
        </div>

        <div className="bubble">
          <p className="budget"><span>$</span>10,000</p>

          <p className="currency">PHP</p>
        </div>

        <div className="expense-section">
          <div className="header">
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

        
      </div>
    </>
  )
}

export default App
