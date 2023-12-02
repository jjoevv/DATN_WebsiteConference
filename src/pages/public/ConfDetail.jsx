import React from 'react'
import { useState } from 'react'
import { Container, Row, Col, Button, Image, Stack, ButtonGroup, Card } from 'react-bootstrap'

import acronym from './../../assets/imgs/acronym.png'
import source from './../../assets/imgs/source.png'
import rank from './../../assets/imgs/rank.png'
import hold from './../../assets/imgs/hold.png'
import impactfactor from './../../assets/imgs/impactfactor.png'
import averagerating from './../../assets/imgs/averagerating.png'
import FoR from './../../assets/imgs/for.png'
import form from './../../assets/imgs/form.png'
import submission from './../../assets/imgs/submission_date.png'
import noti from './../../assets/imgs/noti_date.png'
import camera from './../../assets/imgs/camera_date.png'
import conf_date from './../../assets/imgs/conf_date.png'
import location from './../../assets/imgs/venue.png'
import follow from './../../assets/imgs/follow.png'
import unfollow from './../../assets/imgs/unfollow.png'

const test = {
  con_id: 5,
  acronym: "KDD",
  con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
  location: "Vietnam",
  update_time: "22/11/2023",
  follow: false,
  source: "CORE2023",
  comments: [
    {
      username: "kasaskld",
      time: "April 19, 2018, 3:41 a.m.",
      content: ""
    }
  ]
}
const ConfDetail = () => {
  const [conf, setConf] = useState(test)
  const [comments, setComments] = useState(0)
  const [data, setData] = useState([
    {
      label: "Acronym", icon: acronym,value: conf.acronym,
    },
    {
      label: "Form", icon: form, value: conf.acronym
    },
    {
      label: "Source", icon: source, value: conf.source
    },
    {
      label: "Submission Date", icon: submission, value: conf.update_time,
    },
    {
      label: "Rank", icon: rank, value: conf.acronym
    },
    {
      label: "Notification Date", icon: noti, value: conf.update_time,
    },
    {
      label: "Hold", icon: hold, value: conf.acronym
    },
    {
      label: "Camera Date", icon: camera, value: conf.update_time,
    },
    {
      label: "Impact factor", icon: impactfactor, value: conf.acronym
    },
    {
      label: "Conference Date", icon: conf_date, value: conf.update_time,
    },
    {
      label: "Average rating", icon: averagerating, value: conf.acronym
    },
    {
      label: "Location",
      icon: location, value: conf.location,
    },
    {
      label: "Field of Research", icon: FoR, value: conf.acronym
    },
  ])

  return (
    <Container className='p-5'>
      <Row className='px-5'>
        <Col sm={10}>
          <h3 style={{color: "#E95D54"}}>{conf.con_name}</h3>
          <Row className='mt-5 ps-5'>
            {
              data.map((item, index) => {
                return index <= 7 ?
                  <Col xs={6}>  
                    <Stack key={index} direction='horizontal' className='mb-4'>
                      <div><Image src={item.icon} width={50} className='me-3'/></div>
                      <div>
                        <label style={{fontSize: "16px", color: "#646665"}}>{item.label}</label>
                        <div className="fw-bold" style={{fontSize: "18px", color: "#434343"}}>{item.value}</div>
                      </div>
                    </Stack>
                  </Col>
                  :
                  <Col xs={6}>
                    <Stack key={index} direction='horizontal' className='mb-4'>
                      <div><Image src={item.icon} width={50} className='me-3'/></div>
                      <div>
                        <label style={{fontSize: "16px", color: "#646665"}}>{item.label}</label>
                        <div className="fw-bold" style={{fontSize: "18px", color: "#434343"}}>{item.value}</div>
                      </div>
                    </Stack>
                  </Col>
              })
            }
          </Row>
        </Col>

        <Col className='text-end'>
          <Button
            title='Follow this conference'
             style={{width: '60px', height: "60px", backgroundColor: "#E8F1F3", border: "1px solid #419489"}} className='rounded-circle'>  
            <Image src={follow} width={25} height={30}/>
          </Button>

        </Col>
      </Row>

      <ButtonGroup className='px-5 ms-5 mt-4 '>
        <Button 
          href='https://www.youtube.com/'
          target='_blank'
          title='Read more information details about conference'
          className='me-4 rounded-pill fw-bold border-0'
          style={{color: "#419489", backgroundColor: "#C2F1EB"}}
        >See more &gt;
        </Button>
        <Button 
          title='Data updates occur every 3 days; to get the latest information, click "Update information."'
          className='me-4 rounded-pill fw-bold border-0 ps-3'
          style={{backgroundColor: "#419489"}}
        >Update Information
        </Button>
        
    <hr style={{
        color: '#419489',
        backgroundColor: '#000000',
        height: .1,
        width: "1260px",
        borderColor: '#000000',
        position: "absolute",
        marginTop: "70px",
        marginLeft: "auto"
      }} />
    </ButtonGroup>


    </Container>
  )
}

export default ConfDetail