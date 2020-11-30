import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { Map } from '@material-ui/icons'

const Locations = () => {
  return <Box
    style={{
      display: 'flex',
      justifyContent: 'flex-start',
    }}>
    <Button
      href='https://goo.gl/maps/s22hgPAfGCzaRcLW8'
      target='_blank'
      style={{
        flex: 1,
        display: 'flex',
        direction: 'row',
        color: 'white',
      }}>
      <Map/>
      <Typography>1314 East Ave, Katy, TX 77493</Typography>
    </Button>
  </Box>
}

export default Locations