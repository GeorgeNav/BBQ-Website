import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { useStyles } from 'utils/style'
import SocialLinks from 'components/footer/SocialLinks'
import Locations from 'components/footer/Locations'
import { Phone } from '@material-ui/icons'

const Header = () => {
  const classes = useStyles()

  return <Box
    className={classes.footer}>
    <Box style={{
      display: 'flex',
      direction: 'row',
      justifyContent: 'center',
    }}>
      <Locations/>
      <Button href='tel:713-269-8882'>
        <Phone style={{color: 'white'}}/>
        <Typography style={{color: 'white'}}>713-269-8882</Typography>
      </Button>
      <SocialLinks/>
    </Box>
  </Box>
}

export default Header