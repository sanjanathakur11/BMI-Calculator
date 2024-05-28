import './index.css'
import './App.css'
import React, { useState } from 'react'

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calcBmi = (event) => {
    event.preventDefault()
    let heightInMeters = parseFloat(height) * 0.3048;
    let weightInKg = parseFloat(weight);
    
    if (weightInKg === 0 || heightInMeters === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weightInKg / (heightInMeters * heightInMeters));
      setBmi(bmi.toFixed(1))


      if (bmi < 18.5) {
        setMessage('You are underweight')
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>

          <div>
            <label>Weight (in kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height (in ft)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
