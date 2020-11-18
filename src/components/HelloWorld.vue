<template>
  <b-button @click="save">취소</b-button>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      e: ''
    }
  },
  methods: {
    save(){
        firebase.database().ref().child('테스트').set({
          name: '찬희'
      })
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(52, 152, 218);
}
</style>
