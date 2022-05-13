import React from "react";

class Cars extends React.Component {
  state = {
    data: [{}]
  };

  async componentDidMount() {
    try{
      const response = await fetch('http://localhost:3001/api/car')
      const data = await response.json()
      console.log(data)
      this.setState({data: data.data});
    }catch(err){
      console.log(err)
    }
  }

  render() {
    console.log('render call')
    const {data} = this.state
    return (
      
          // data.map((item,i)=>
          //   <Car key={i}
          //     Car_ID = {item.Car_ID}
          //     Year = {item.Year}
          //     Make = {item.Make}
          //     Model = {item.Model}
          //     Judge_ID = {item.Judge_ID}
          //     Judge_Name = {item.Judge_Name}
          //   />)
          
        
      <div>
        <h1>Cars List</h1>
        <ul>
          {data.map((item,i)=>
            <li key={i}>
              <li>Car_ID ={item.Car_ID},</li> 
              Year = {item.Year}, 
              Make = {item.Make}, 
              Model = {item.Model}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
export default Cars;