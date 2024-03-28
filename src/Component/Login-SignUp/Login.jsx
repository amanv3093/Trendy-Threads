import React, { useState } from 'react'
import './Login.css'
import { getAuth ,signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/Firebase.js'
import { NavLink } from 'react-router-dom';

function Login() {
    // let [loginPageShow , setLoginPageShow] = useState(true);
    let [showPassword , setShowPassword] = useState(true);
    let [loginEmail , setLoginEmail] = useState('');
    let [loginPassword , setLoginPassword] = useState('');
    
    // let {CheckPage , setCheckPage} = UseItem();
   
    const auth = getAuth();
    

    let showPasswordFun = () => {
        setShowPassword((show) => !show)
        console.log(showPassword);
    }


   
    
   
    // Login function   Signed in***************
    async function  LoginFun(e){
        e.preventDefault();
        console.log(loginEmail);
        console.log(loginPassword);
        try {
            const result = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(result);
            alert("User signed in");
            
          } catch (err) {
            console.log(err);
            alert(err.message);
          }

        

    }

    
    

  return (
    <>
  
    <section className='login'>
        <div className='login-box'>
            <h2 className='login-box-heading'>Login</h2>
            <form>
                <div className='email-input-box'>
                    <input className='email-input' type='email' placeholder='Email' onChange={(e) => setLoginEmail(e.target.value) } value={loginEmail}/>
                </div>

                <div className='password-input-box'>
                    <input className='password-input' type={showPassword ? 'password' : 'text'}placeholder='Password' onChange={(e) => setLoginPassword(e.target.value)} value={loginPassword}

                    />
                    <span onClick={showPasswordFun} class="material-symbols-outlined visibility">{showPassword ? 'visibility' : 'visibility_off'}</span>


                </div>
                
                <div className='create-account'>
                    <p>Create an account ? <NavLink to='/signup'>Click here</NavLink></p>

                </div>

                <div className='login-btn-box'>
                    <button className='login-btn' onClick={LoginFun}>LOGIN</button>

                </div>
            </form>
            

        </div>

    </section> 
    
    

    

    
    

    </>
  )
}

export default Login