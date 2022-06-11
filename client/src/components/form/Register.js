import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Users } from '../datadummy/Users'

const Register = () => {
    const navigate = useNavigate()

    const [Register, setRegister] = useState({
        fullname: '',
        email: '',
        password: '',
    })

    const handleOnChange = (e) => {
        setRegister({
            ...Register,
            [e.target.name] : e.target.value, //?name, fullname,email,password
        })
    }

    const handleOnSubmit =(e) => {
        e.preventDefault() 
        Users.push(Register)
        navigate('/login')
    }

    return (
        <>
        <div className="card border-red text-end mb-5 rounded-3">
        <div className="card-body bg-var-dark p-4">
          <h3 className="text-start mb-3 ">Register </h3>
          <form onSubmit={handleOnSubmit}>
            <div className="input-group mb-3">
              <input type="text" className="form-control bg-var-dark text-white border-form" placeholder="Full Name" name="fullname" onChange={handleOnChange} value={Register.fullname} required />
            </div>
            <div className="input-group mb-3">
              <input type="Email" className="form-control bg-var-dark text-white border-form" placeholder="Email" name="email" onChange={handleOnChange} value={Register.email} required />
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control bg-var-dark text-white border-form" placeholder="Password" name="password" onChange={handleOnChange} value={Register.password} required />
            </div>
            <button className="btn bg-var-red text-white fw-bold container" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
        </>
    )
}


export default Register