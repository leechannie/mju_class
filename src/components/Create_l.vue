<template>
  <div>
    <b-input v-model="subject" placeholder="제목을 입력해 주세요"></b-input>
    <b-form-textarea
      v-model="context"
      placeholder="내용을 입력해 주세요"
      rows="10"
      max-rows="40"
    ></b-form-textarea>
    <b-button class="m" @click="updateMode ? updateContent() : uploadContent()">저장</b-button>
    <b-button class="m" @click="cancle">취소</b-button>
    <div>
    <!-- Plain mode -->
    <b-form-file accept = "image / *" v-model="file1" class="mt-3" plain></b-form-file>
    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
  </div>
  </div>
</template>
<script>
//import data from '@/data/lost.js'
import firebase from 'firebase'
var count = 0;
export default {
  name: 'Create',
  data() {
    return {
     contentId: 0,
      subject: '',
      context: '',
      userId: '이찬희', //유저아이디는 로그인과 연동
      createdAt: '', //날짜 설정은 데베에서 now로 구현
      updatedAt: null,
      updateObject: null,
      updateMode: this.$route.params.contentId > 0 ? true : false,
      file1: null, //사진
    }
  },
  created() {
    if (this.$route.params.contentId > 0) { //index번호가 있으면 수정모드
      const contentId = Number(this.$route.params.contentId)
      this.updateObject = data.Content.filter(item => item.content_id === contentId)[0]
      this.subject = this.updateObject.title;
      this.context = this.updateObject.context;
    }
  },
  
  
  methods: {
    uploadContent() { //파일 업로드
      var db = firebase.firestore();
      const today = new Date();
  
        db.collection("board_l").add({
          content_id: (count+1),
          user_id: "1",
          title: this.subject,
          context: this.context,
          created_at: today.getFullYear()+"."+(today.getMonth()+1)+"."+today.getDate()+" "+today.getHours()+":"+today.getMinutes(),
          updated_at: null
          })
          .then(function(){
            count =  count+1;
            alert(count)
          })
          .catch(function(error){
            alert("에러", error);
          })
      this.$router.push({ //저장하면 목록으로 돌아감
        path: '/board_l/free/'
      })
    },
    updateContent() { //수정한 내용이 올라감
      var db = firebase.firestore();
     var washingtonRef = db.collection("board_l").doc();
    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        title: this.subject,
        context: this.context,
    })
    .then(function() {
        alert("성공")
    })
    .catch(function(error) {
        alert("에러", error)
    });
      this.$router.push({
        path: '/board_l/free/'
      })
    },
    cancle() { //취소버튼
      this.$router.push({
        path: '/board_l/free/'
      })
    },
    async count(){
      var db = firebase.firestore();
      const sn = await db.collection("board_S").get()
      this.items = sn.docs.map(v=> {
        const item = v.data()
        return {
          title: item.title, user_name: item.user_id, created_at: item.created_at
        }
      })
      if (this.items.length > 0){
        count ++;
        return(count);
      }
    }
  }
}
</script>
<style>
.m{
  margin: 1em 0em;
}
</style>