import React from 'react'
import { Row, Col } from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { SignInButton } from './signin'
import "./Login.css"


function Login() {
    const navigate = useNavigate()


    document.title = "Green Thumb | Health, Happiness & Wellbeing with Cannabis"
    const accessToken = localStorage.getItem('accessToken');
    useEffect(() => {
        // Check if there's an access token in local storage or a cookie
   
        if (accessToken) {
            navigate("/homepage")

        }
        else {
            navigate("/")
        }
    }, [accessToken,navigate]);




    return (
        <div>
            <div className="limiter" id="login">
                <div className="container-login100 background-img" >
                    <div className="container">
                        <Row>
                            <Col lg={{ span: 11, offset: 15 }}>
                                <div className="row">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-5 col-md-offset-1">
                                        <div className="login_topimg"> </div>
                                        <div className="wrap-login100">
                                            <form className="login100-form validate-form">
                                                <span className="login100-form-title "> Sign in </span>
                                                <span className="login100-form-subtitle m-b-16"> With Microsoft Account</span>
                                                <div className="wrap-input100 validate-input m-b-16" data-validate="Valid email is required: ex@abc.xyz">
                                                    <input className="input100" type="text" name="Username" placeholder="Username" />
                                                    <span className="focus-input100"></span>
                                                    <span className="symbol-input100"> <span className="glyphicon glyphicon-user"></span> </span>
                                                </div>

                                                <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                                    <input className="input100" type="password" name="pass" placeholder="Password" />
                                                    <span className="focus-input100"></span> <span className="symbol-input100">
                                                        <span className="glyphicon glyphicon-lock"></span> </span>
                                                </div>

                                                {/* <a href="form-home.html" className="container-login100-form-btn p-t-25"> */}
                                                <div className="container-login100-form-btn p-t-25">
                                                    <button className="login100-form-btn" > Login </button>
                                                </div>
                                                <div>
                                                    <SignInButton />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
           
            <div>
            </div>

        </div>

    )
}

export default Login
