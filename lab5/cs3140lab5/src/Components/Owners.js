import React from "react";

class Owners extends React.Component {
  state = {
    data: [{}]
  };

  async componentDidMount() {
    try{
      const response = await fetch('http://localhost:3000/api/OwnerInfo')
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
      <div>
          <h1>Owners</h1>
        <ul>
          {data.map((item,i)=>
            <li key={i}>
              <li>CarID:{item.Car_ID}</li> 
              <div> <li>Name:</li></div> {item.Name} 
              <li>Email:</li> {item.Email}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
export default Owners;