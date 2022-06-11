import React from 'react'
import { Users } from '../datadummy/Users'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import PrivateRoute from '../Private_Route'


    export const Login =() => {
    const navigate = useNavigate()

    const [ emaillog, setEmailLog ] = useState('')
    const [ passwordLog, setPasswordLog] = useState('')

    const [ isLogin, setIsLogin ] = useState(false)
    const [ notif, setNotif ] = useState(false)

    const dataUser = Users
    console.log(dataUser);

    const handleOnSubmit = (e) => { //handlesubmit gunanya ketika submid dia membawa state yang ada di dalamnya
        e.preventDefault() //biar tidak refesh ke halaman baru

         const data = dataUser.find((user) => user.email === emaillog ) 
         console.log(data);

         if (data) {
             if (data.password !== passwordLog){
                setNotif(true)
                console.log('password salah');
             } else {
                 setIsLogin(true)
                 setNotif(false)
                 navigate('/')
                 console.log('login berhasil');
             }
         } else {
             setNotif(true)
             console.log('email tidak terdaftar');
         }
        }
    
    return (
          <>
          <div className="card border-red text-end mb-5 rounded-3">
        <div className="card-body bg-var-dark p-4">
          <h3 className="text-start mb-3 ">Login</h3>
          <form onSubmit={handleOnSubmit}>
            <div className="input-group mb-3">
              <input type="Email" className="form-control bg-var-dark text-white border-form" placeholder="Email"
               name="email" onChange={(e) => setEmailLog(e.target.value)} required />
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control bg-var-dark text-white border-form" placeholder="Password"
               name="password" onChange={(e) => setPasswordLog(e.target.value)} required />
            </div>
            {notif && (
              <Alert className="alert-warning text-center" variant="warning">
                <span>Masukan email atau password dengan benar</span>
              </Alert>
            )}
            <button className="btn bg-var-red text-white fw-bold container">Login</button>
          </form>
        </div>
      </div>
         </>
      )
    }

export default Login