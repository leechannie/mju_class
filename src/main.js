// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App'
import router from './router'

import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDLxr0UL3qBEkeW1vdWNI3VuLV1ZVmN5UY",
  authDomain: "memo20201103.firebaseapp.com",
  databaseURL: "https://memo20201103.firebaseio.com",
  projectId: "memo20201103",
  storageBucket: "memo20201103.appspot.com",
  messagingSenderId: "337093264374",
  appId: "1:337093264374:web:1d020ae383278d6c623dd7",
  measurementId: "G-K41VDW7QG3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
