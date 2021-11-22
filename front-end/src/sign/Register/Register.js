import React, { useState } from "react";
import './Register.css'
import { Link, Redirect, useHistory } from 'react-router-dom'
import loading1 from '../../assets/loading1.gif'
export default function Register() {
    const history = useHistory();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [checkBox, setCheckBox] = useState();

    const [isValidFirstName, setIsValidFirstName] = useState(true);
    const [isValidLastName, setIsValidLastName] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidconfirmPassword, setIsValidConfirmPassword] = useState(true);
    const [isValidCheckBox, setIsValidCheckBox] = useState(true);

    const [isValid, setIsValid] = useState(false)

    function AlertDialog(text){
        alert(`${text}`);
    }

    const validate = (event) =>{
        event.preventDefault()

        if (!firstName){
            setIsValidFirstName(false)
            AlertDialog('Tên không được để trống')
        }
        else {
            setIsValidFirstName(true)
            if (!lastName){
                setIsValidLastName(false)
                AlertDialog('Họ không được để trống')
            }
            else {
                setIsValidLastName(true)
                if (!lastName){
                    setIsValidLastName(false)
                    AlertDialog('Họ không được để trống')
                }
                else {
                    setIsValidLastName(true)
                    if (!email){
                        setIsValidEmail(false)
                        AlertDialog('Email không được để trống')
                    }
                    else {
                        setIsValidEmail(true)
                        if (!password){
                            setIsValidPassword(false)
                            AlertDialog('Mật khẩu không được để trống')
                        }
                        else {
                            setIsValidPassword(true)
                            if (!confirmPassword){
                                setIsValidConfirmPassword(false)
                                AlertDialog('Vui lòng xác nhận lại mật khẩu')
                            }
                            else {
                                setIsValidConfirmPassword(true)
                                if (!checkBox){
                                    setIsValidCheckBox(false)
                                    AlertDialog('Vui lòng đọc điều khoản!')
                                }
                                else {
                                    setIsValidCheckBox(true)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    const loadingIcon = `<img src=${loading1} />`;
    return (
        <div className="register-container">
            <div className="register-center">
                <div className="register-col1">
                    <div className="register-col1-info">
                        <div className="register-col1-title">
                            <span>Information</span>
                        </div>
                        <div className="register-col1-content">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere porta diam eget laoreet. Duis auctor, nisi ac auctor imperdiet, mi ligula ultrices ex, sed malesuada erat ex eget metus. Phasellus sed condimentum erat. Etiam nulla quam, aliquet sit amet pretium in, eleifend pretium massa. Fusce porta maximus tempor. Cras quis efficitur ante. Sed maximus nulla sit amet odio placerat mollis. Vestibulum quis tincidunt enim.

                                Aenean porta dolor ut nisi consequat aliquet. Integer varius condimentum lacus</span>
                        </div>
                    </div>
                </div>
                <div className="register-col2">
                    <div className="register-col2-info">
                        <div className="register-col2-title">
                            <span>Register form</span>
                        </div>
                        <form>
                            <div className="full-name-container">
                                <div className="name-input">
                                    <label for="name">First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="firstName"
                                        value={firstName}
                                        onChange={event =>setFirstName(event.target.value)}
                                    />
                                </div>
                                {!isValidFirstName}
                                <div className="fullname-input">
                                    <label for="lastname">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName"
                                        value={lastName}
                                        onChange={event =>setLastName(event.target.value)} 
                                    />
                                </div>
                                {!isValidLastName}
                            </div>                 
                            <div className="email-container">
                                <div className="email-input">
                                    <label for="email">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        value={email}
                                        onChange={event =>setEmail(event.target.value)} 
                                    />
                                </div>
                                {!isValidEmail}
                            </div>
                            <div className="pw-container">
                                <div className="pw-input">
                                    <label for="pw">Password</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        name="password" 
                                        value={password}
                                        onChange={event =>setPassword(event.target.value)}
                                    />
                                </div>
                                {!isValidPassword}
                                <div className="confirm-pw-input">
                                    <label for="confirm-pw">Confirm Password</label>
                                    <input 
                                        type="password" 
                                        id="confirmPassword" 
                                        name="confirmPassword" 
                                        value={confirmPassword}
                                        onChange={event =>setConfirmPassword(event.target.value)}
                                    />
                                </div>
                                {!isValidconfirmPassword}
                            </div>            
                            <label for="tac" className="register-agree">
                                <input 
                                    id="chekcBox" 
                                    type="checkBox" 
                                    name="checkBox" 
                                    value={checkBox}
                                    onChange={event =>setCheckBox(event.target.value)}
                                />
                                    I agree to the <span> Terms and Conditions</span>
                                {!isValidCheckBox}
                            </label>
                        </form>
                        <button className="register-button"
                                onClick={validate}>
                                {isValid ? loadingIcon : 'Login'}
                            Register
                        </button>
                    </div>
                </div>
            </div>
            {/* <Link to="/login">Đăng nhập</Link> */}
        </div>
    )
}
