import React, { useState } from "react"
import axios from "axios"

export default function UpdateOwner() {

    const [Car_ID, setCarID] = useState('')
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    

    const submitHandler = (e) => {

        e.preventDefault()

        const data = {
            "Name": Name,
            "Email": Email,
        }

        axios.patch(`http://localhost:3001/api/owner/${Car_ID}`, data)
        .then(response => {
            console.log(data)
            console.log(response)
            console.log("response")
            setCarID('')
            setName('')
            setEmail('')
        })
            .catch(error => {
                console.log(error)
        })
    }

    return (
      <div >
        <div >
            <form onSubmit={submitHandler}>
                <label>Car ID:</label>
                <input type="number" value={Car_ID} onChange={e => setCarID(e.target.value)} />
                <br></br>
                <label>Name:</label>
                <input type="text" value={Name} onChange={e => setName(e.target.value)} />
                <br></br>
                <label>Email:</label>
                <input type="text" value={Email} onChange={e => setEmail(e.target.value)} />
                <br></br>
                <button type="submit" onClick={() => alert("Complete")}>Update</button>
            </form>
        </div>
      </div>
    )
}