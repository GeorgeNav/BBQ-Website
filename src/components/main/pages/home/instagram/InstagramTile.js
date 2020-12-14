import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GridListTile } from '@material-ui/core'
import { useSpring, animated } from 'react-spring'

const InstagramTile = ({size, url, caption, thumbnail}) => {
  const [hovering, setHovering] = useState(false)
  const props = useSpring({
    width: hovering ? 1.5 * size : 1 * size,
    // opacity: hovering ? 1 : 0.9,
  })

  return <GridListTile
    cols={1}
    rows={1}
    onClick={() => window.open(url)}>
    <animated.img
      src={thumbnail}
      onMouseEnter={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      alt={caption}
      style={props}/>
  </GridListTile>
}

InstagramTile.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  caption: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
}

export default InstagramTile
