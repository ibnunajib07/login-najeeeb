import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from 'react-hook-form';
import { userRegistration } from "../_services";

import "./auth.css"

export const Registration = () => {
    const navigate = useNavigate();

    const [userCredentials, setUserCredentials] = useState({userName: "", email: "", password: ""});

    console.log(userCredentials)

    const onSubmit = data => console.log(data);

    const { register, handleSubmit, formState: {errors} } = useForm()
    
    // console.log(userCredentials);

    // const [userName, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // console.log("USERNAME: ",userName);
    // console.log("EMAIL: ", email);
    // console.log("PASSWORD: ", password);

    // function handleRegistration () {
    //     const payload = {
    //         userName,
    //         email,
    //         password
    //     }
    //     // console.log(payload);
    //     userRegistration(payload);
    // }

    return (
        <div className="registration-page-container">
            <h1>REGISTRATION</h1>
            <span>Register and enjoy the service</span>
            <div className="login-form-container">
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="text" {...register("username", {required : true, maxLength: 100})} 
                        className="input-field"
                        placeholder="user name"
                        onChange={(e) => {
                            setUserCredentials({...userCredentials, userName: e.target.value})
                    }} />
                    {errors.username?.type === "required" && "Username is required"}
                    {errors.username?.type === "maxLength" && "Max Length Exceed"}

                    <input 
                        className="email-field"
                        type="text" {...register("email", {required : true, maxLength: 100})} 
                        placeholder="email"
                        onChange={(e) => {
                            setUserCredentials({...userCredentials, email: e.target.value})
                    }} />
                    {errors.email?.type === "required" && "Email is required"}
                    {errors.email?.type === "maxLength" && "Max Length Exceed"}

                    <input 
                        className="password-input-field"
                        type="text" {...register("password", {required : true, maxLength: 100})} 
                        placeholder="password"
                        onChange={(e) => {
                            setUserCredentials({...userCredentials, password: e.target.value})
                    }} />
                    {errors.password?.type === "required" && "Password is required"}
                    {errors.password?.type === "maxLength" && "Max Length Exceed"}

                    <input 
                        className="password-input-field"
                        placeholder="confirm password"
                    />
                

                {/* <input 
                    className="input-field"
                    placeholder="user name"
                    onChange={(e) => {
                        setUserCredential({...userCredentials, userName: e.target.value});
                    }}
                />
                <input 
                    className="email-field"
                    placeholder="email"
                    onChange={(e) => {
                        setUserCredential({...userCredentials, email: e.target.value});
                    }}
                />
                <input 
                    className="password-input-field"
                    placeholder="password"
                    onChange={(e) => {
                        setUserCredential({...userCredentials, password: e.target.value});
                    }}
                />
                <input 
                    className="password-input-field"
                    placeholder="confirm password"
                /> */}
                
                    <button 
                         className="button-register" 
                        onClick={() => {
                         userRegistration(userCredentials, navigate);
                    }}
                    >
                    REGISTER
                     </button>
                    Already have an account?
                    <button className="registration-page-button" onClick={() => navigate("/login")}>
                     LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
};