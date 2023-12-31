import React, { useState } from 'react'
import { Container, Row, Card, Button, Image, Stack } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

import UnfollowIcon from './../assets/imgs/unfollow.png'
import FollowIcon from './../assets/imgs/follow.png'
import TimeIcon from './../assets/imgs/time.png'
import LocationIcon from './../assets/imgs/location.png'
import { useLocation, useNavigate } from 'react-router-dom'

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
    {
        con_id: 6,
        acronym: "KDD",
        con_name: "ACM International Conference on Knowledge Discovery and Data Mining",
        location: "Vietnam",
        update_time: "22/11/2023",
        follow: false,

    },

]
const Conference = () => {
    const [listConf, setListConf] = useState(test)
    const navigate = useNavigate()
    const location = useLocation()



    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 5;
    const currentItems = listConf.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(listConf.length / 5);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 5) % listConf.length;
        setItemOffset(newOffset);
    };

    const onClickFollow = (con_id, isFollow) => {

        console.log(listConf)
    }

    const chooseConf = (id) => {
        navigate(`/detail/${id}`)
    }
    console.log(location)

    return (
        <Container className='d-flex flex-column align-items-center'>
            {
                currentItems.map(conf => (
                    <Card
                        onClick={() => chooseConf(conf.con_id)}
                        className={location.pathname === "/followed" ? 'my-conf-card-followed' : 'my-conf-card-home'}
                        id={conf.con_id} key={conf.con_id}>
                        <Stack className=' p-0' direction='horizontal'>
                            <div md={4} className='bg-white rounded-4 h1 fw-bolder d-flex align-items-center justify-content-center ' style={{ width: '120px', height: "120px" }}>

                                <span style={{ divor: "#1e4540", fontSize: "40px", whiteSpace: "2%" }} className='fw-bold'>{conf.acronym}</span>

                            </div>
                            <div md={7} className=''>

                                <Card.Body className=''>
                                    <Card.Title>{conf.con_name}</Card.Title>
                                    <Stack direction="horizontal" gap={5}>
                                        <Card.Text className='d-flex align-items-center mb-1'>
                                            <Image src={TimeIcon} className='me-2' style={{ width: '20px' }} />
                                            <label className='conf-data-label'>Submission Date: </label>
                                            <span className='conf-data'>{conf.update_time}</span>
                                        </Card.Text>
                                        <Card.Text className='d-flex align-items-center mb-1'>
                                            <Image src={TimeIcon} className='me-2' style={{ width: '20px' }} />
                                            <label className='conf-data-label'>Conference Date: </label>
                                            <span className='conf-data'>{conf.update_time}</span>
                                        </Card.Text>
                                    </Stack>
                                    <Card.Text className='d-flex align-items-center'>
                                        <Image src={LocationIcon} className='me-2' style={{ width: '18px' }} />
                                        {conf.location}
                                    </Card.Text>
                                </Card.Body>
                                <Button className='icon-follow' onClick={onClickFollow()}>
                                    {
                                        conf.follow === true
                                            ?
                                            <>
                                                <Image src={FollowIcon} className='me-2 ' style={{ width: '18px' }} />
                                                <span>Unfollow</span>
                                            </>
                                            :
                                            <>
                                                <Image src={UnfollowIcon} className='me-2 ' style={{ width: '18px' }} />
                                                <span>Follow</span>
                                            </>
                                    }

                                </Button>
                            </div>

                        </Stack>
                    </Card>
                ))
            }
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="justify-content-center pagination"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
                disabledClassName="disabled"
            />
        </Container>
    )
}

export default Conference