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
import { Swiper, SwiperSlide } from 'swiper/react'
import DateFnsUtils from '@date-io/date-fns'
import shortid from 'shortid'
import { useEvents } from 'hooks'

const mediaStyle = {
  width: 200,
  height: 200,
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
              <Swiper
                navigation
                pagination
                slidesPerView={1}
                spaceBetween={20}
                style={{
                  backgroundColor: 'red',
                }}>
                {event.files
                  .filter((file) => file.metadata.contentType.includes('image'))
                  .map((file) =>
                    <SwiperSlide
                      key={shortid.generate()}>
                      <img
                        src={file.url}
                        style={mediaStyle}/>
                    </SwiperSlide>)}
              </Swiper>
              <Box>
                <Swiper
                  navigation
                  pagination
                  slidesPerView={1}
                  spaceBetween={20}
                  style={{
                    backgroundColor: 'blue',
                  }}>
                  {(() => {
                    const videos = event.files.filter((file) =>
                      file.metadata.contentType.includes('video')) 
                    console.log('videos:', videos)
                    return videos.map((file) =>
                      <SwiperSlide
                        key={shortid.generate()}>
                        <video
                          controls
                          src={file.url}
                          style={mediaStyle}/>
                      </SwiperSlide>)
                  })()}
                </Swiper>
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