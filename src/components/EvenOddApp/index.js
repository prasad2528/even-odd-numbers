// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const res = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="result">Count is {res}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="instruction">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
