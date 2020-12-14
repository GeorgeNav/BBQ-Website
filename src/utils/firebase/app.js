import firebase from 'firebase/app'
import fbConfig from 'utils/firebase/config.json'

const app = firebase.initializeApp(fbConfig)

export default app
