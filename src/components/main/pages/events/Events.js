import React from 'react'
import { Parallax } from 'react-parallax'
import { Box, Typography } from '@material-ui/core'
import Timeline from 'components/main/pages/events/timeline/Timeline'
import coalImg from 'assets/images/coal.jpg'

const Events = () => {
  return <Box>
    <Parallax
      bgImage={coalImg}
      strength={500}>
      <div
        style={{
          padding: 100,
          maxWidth: 1000,
          minHeight: '30%',
          margin: 'auto',
        }}>
        <Typography
          variant='h2'
          style={{
            color: 'white',
            userSelect: 'none',
          }}>
          Events
        </Typography>
      </div>
    </Parallax>
    <Timeline/>
  </Box>
}

export default Events