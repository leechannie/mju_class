<template>
  <div>
    <b-input v-model="subject" placeholder="제목을 입력해 주세요"></b-input>
    <b-form-textarea
      v-model="context"
      placeholder="내용을 입력해 주세요"
      rows="10"
      max-rows="40"
    ></b-form-textarea>
    <b-button @click="updateMode ? updateContent() : save()">저장</b-button>
    <b-button @click="cancle">취소</b-button>
  </div>
</template>
<script>
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
      updateMode: this.$route.params.contentId > 0 ? true : false
    }
  },
  created() {
    if (this.contentId < count) { //index번호가 있으면 수정모드
      const contentId = Number(this.$route.params.contentId)
      this.updateObject = data.Content.filter(item => item.content_id === contentId)[0]
      this.subject = this.updateObject.title;
      this.context = this.updateObject.context;
    }
  },
  methods: {
    save() { //파일 업로드
    var db = firebase.firestore();
    const today = new Date();
    
    // let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
      // const content_id = items[0].content_id + 1 //콘텐츠 번호를 최신의 +1로 함
      // data.Content.push({
        // content_id: content_id,
        // user_id: this.userId,
        // title: this.subject,
        // context: this.context,
        // created_at: this.createdAt,
        // updated_at: null,
        db.collection("board").add({
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
        path: '/board/free/'
      })
    },
    updateContent() { //수정한 내용이 올라감
     // this.updateObject.title = this.subject;
     // this.updateObject.context = this.context;
     var db = firebase.firestore();
     var washingtonRef = db.collection("board").doc();
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
        path: '/board/free/'
      })
    },
    cancle() { //취소버튼
      this.$router.push({
        path: '/board/free/'
      })
    },
    async count(){
      var db = firebase.firestore();
      const sn = await db.collection("board").get()
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