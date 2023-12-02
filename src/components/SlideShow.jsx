import { useState } from 'react';
import { Card, Container, Stack, Image, Button } from 'react-bootstrap';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import UnfollowIcon from './../assets/imgs/unfollow.png'
import FollowIcon from './../assets/imgs/follow.png'
import TimeIcon from './../assets/imgs/time.png'
import LocationIcon from './../assets/imgs/location.png'
import PrevIcon from './../assets/imgs/control_prev.png'
import NextIcon from './../assets/imgs/control_next.png'
const test = [
    {
        con_id: 1,
        acronym: "KDD",
        con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        location: "Vietnam",
        update_time: "22/11/2023",
        follow: false,

    }, {
        con_id: 2,
        acronym: "KDD",
        con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        location: "Vietnam",
        update_time: "22/11/2023",
        follow: true,

    },
    {
        con_id: 3,
        acronym: "KDD",
        con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        location: "Vietnam",
        update_time: "22/11/2023",
        follow: false,

    },
    {
        con_id: 4,
        acronym: "KDD",
        con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        location: "Vietnam",
        update_time: "22/11/2023",
        follow: true,
    },
    {
        con_id: 5,
        acronym: "KDD",
        con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        location: "Vietnam",
        update_time: "22/11/2023",
        follow: false,

    },

]


const properties = {
    prevArrow: <Button className='custom_button_slideshow custom_button_prev'>
        <Image src={PrevIcon} style={{ width: "15px" }} fluid />
    </Button>,

    nextArrow: <Button className='custom_button_slideshow'>
        <Image src={NextIcon} style={{ width: "15px" }} />
    </Button>
}
const SlideShow = () => {
    const [listEvents, setListEvents] = useState(test)
    const onClickFollow = () => {
        
    }
    // console.log(listEvents)
    return (
        <Container className='mt-2' style={{ height: "300px" }} >
            

            <div className='m-4 border-0 rounded-4 p-4' style={{backgroundColor: "#F3FCFB"}}>
                <h4 className='mb-4'>Upcoming Event</h4>
                <Slide slidesToScroll={2} slidesToShow={2} indicators={false} {...properties} autoplay={false}>
                    {
                        listEvents.map((conf) => (
                            <Card
                                className='my-slider-card'
                                id={conf.con_id} key={conf.con_id}>
                                <Stack className=' p-0 ' direction='horizontal' >
                                    <div md={4} className='bg-white rounded-4 h1 fw-bolder d-flex align-items-center justify-content-center border border-secondary' style={{ width: '120px', height: "120px" }}>

                                        <span style={{ color: "#1E4540", fontSize: "35px", whiteSpace: "2%" }} className='fw-bold'>{conf.acronym}</span>

                                    </div>

                                    <Card.Body style={{ width: "360px" }}>

                                        <Stack>
                                            <Card.Title className='d-flex align-items-center mb-1' style={{ width: '360[x' }}>{conf.con_name}</Card.Title>
                                            <Stack direction="horizontal" gap={5}>
                                                <Card.Text className='d-flex align-items-center mb-1'>
                                                    <Image src={TimeIcon} className='me-2' style={{ width: '20px' }} />
                                                    <span className='conf-data'>{conf.update_time}</span>
                                                </Card.Text>
                                                <Card.Text className='d-flex align-items-center mb-1'>
                                                    <Image src={TimeIcon} className='me-2' style={{ width: '20px' }} />

                                                    <span className='conf-data'>{conf.update_time}</span>
                                                </Card.Text>
                                            </Stack>
                                        </Stack>
                                        <Card.Text className='conf-data m-0'>
                                            <Image src={LocationIcon} className='me-2' style={{ width: '18px' }} />
                                            {conf.location}
                                        </Card.Text>
                                    </Card.Body>
                                    <Button className='icon-slider-follow' onClick={onClickFollow()}>
                                        {
                                            conf.follow === true
                                                ?
                                                <>
                                                    <Image src={FollowIcon} style={{ width: '18px', textAlign: "center" }} />
                                                </>
                                                :
                                                <>
                                                    <Image src={UnfollowIcon} style={{ width: '18px', textAlign: "center" }} />
                                                </>
                                        }

                                    </Button>

                                </Stack>
                            </Card>

                        ))
                    }
                </Slide>
            </div>
        </Container>
    )
}

export default SlideShow