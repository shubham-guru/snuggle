import { Col, Row, Typography } from 'antd'
import React from 'react'
import '../css/work.css'
import { WorkData } from '../../constants/Work'
import WorkCard from './WorkCard'

const Works = () => {
  return (
    <Row>
        <Col span={24} style={{top: '500px'}}>
            <Typography.Title className='workHeading'>
                How It Works
            </Typography.Title>
        <Col span={24} className='workDataCol'>
            {
                WorkData.map((item: any, index: any)=> {
                    return(
                        <WorkCard image={item.image} title={item.title} subtitle={item.subTitle} key={index} />
                    )
                })
            }
            </Col>
            <div className='workBg'>shsh</div>
        </Col>
    </Row>
  )
}

export default Works