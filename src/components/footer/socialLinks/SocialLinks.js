import React from 'react'
import {
  Instagram,
  Facebook,
} from '@material-ui/icons'
import { Box, IconButton } from '@material-ui/core'

const SocialLinks = () => <Box
  style={{
    display: 'flex',
    justifyContent: 'flex-end',
  }}>
  <IconButton href='https://www.instagram.com/ossoftexas/' target='_blank'>
    <Instagram/>
  </IconButton>
  <IconButton href='https://www.facebook.com/profile.php?id=100007353422120' target='_blank'>
    <Facebook />
  </IconButton>
</Box>

export default SocialLinks