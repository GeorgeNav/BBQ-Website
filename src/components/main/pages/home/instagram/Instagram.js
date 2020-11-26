import React, { useEffect, useState } from 'react'
import axios from 'axios'
import shortid from 'shortid'
import { GridList, GridListTile } from '@material-ui/core'

const Instagram = () => {
  const [posts, setPosts] = useState([])

  useEffect(async() => {
    // %7B%22only_stories%22%3Atrue%2C%22stories_prefetch%22%3Afalse%2C%22stories_video_dash_manifest%22%3Afalse%7D
    const variables = {
      id: '5841654985',
      first: 10,
    }
    const url = 'https://www.instagram.com/graphql/query/?query_hash=56a7068fea504063273cc2120ffd54f3&variables=' + JSON.stringify(variables)
    axios.get(url)
      .then((response) => {
        console.log(response)
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

  return <GridList style={{
    margin: 'auto',
    width: 400,
    height: 400,
    overflowY: 'auto',
  }}>
    {posts.map((post) =>
      <GridListTile
        onClick={() => window.open(post.url)}
        component='button'
        key={shortid.generate()}>
        <img
          src={post.thumbnail}
          alt={post.caption}
          style={{
            width: 200,
          }}/>
      </GridListTile>)}
  </GridList>
}

export default Instagram