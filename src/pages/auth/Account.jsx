import React, { useState } from 'react'
import { Container, InputGroup, ButtonGroup, Button, Image, Form, Row, Col } from 'react-bootstrap'

const test = {
  email: "example@gamil.com",
  password: "********",
  name: "testname",
  phone: "123456789",
  address: "KTX Khu B, Di An, Binh Duong",
  nationality: "Vietnam"
}
const Account = () => {
  const [user, setUser] = useState(test)
  const [profile, setProfile] = useState([
    { title: "Username", value: user.name },
  { title: "Phone", value: user.phone },
  { title: "Address", value: user.address },
  { title: "Nationality", value: user.nationality },
  ])
  const [isChangePassword, setChangePassord] = useState(false)
  const [isUpdate, setIsUpdate] = useState(true)
  const onClickChangePassword = () => {
    setChangePassord(true)
  }
  console.log(profile)
  return (
    <Container
      className='pt-5 ps-5'
      style={{ }}>
      <h4 className='mb-5'>Account</h4>
      <InputGroup className="mb-3 ms-4">
        <div className='me-5 pe-5 border-0 bg-transparent'>Email</div>
        <div id="basic-addon1" className='ms-5'>example@gamil.com</div>
      </InputGroup>
      <InputGroup className="mx-3 mt-4">
        <div className='me-5 pe-5 border-0 bg-transparent'>Password</div>
        <input
              placeholder='*********'
              className='border-1 rounded-2 ms-4 p-1 text-center'
              style={{width: '200px', border: "1px solid mediumseagreen"}}
            />
      </InputGroup>

        
        <Button className='rounded-2 bg-red-normal border-0 d-flex align-items-center justify-content-between px-4 ms-3 mt-4'>
        <Image width={20} height={20} className='me-2'/>
        Change button
        </Button>
        <h4 className='my-5'>Personal Data</h4>

        {
          profile.map(data=>(
        <Row className="mb-3 d-flex">
        
          <Col xs={2}>
          <label>{data.title}</label>
          
          </Col>
          <Col  className='ms-3'>
            {
              isUpdate
              ?
              <p  className='h6'>{data.value}</p>
              :
              <Form.Control type="email" placeholder={data.title} autoFocus={true} />
            }
          </Col>
      </Row>
            ))
            
        }
        <Button className='rounded-2 bg-blue-normal border-0 d-flex align-items-center justify-content-between px-4 ms-3 mt-4'>
        <Image width={20} height={20} className='me-2'/>
        Change button
        </Button>

    </Container>
  )
}

export default Account