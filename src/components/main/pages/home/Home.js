import React from 'react'
import { Parallax } from 'react-parallax'
import { Box, Typography } from '@material-ui/core'
import Instagram from 'components/main/pages/home/instagram/Instagram'
import coalImg from 'assets/images/coal.jpg'

const Home = () => {
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
          Smoked Meat Unlike Any Other
        </Typography>
      </div>
    </Parallax>
    <Instagram/>
  </Box>
}

export default Home