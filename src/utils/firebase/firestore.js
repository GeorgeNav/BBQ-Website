import firebase from 'firebase/app'
import 'firebase/firestore'
import app from 'utils/firebase/app'

const firestore = firebase.firestore(app)

export default firestore
