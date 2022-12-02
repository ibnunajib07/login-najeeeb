import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import bgImg from '../assets/img1.jpg';
import { userLogin } from "../_services";

import "./auth.css"
import { useForm } from 'react-hook-form';

export const Login = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }} = useForm()
    const onSubmit = data => console.log(data);
    const [userCredentials, setUserCredentials] = useState({user:"", password:""});

    // const login = () => {
    //     // console.log("LOGIN");
    //     localStorage.setItem("user", "userCredentials");
    //     navigate("/dashboard");
    // };

    return (
        <div className="registration-page-container">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>Login and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input 
                    type="text" {...register("username", {required : true, maxLength: 100})} 
                    placeholder='username'
                    onChange={(e) => {
                        setUserCredentials({...userCredentials, user: e.target.value})
                    }} />
                    {errors.username?.type === "required" && "Username is required"}
                    {errors.username?.type === "maxLength" && "Max Length Exceed"}

                    <input 
                    type="text" {...register("password", {required : true, maxLength: 100})} 
                    placeholder='password' 
                    onChange={(e) => {
                        setUserCredentials({...userCredentials, password: e.target.value})
                    }} />
                    {errors.password?.type === "required" && "Password is required"}
                    {errors.password?.type === "maxLength" && "Max Length Exceed"}
                    {/* onClick={() => login()} */}

                    <button className='login-page-button'onClick={() => {
                        userLogin(userCredentials, navigate);
                    }} >Sign In</button>
                    Don't have an account ?
                    <button onClick={() => navigate("/registration")}>REGISTRATION</button>
                </form>

            </div>
            {/* <div className="col-2">
                <img src={bgImg} alt="" />
            </div> */}
            {/* <form>
                <label>
                    USERNAME:
                    <input type="text" name="name." />
                </label>
            </form>
            <form>
                <label>
                    PASSWORD:
                    <input type="text" name="password." />
                </label>
            </form>
            <button className="login-page-button" onClick={() => login()}>
                LOGIN
            </button>
            <button onClick={() => navigate("/registration")}>
                REGISTRATION
            </button> */}
        </div>
    )
}