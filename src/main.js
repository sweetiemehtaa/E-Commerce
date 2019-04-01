
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'

Vue.use(Vuetify)
firebase.initializeApp({
     apiKey: "AIzaSyCSzdRjP7q61k8WfrnUruO9jwX0VRjJEKw",
    authDomain: "userregister-10412.firebaseapp.com",
    databaseURL: "https://userregister-10412.firebaseio.com",
    projectId: "userregister-10412",
    storageBucket: "userregister-10412.appspot.com",
    messagingSenderId: "343003303289"
})
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        store.dispatch('autoSignIn', firebaseUser)
      }
    })
  }
})
