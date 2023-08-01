import { Typography } from 'antd'
import React from 'react'

type myProps = {
    image: string,
    title: string,
    subtitle: string
}
const WorkCard: React.FC<myProps> = ({image, title, subtitle}) => {
  return (
    <div style={{backgroundImage: `url(${image})`}} className='workCardDiv'>
        <Typography.Text className='workTitle'>
            {title}
        </Typography.Text>

        <Typography.Text className='workSubtitle'>
            {subtitle}
        </Typography.Text>
    </div>
  )
}

export default WorkCard