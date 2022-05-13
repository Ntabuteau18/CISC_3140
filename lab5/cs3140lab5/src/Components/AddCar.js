import React, { Component } from "react";
import axios from "axios";

class AddCar extends Component {

  constructor(props) {
    super(props)

    this.state = {
        Car_ID: '',
        Year: '',
        Make: '',
        Model: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()

    console.log(this.state)

    axios.post('http://localhost:3000/Cars/', this.state)
    .then(response => {
      console.log(response)
      this.setState({
        Car_ID: '',
        Year: '',
        Make: '',
        Model: ''
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    
    const {Car_ID, Year, Make, Model} = this.state
    return (
        
      <div>
        <div className="UpdateCars">
          <form onSubmit={this.submitHandler}>
          <label>Car ID: </label>
          <input 
            type="number" 
            name="Car_ID" 
            value={Car_ID} 
            onChange={this.changeHandler} />
          <br></br>
          <label>Year: </label>
          <input 
            type="number" 
            name="Year" 
            value={Year} 
            onChange={this.changeHandler} />
          <br></br>
          <label>Make: </label>
          <input 
            type="text" 
            name="Make" 
            value={Make} 
            onChange={this.changeHandler} />
          <br></br>
          <label>Model: </label>
          <input 
            type="text" 
            name="Model" value={Model} 
            onChange={this.changeHandler} />
          <br></br>
            <button
              onClick={() => this.setState({ editing: false })}>
              Cancel
            </button>
            <button 
                onClick={() => alert("Complete")} >
                Submit
            </button>
           </form>
         </div>
       </div>
    )
  }
}
export default AddCar