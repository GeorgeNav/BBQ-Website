import firebase from 'firebase/app'
import 'firebase/storage'
import app from 'utils/firebase/app'

const storage = firebase.storage(app)

export default storage
