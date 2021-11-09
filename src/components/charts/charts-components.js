import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { hotels, initialData, options } from './../../hotels';
import './charts-component.css';

export default function ChartsComponent() {
    const [hotelColor, setHotelColor] = useState(initialData);

    const setCardColor = (id, className) => {
        const data = [...hotelColor];
        data.find(v => v.id === id).className = className
        setHotelColor(data);
    }
    return (
        <Card>
            <Card.Header>Welcome To Your Dashboard</Card.Header>
            <div className="d-flex">
                {hotels.map((hotel, index) => (
                    <Col key={index}>
                        <Card>
                            <Card.Header>
                                <div className="title">{hotel.name}</div>
                                <div className="btn-grp">
                                    <Button className="nme" size='sm' variant='primary' onClick={() => setCardColor(index, 'text-primary')}>Primary Color</Button>
                                    <Button size='sm' variant='secondary' onClick={() => setCardColor(index, 'text-secondary')}>Secondary Color</Button>
                                </div>
                            </Card.Header>
                            <Card.Body className={hotelColor[index].className}>
                                <Card.Title>Welcome to the lovely {hotel.name}!</Card.Title>
                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={options}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </div>
        </Card>
    )
}
