'use client'
import { useAdminloginMutation } from '@/Redux/services/Authapi'
import API from '@/utils/allapis'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const page = () => {



    useEffect(() => {
        const fetchData = async () => {
        try {
        const response = await axios.post('https://poc-restaurant-api.icodebdev.com/authenticate',login);
        console.log(response);
        
        } catch (error) {
        console.error('Error fetching data: ', error);
        }
        };
        
        fetchData();
        }, []);
    // const [adminlogin] = useAdminloginMutation()
    const[login,setlogin]=useState({
        username:"admin",
        password:"1234"
    })

    console.log(login);
  
    // const handleLogin=async (e)=>{
    //     e.preventDefault()
    //     const {username,password}=login;
    //     if(!username||!password){
    //         alert('please fill all fileds')
    //      }else{
        
    // try {
    //     const response = await adminlogin(login);
    //     console.log(response)
        
    // } catch (error) {
    //     console.error('Login failed:', error);
    //     alert('Login failed. Please try again.');
    // }
            
    //      }
    //   }
  return (
    <div>
 
         {/* <input type="text" placeholder='username' name="" id="" value={login.username} onChange={e=>setlogin({...login,username:e.target.value})} /> <br />
         <input type="password" placeholder='password' name="" id="" value={login.password} onChange={e=>setlogin({...login,password:e.target.value})} />  <br />
         <button onClick={handleLogin}>login</button> */}
    </div>
  )
}

export default page