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
import data from '@/data/lost.js'
export default {
  name: 'Create',
  data() {
    return {
      subject: '',
      context: '',
      userId: 1, //유저아이디는 로그인과 연동
      createdAt: '2019-04-17 11:32:42', //날짜 설정은 데베에서 now로 구현
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
      let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
      const content_id = items[0].content_id + 1 //콘텐츠 번호를 최신의 +1로 함
      data.Content.push({
        content_id: content_id,
        user_id: this.userId,
        title: this.subject,
        context: this.context,
        created_at: this.createdAt,
        updated_at: null
      })
      this.$router.push({ //저장하면 목록으로 돌아감
        path: '/board_l/free/'
      })
    },
    updateContent() { //수정한 내용이 올라감
      this.updateObject.title = this.subject;
      this.updateObject.context = this.context;
      this.$router.push({
        path: '/board_l/free/'
      })
    },
    cancle() { //취소버튼
      this.$router.push({
        path: '/board_l/free/'
      })
    }
  }
}
</script>
<style>
.m{
  margin: 1em 0em;
}
</style>