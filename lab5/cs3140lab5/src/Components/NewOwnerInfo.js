import React, { useState } from "react"
import axios from "axios"

export default function UpdateOwner() {

    const [Car_ID, setCarID] = useState('')
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault()

        const info = {
            "Name": Name,
            "Email": Email,
        }

        axios.patch(`http://localhost:3000/Owners/${Car_ID}`, info)
        .then(response => {
            console.log(info)
            console.log(response)
            console.log("response")
            setCarID('')
            setName('')
            setEmail('')
        })
            .catch(err => {
                console.log(err)
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