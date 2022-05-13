import React, { useState } from "react"
import axios from "axios"


export default function NewCarEntry() {

    const [Car_ID, setCarID] = useState('')
    const [Year, setYear] = useState('')
    const [Make, setMake] = useState('')
    const [Model, setModel] = useState('')
 
    
    const submitHandler = (e) => {

        e.preventDefault()

        const data = {
            "Year": Year,
            "Make": Make,
            "Model": Model
        }

        axios.patch(`http://localhost:3001/api/car/${Car_ID}`, data)
        .then(response => {
            console.log(data)
            console.log(response)
            console.log("response")
            setCarID('')
            setYear('')
            setMake('')
            setModel('')

        })
            .catch(error => {
                console.log(error)
        })
    }

    return (
      <div >
        <div >
            <form onSubmit={submitHandler}>
                <label>Car ID: </label>
                <input type="number" value={Car_ID} onChange={e => setCarID(e.target.value)} />
                <br></br>
                <label>Year: </label>
                <input type="text" value={Year} onChange={e => setYear(e.target.value)} />
                <br></br>
                <label>Make: </label>
                <input type="text" value={Make} onChange={e => setMake(e.target.value)} />
                <br></br>
                <label>Model: </label>
                <input type="text" value={Model} onChange={e => setModel(e.target.value)} />
                <br></br>
                <button type="submit" onClick={() => alert("Updated")}>Update</button>
            </form>
        </div>
      </div>
    )
}