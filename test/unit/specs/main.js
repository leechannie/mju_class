// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { BIconTypeH1, BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App'
import router from './router'

import 'firebase/auth'
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

//firebase를 전역 변수로 참조
console.log(firebase)

//인증 서비스 제공 업체
var provider = new firebase.auth.GoogleAuthProvider();


///// 사용자 인증 /////

const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');



/// 인증 이벤트 처리

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // 사인 인
        
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        /*userDetails.innerHTML = `<h3>안녕하세요 ${user.displayName}!</h3> <p>사용자 아이디 : ${user.uid}</p>`;*/
    } else {
        // 사인인 안 했을때
        firebase.auth().signOut();
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});




Vue.use(BootstrapVue)
 /*eslint-disable no-new*/ 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
