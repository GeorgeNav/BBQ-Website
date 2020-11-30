import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab'
import fb from 'utils/firebase'
import shortid from 'shortid'

const TimelineComp = () => {
  const [events, setEvents]= useState([])

  useEffect(async() => {
    const eventPaths = await fb.storage.ref('events').listAll()
      .then((data) => data.prefixes.map((childDirectory) => childDirectory.fullPath))
      .catch((error) => {
        console.log(error)
        return []
      })
    
    console.log(eventPaths)
    
    const allEventFilePaths = eventPaths.map((eventPath) =>
      fb.storage.ref(eventPath).listAll()
        .then((data) =>
          Promise.all(
            data.items.map((file) =>
              Promise.all([
                file.getMetadata(),
                file.getDownloadURL(),
              ])
                .then(([metadata, url]) => ({
                  metadata,
                  url,
                })),
            ),
          ),
        )
        .catch((error) => {
          console.log(error)
          return []
        }),
    )

    Promise.all(allEventFilePaths).then((allEvents) => {
      console.log(allEvents)
      setEvents(allEvents)
    })
    /*     .getDownloadURL()
    .then((url) => {
      console.log(extension, 'url:', url)
      setResumeURLs((prevResumeURLs) => ({
        ...prevResumeURLs,
        [extension]: url,
      }))
    })
    .catch((error) => console.log(error)) */
  }, [])

  return <Timeline align='alternate'>
    {events.map((event) =>
      <TimelineItem
        key={shortid.generate()}>
        <TimelineOppositeContent>
          <Typography color='textSecondary'>Other Side</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent
          style={{
            maxHeight: '50vh',
            overflowY: 'auto',
          }}>
          {event.map((file) =>
            <Box
              key={shortid.generate()}>
              {(() => {
                if(file.metadata.contentType.includes('image'))
                  return <img
                    src={file.url}
                    style={{maxWidth: '30vw'}}/>
                else if(file.metadata.contentType.includes('video'))
                  return <video
                    controls
                    src={file.url}
                    style={{maxWidth: '30vw'}}/>
              })()}
            </Box>,
          )}
        </TimelineContent>
      </TimelineItem>,
    )}
  </Timeline>
}

export default TimelineComp