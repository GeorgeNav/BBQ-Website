import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { Map } from '@material-ui/icons'

const groupStyle = {
  flex: 1,
  display: 'flex',
  direction: 'row',
}

const Locations = () => {
  return <Box
    style={{
      display: 'flex',
      justifyContent: 'flex-start',
    }}>
    <Button
      style={groupStyle}
      href='https://goo.gl/maps/s22hgPAfGCzaRcLW8'
      target='_blank'>
      <Map/>
      <Typography >1314 East Ave, Katy, TX 77493</Typography>
    </Button>
  </Box>
}

export default Locations