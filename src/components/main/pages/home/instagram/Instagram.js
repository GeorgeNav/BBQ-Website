import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GridList } from '@material-ui/core'
import InstagramTile from 'components/main/pages/home/instagram/InstagramTile'

const Instagram = () => {
  const [posts, setPosts] = useState(null)
  const tileSize = 200
  const containerSize = tileSize * 3

  useEffect(async() => {
    const variables = {
      id: '44904784778', // ossoftexas 
      //id: '5841654985', // georgeyhehe123 
      first: 20,
    }
    const url = 'https://www.instagram.com/graphql/query/?query_hash=56a7068fea504063273cc2120ffd54f3&variables=' + JSON.stringify(variables)
    axios.get(url)
      .then((response) => {
        const posts = response.data.data.user.edge_owner_to_timeline_media.edges.map(({ node }) => ({
          id: node.id,
          thumbnail: node.thumbnail_src,
          url: `https://instagram.com/p/${node.shortcode}`,
          caption: node.edge_media_to_caption.edges[0]
            ? node.edge_media_to_caption.edges[0].node.text : undefined,
        }))
        setPosts(posts)
      })
      .catch((error) => console.log(error))
  }, [])
  
  return posts && <GridList
    cols={2}
    spacing={0}
    style={{
      margin: 'auto',
      width: containerSize,
      height: containerSize,
      overflowY: 'auto',
    }}>
    {posts.map((post) =>
      <InstagramTile
        key={post.id}
        size={tileSize}
        {...post}/>,
    )}
  </GridList>
}

export default Instagram