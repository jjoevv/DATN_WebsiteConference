import React, { useState } from 'react'
import { Container, Form, Button, ButtonGroup, Stack, Row, Col, Image } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'

import googleIcon from './../../assets/imgs/google.png'
import { useAuth } from '../../context/AuthContext'
const Login = () => {
    const auth = useAuth()
    const [account, setAccount] = useState({
        email: "",
        password: "",
    })
    const [showpassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const value = { ...account, [event.target.name]: event.target.value }
        setAccount(value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        auth.onLogin()
        
        console.log(account)
    }
    const chooseSignup = () => {
        navigate('/signup')
    }
    return (
        <Container className="100-w 100-h min-vh-100 d-flex justify-content-center align-items-center text-center" fluid={true} style={{ backgroundColor: "#C2F1EB" }} >
            <Row className='bg-white rounded-5 d-flex box-area' style={{ width: "1180px" }}>
                
                <Col className='p-5 d-flex flex-column align-items-center justify-content-center' >

                    <Form onSubmit={onSubmit} style={{maxWidth: "420px"}} >
                        <h1 className='mb-4 fw-bold' style={{fontSize: "30px", color: "#419489"}}>Log In</h1>
                        <Button className='border-0' style={{backgroundColor: "#E8F1F3", color: "#434343"}}>
                            <Image src={googleIcon} width={20} className="me-2"/>
                            You can join with your Google account</Button>
                        <div className='d-flex flex-row align-items-center'>
                            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

                            <div><p className='pt-3 mx-3'>or log in with your account</p></div>

                            <div style={{flex: 1, height: '1px', backgroundColor: 'gray'}} />
                        </div>
                        <Form.Group className="mb-3 text-start">
                            <Form.Label htmlFor="inputPassword5" style={{fontSize: "20px", color: "#434343"}}>Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                value={account.email}
                                placeholder="name@example.com"
                                onChange={handleInputChange}
                                required
                                style={{backgroundColor: "#F3FCFB", borderRadius: "15px", padding: "12px 16px"}}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4 text-start">
                        <Form.Label htmlFor="inputPassword5" style={{fontSize: "20px", color: "#434343"}}>Password</Form.Label>  
                            <Form.Control
                                type={showpassword ? "text" : "password"}
                                value={account.password}
                                name="password"
                                placeholder='Password'
                                onChange={handleInputChange}
                                required
                                style={{backgroundColor: "#F3FCFB", borderRadius: "15px", padding: "12px 16px"}}
                            />
                        </Form.Group>
                        <ButtonGroup className="d-flex justify-content-around mb-3">
                            <Button className='bg-transparent border-0 p-0' style={{color: "#434343"}}>Forgot Password?</Button>
                        </ButtonGroup>
                        <Button 
                            type='submit' 
                            className='border-0 fw-bold rounded-3 p-2' 
                            style={{width: "140px", fontSize: "20px", backgroundColor: "#419489"}}>
                                
                                LOG IN 
                            </Button>
                        <ButtonGroup className="my-3  mx-5 d-flex align-items-center ">
                            <span htmlFor="#signup">Don't have an account?</span>
                            <Button
                                className='bg-transparent border-0 fw-bold'
                                style={{fontSize: "20px", color: "#419489"}}
                                onClick={chooseSignup}>
                                <span>SIGN UP</span>
                            </Button>
                        </ButtonGroup>
                    </Form>
                </Col>
                <Col sm={4} className='d-flex flex-column align-items-center justify-content-center rounded-end-5 text-light' style={{backgroundColor: "#419489"}}>
                    <span className='h1 mb-2'>Welcome Back!</span>
                    <span>Enter your personal account and keep following conferences/magazines!</span>

                    <div className=' border border-1 p-2 mt-5 border-white rounded-2'>
                        <Link to='/' className='fs-6 text-light'>  {"<  "}Back to Homepage</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login