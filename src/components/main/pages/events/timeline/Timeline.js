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
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
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

  return <Timeline
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
                  return images.map((file) =>
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
                  return videos.map((file) =>
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
          <Typography variant='h3'>{event.name}</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              label='start date'
              value={event.time.start.toDate()}
              onChange={() => {}}/>
            <KeyboardTimePicker
              margin='normal'
              label='start time'
              value={event.time.start.toDate()}
              onChange={() => {}}/>
          </MuiPickersUtilsProvider>
          <Typography>{event.description}</Typography>
        </TimelineContent>
      </TimelineItem>,
    )}
  </Timeline>
}

export default TimelineComp