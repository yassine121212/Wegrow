import React, { useState, useEffect } from 'react'
import "./EditProfile.css";
import axios from "axios";



const EditProfile = ({datauser,setOnEdit}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const initState = {
        lastName: datauser.lastName,firstName:datauser.firstName, email: datauser.email, phone: datauser.phone, Address: datauser.Address, city: datauser.city

    }
    const [userData, setUserData] = useState(initState)
    const { lastName,firstName,phone, email, Address, city } = userData

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]:value })
    }

    const handleSubmit = async () => {
        setIsLoading(true);

    try {
        const id = localStorage.getItem("id");
    
        const url = "http://localhost:8080/api/users/";
        const res = await axios.put(url + id,userData);
             if(res)
                  console.log("user updated")

  } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
    setIsLoading(false);

}

    return (
        <div className="edit_profile">
            <button className="btn btn-danger btn_close"
            onClick={() => setOnEdit(false)}>
                Close
            </button>
            <form onSubmit={handleSubmit} >
            <div className="form-group">
                    <label htmlFor="lastName">last Name</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="lastname"
                        name="lastName" value={lastName} onChange={handleInput} />
                           <small className="text-danger position-absolute"
                        style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                            {lastName.length}/25
                        </small>
                        </div>
                        </div>
                        <div className="form-group">
                    <label htmlFor="firstName">first Name</label>
                    <div className="position-relative">
                        <input type="text" className="form-control" id="firstname"
                        name="firstName" value={firstName} onChange={handleInput} />
                           <small className="text-danger position-absolute"
                        style={{top: '50%', right: '5px', transform: 'translateY(-50%)'}}>
                            {lastName.length}/25
                        </small>
                        </div>
                        </div>
                        
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email}
                    className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" value={ phone }
                    className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="Address">Address</label>
                    <input type="text" name="Address" value={Address}
                    className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" value={city}
                    className="form-control" onChange={handleInput} />
                </div>
                <button className="btn btn-info w-100" type="submit">Save</button>
            </form>
          
        </div>
    )
}

export default EditProfile