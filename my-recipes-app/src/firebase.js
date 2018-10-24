import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyAwzW5_gzw1XGI0-A9G8N3kGfwE5yfBdtw",
    authDomain: "cocktailsrecipes-876dd.firebaseapp.com",
    databaseURL: "https://cocktailsrecipes-876dd.firebaseio.com",
    projectId: "cocktailsrecipes-876dd",
    storageBucket: "cocktailsrecipes-876dd.appspot.com",
    messagingSenderId: "170989816088"
  };
  firebase.initializeApp(config);



const fire = firebase.firestore();
fire.settings({
    timestampsInSnapshots: true
})

export const db = fire;