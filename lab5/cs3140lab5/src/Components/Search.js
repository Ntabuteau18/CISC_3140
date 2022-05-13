import React from "react"

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [{}],
            results2: [{}],
            carID: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            carID:event.target.carID.value
        })
        
         fetch('http://localhost:3000/Cars/'+event.target.carID.value)
             .then(response=>{
                 return response.json();
             })
             .then(data =>{
                 this.setState({
                    results: data.data
                 })                
             })
             .catch(error=>{
                 console.log("error",error)
             }).
             then(()=>console.log(this.state.results));             
             
        fetch('http://localhost:3000/Owners/'+event.target.carID.value)
        .then(response=>{
            return response.json(); })
        .then(data =>{
            this.setState({
            results2: data.data
            })                
        })
        .catch(err=>{
            console.log("error",err)
        }).
        then(()=>console.log(this.state.results));  
    }

    render() {
        console.log("")
        return (
            
            <div> 
                            
                <h1>Search For Car and Owners</h1>                       
                <form onSubmit={this.handleChange}>
                    <h2> Enter Car ID or Owner</h2>
                    <input type="number" placeholder="Car_ID" name="carID"></input>
                    <input type="submit" placeholder="Search"></input>
                </form>                       
                
                <div>
                    <h1>Car Data</h1>
                <ul>
                <li>Car_ID : {this.state.results.Car_ID}</li>
                <li>Year : {this.state.results.Year}</li> 
                <li>Make : {this.state.results.Make} </li>    
                <li>Model : {this.state.results.Model}</li>
                    { }
                </ul>
                </div> 
                <div>
                <h1>Owner Data</h1>
                <ul>
                <li>Car_ID : {this.state.results2.Car_ID}</li>
                <li>Year : {this.state.results2.Name}</li> 
                <li>Make : {this.state.results2.Email} </li>    
                </ul>
                </div>                        
            </div>
        );
    }
}
export default Search;