import React, { useState } from 'react'
import { HiIdentification } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import "./Login.css"

interface LoginRegisterInterface {
    handleToggleView: () => void
}

const RegisterView = ({handleToggleView}: LoginRegisterInterface) => {
    const [passwordView, setPasswordView] = useState(false)

    const tooglePasswordView = () => [
        setPasswordView(!passwordView)
    ]

    return (
        <div className="mainLoginContent">
            <div className="mainLoginContentTexts">
                <span>Start for free</span>
                <h1>Create new account<strong>.</strong></h1>
                <small>Already A Member? <strong onClick={handleToggleView}>Log In</strong></small>
            </div>
            <div className="mainLoginContentForm">
                <div className="mainLoginContentFormDoubleBox">
                    <div className="mainLoginContentFormBoxItem">
                        <div className="mainLoginContentFormBoxItemInput">
                            <span>First Name</span>
                            <input type="text"/>
                        </div>
                        <HiIdentification />
                    </div>
                    <div className="mainLoginContentFormBoxItem">
                        <div className="mainLoginContentFormBoxItemInput">
                            <span>Last Name</span>
                            <input type="text"/>
                        </div>
                        <HiIdentification />
                    </div>
                </div>
                <div className="mainLoginContentFormSingleBox">
                    <div className="mainLoginContentFormBoxItem">
                        <div className="mainLoginContentFormBoxItemInput">
                            <span>Email</span>
                            <input type="text"/>
                        </div>
                        <MdEmail />
                    </div>
                </div>
                <div className="mainLoginContentFormSingleBox">
                    <div className="mainLoginContentFormBoxItem">
                        <div className="mainLoginContentFormBoxItemInput">
                            <span>Password</span>
                            <input type={passwordView ? "text" : "password"}/>
                        </div>
                        {passwordView ? <AiFillEyeInvisible onClick={tooglePasswordView}/> : <AiFillEye onClick={tooglePasswordView}/>}
                    </div>
                </div>
            </div>
            <div className="mainLoginContentButtons">
                <button>Create Account</button>
            </div>
        </div>
    )
}

const LoginView = ({handleToggleView}: LoginRegisterInterface) => {
    const [passwordView, setPasswordView] = useState(false)

    const tooglePasswordView = () => [
        setPasswordView(!passwordView)
    ]

    return (
        <div className="mainLoginContent">
            <div className="mainLoginContentTexts">
                <span>Welcome Back</span>
                <h1>Stay safe with us<strong>.</strong></h1>
                <small>Don't have an account? <strong onClick={handleToggleView}>Sign Up</strong></small>
            </div>
            <div className="mainLoginContentForm">
                <div className="mainLoginContentFormSingleBox">
                    <div className="mainLoginContentFormBoxItem">
                        <div className="mainLoginContentFormBoxItemInput">
                            <span>Email</span>
                            <input type="text"/>
                        </div>
                        <MdEmail />
                    </div>
                </div>
                <div className="mainLoginContentFormSingleBox">
                    <div className="mainLoginContentFormBoxItem">
                        <div className="mainLoginContentFormBoxItemInput">
                            <span>Password</span>
                            <input type={passwordView ? "text" : "password"}/>
                        </div>
                        {passwordView ? <AiFillEyeInvisible onClick={tooglePasswordView}/> : <AiFillEye onClick={tooglePasswordView}/>}
                    </div>
                </div>
            </div>
            <div className="mainLoginContentButtons">
                <button>Sign In</button>
            </div>
        </div>
    )
}

const Login = () => {
    const [toggleView, setToggleView] = useState(false)
    
    const handleToggleView = () => {
        setToggleView(!toggleView)
    }

    return (
        <div className="mainLogin">
            <div className="mainLoginBackground">
                <img alt="" src={`${process.env.PUBLIC_URL}/images/login-background1.jpg`}/>
                <span className="mainLoginBackgroundFade"></span>
            </div>
            <div className="mainLoginBox">
                {toggleView ? <LoginView handleToggleView={handleToggleView}/> : <RegisterView handleToggleView={handleToggleView}/>}
            </div>
        </div>
    )
}

export default Login