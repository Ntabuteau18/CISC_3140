import React from "react";

class Cars extends React.Component {
  state = {
    data: [{}]
  };

  async componentDidMount() {
    try{
      const response = await fetch('http://localhost:3000/car')
      const data = await response.json()
      console.log(data)
      this.setState({data: data.data});
    }catch(err){
      console.log(err)
    }
  }

  render() {
    console.log('')
    const {data} = this.state
    return (
             
      <div>
        <h1>Cars List</h1>
        <ul>
          {data.map((item,i)=>
            <li key={i}>
          <li>Car_ID: {item.Car_ID}</li> 
          <div> Year:</div>  {item.Year} 
              <div>Make:</div> {item.Make} 
              <div>Model:</div>  {item.Model}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
export default Cars;