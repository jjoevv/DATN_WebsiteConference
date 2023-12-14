import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Navbar, Container, NavDropdown, Nav, Image, Button, Dropdown, Tooltip } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import './../assets/styles/custom.css'
import NotiIcon from './../assets/imgs/noti.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const location = useLocation()

  const [show, setShow] = useState(false);

  const showDropdown = () => {
    navigate('/login')
  }


  console.log(auth)
  return (
    <Navbar expand="md" 
    className="bg-body-tertiary d-flex justify-content-between my-header container w-100  sticky-top"
    
    >
      <Container fluid className='d-flex justify-content-between shadow-sm px-4'>
        <Navbar.Brand href="/home" className='my-header-brand'>DOANTOTNGHIEP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Link to='/' className='mx-4 text-body-emphasis' title='Homepage'>
              Home
            </Link>

            <NavDropdown title="Conference" id="basic-nav-dropdown" className='m-0 mt-1 h6 text-body-emphasis fw-medium'>
              <NavDropdown.Item>
                <Link to="/followed" className='fw-normal text-secondary-emphasis'>Followed Conferences</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/yourconferences" className='fw-normal text-secondary-emphasis'>Your Conferences</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Link to='/timestamp' className='mx-4 text-body-emphasis' title='Timestamp'>
              Timestamp
            </Link>

            <Dropdown>

              <Dropdown.Toggle
                className='noti rounded-pill p-1 my-header-bg-icon mx-4 border-0'
                style={{}}
                title='Notification'
              >
                <Image src={NotiIcon} className='my-header-icon text-center m-auto' />
              </Dropdown.Toggle>


              <Dropdown.Menu className='shadow'
              >
                <div style={{ width: "300px", maxHeight: "300px" }} className='overflow-auto'>
                  {
                    auth.notiList.map(noti =>
                      <Dropdown.Item className='text-wrap fs-6 px-4 mx-0 d-inline-block text-truncate text-overflow-elli[sis' >
                        <Link to='/detail/1' className='fs-6 text-font-back'>
                          <strong>{noti.noti_message}</strong>
                          {noti.content}
                        </Link>
                      </Dropdown.Item>
                    )
                  }
                </div>
                
            <Dropdown.Divider />
                <Link to='/notifications' className='fs-6 fw-normal m-2 pt-3 text-font-darker'>View all notifications {"   >"}</Link>
              </Dropdown.Menu>
            </Dropdown>


            {
              auth.token ?
                <Link to='/account' className='rounded-pill p-1 my-header-bg-icon ' title='Login / Signup'>
                  <div></div>
                </Link>
                :
                <Button className='my-header-login' onClick={() => navigate('/login')}>LOG IN</Button>
            }

          </Nav>

        </Navbar.Collapse>        
      </Container>
     
    </Navbar>
  )
}

export default Header