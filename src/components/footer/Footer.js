import React from 'react'
import { Box, Button, Paper, Typography } from '@material-ui/core'
import { useStyles } from 'utils/style'
import SocialLinks from 'components/footer/socialLinks/SocialLinks'
import Locations from 'components/footer/locations/Locations'
import { Phone } from '@material-ui/icons'

const Header = () => {
  const classes = useStyles()

  return <Paper className={classes.footer}>
    <Box style={{
      display: 'flex',
      direction: 'row',
      justifyContent: 'center',
    }}>
      <Locations/>
      <Button href='tel:713-269-8882'>
        <Phone/>
        <Typography>713-269-8882</Typography>
      </Button>
      <SocialLinks/>
    </Box>
  </Paper>
}

export default Header