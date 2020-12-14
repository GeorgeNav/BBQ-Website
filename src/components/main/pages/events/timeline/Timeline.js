import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab'
import shortid from 'shortid'
import { useEvents } from 'hooks'

const mediaStyle = {
  width: 300,
  height: 300,
  objectFit: 'cover',
}

const TimelineComp = () => {
  const events = useEvents()

  console.log('Events:', events)

  return events.length > 0 && <Timeline
    align='left'>
    {events.map((event) =>
      <TimelineItem
        key={shortid.generate()}>
        <TimelineOppositeContent>
          <Paper
            elevation={3}
            style={{
              padding: 20,
            }}>
            <Box
              style={{
                maxHeight: '50vh',
                overflowY: 'auto',
              }}>
              <Box>
                {(() => {
                  const images = event.files.filter((file) => file.metadata.contentType.includes('image'))
                  console.log('images:', images)
                  return images.length > 0 && images.map((file) =>
                    <img
                      key={shortid.generate()}
                      src={file.url}
                      style={mediaStyle}/>)
                })()}
              </Box>
              <Box>
                {(() => {
                  const videos = event.files.filter((file) => file.metadata.contentType.includes('videos'))
                  console.log('videos:', videos)
                  return videos.length > 0 && videos.map((file) =>
                    <video
                      key={shortid.generate()}
                      controls
                      src={file.url}
                      style={mediaStyle}/>)
                })()}
              </Box>
            </Box>
          </Paper>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Typography>{event.name}</Typography>
        </TimelineContent>
      </TimelineItem>,
    )}
  </Timeline>
}

export default TimelineComp