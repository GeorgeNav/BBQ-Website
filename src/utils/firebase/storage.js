import firebase from 'firebase/app'
import 'firebase/storage'
import fbConfig from 'utils/firebase/config.json'

const fbApp = firebase.initializeApp(fbConfig)

const fbStorage = firebase.storage(fbApp)

export default fbStorage
