import React, { Component } from "react";
import axios from "axios";

class AddOwner extends Component {

  constructor(props) {
    super(props)

    this.state = {
        Car_ID: '',
        Name: '',
        Email: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()

    console.log(this.state)

    axios.post('http://localhost:3000/OwnerInfo/', this.state)
    .then(response => {
      console.log(response)
      this.setState({
        Car_ID: '',
        Name: '',
        Email: ''
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    
    const { Car_ID, Name, Email} = this.state
    return (        
      <div>
        <div className="ShowNames">
          <form onSubmit={this.submitHandler}>
          <label>Car ID: </label>
          <input 
            type="number" 
            name="Car_ID" 
            value={Car_ID} 
            onChange={this.changeHandler} />
          <br></br>
          <label>Name: </label>
          <input 
            type="text" 
            name="Name" 
            value={Name} 
            onChange={this.changeHandler} />
          <br></br>
          <label>Email: </label>
          <input 
            type="text" 
            name="Email" 
            value={Email} 
            onChange={this.changeHandler} />
          <br></br>
            <button
              onClick={() => this.setState({ editing: false })}>
              Cancel
            </button>
            <button 
                onClick={() => alert("Insert Complete")} >
                Submit
            </button>
           </form>
         </div>
       </div>
    )
  }
}
export default AddOwner