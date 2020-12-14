import { useEffect, useState } from 'react'
import fb from 'utils/firebase'
import { asyncMap } from 'utils/helpers'

const useEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    console.group('EVENTS HOOK')
    console.log('START')
    fb.firestore.collection('events')
      .orderBy('time.start', 'desc').get()
      .then(async(eventsCol) => {
        const newEvents = {}
          
        eventsCol.docs.forEach((doc) => {
          newEvents[doc.id] = {
            id: doc.id,
            files: [],
            ...doc.data(),
          }
        })

        await asyncMap(
          Object.values(newEvents),
          async(event) => {
            console.log(`get event ${event.id} data`)
            const files = await fb.storage.ref(`events/${event.id}`).listAll()
              .then((directory) => directory.items)
              .catch((error) => {
                console.log(error)
                return []
              })

            newEvents[event.id].files = await Promise.all(
              files.map((file) =>
                Promise.all([
                  file.getMetadata(),
                  file.getDownloadURL(),
                ])
                  .then(([metadata, url]) => ({
                    ...file,
                    metadata,
                    url,
                  }))
                  .catch((error) => {
                    console.log(error)
                    return []
                  }),
              ),
            )
            console.log(`event ${event.id}:`, newEvents[event.id])
          },
          () => {
            console.log('DONE:', newEvents)
            console.groupEnd('EVENTS HOOK')
            setEvents(Object.values(newEvents))
          },
        )
      })
  }, [])

  return events
}

export default useEvents
