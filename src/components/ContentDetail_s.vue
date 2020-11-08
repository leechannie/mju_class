<template>
  <div>
    <b-card>
        
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left"> <!-- 왼쪽에 숫자 -->
          <div class="content-detail-content-info-left-number">
            {{contentId}}
          </div>
          <div class="content-detail-content-info-left-subject"> <!-- 왼쪽에 제목 -->
            {{title}}
          </div>
        </div>
        <div class="content-detail-content-info-right"> <!-- 오른쪽에 글쓴이 -->
          <div class="content-detail-content-info-right-user">
            글쓴이: {{user}}
          </div>
          <div class="content-detail-content-info-right-created"> <!-- 오른쪽에 등록일 -->
            등록일: {{created}}
          </div>
        </div>
      </div>
      <div class="content-detail-content">
        {{context}}
      </div>
      <div class="content-detail-button">
        <b-button class="update" @click="updateData">수정</b-button>
        <b-button class="delete" @click="deleteData">삭제</b-button>
      </div>
      <div class="content-detail-comment">
        <CommentList :contentId="contentId"/> <!-- 댓글구현 자신 컴포넌트에 부모 컴포넌트가 id를 전달해줌 -->
      </div>
    </b-card>
  </div>
</template>

<script>
import data from "@/data/study.js";
import CommentList from "./CommentList_s";

export default {
  name: "ContentDetail",
  components: {
    CommentList,
  },
  data() {
    const contentId = Number(this.$route.params.contentId);
    const contentData = data.Content.filter(item => item.content_id === contentId)[0]
    return { //글에 필요한 내용을 가져오기 위한 부분
      contentId: contentId,
      title: contentData.title,
      context: contentData.context,
      user: data.User.filter(item => item.user_id === contentData.user_id)[0]
        .name,
      created: contentData.created_at
    };
  },
  methods: {
    deleteData() {
    //조건에 맞는 데이터의 content 배열을 가져와서 index를 통해 객체를 반환한 후, splice 함수로 삭제함
      const content_index = data.Content.findIndex(item => item.content_id === this.contentId);
      data.Content.splice(content_index, 1) 
      this.$router.push({
        path: '/board_s/free'
      })
    },
    updateData() { //수정 메소드
      this.$router.push({
        path: `/board_s/free/create/${this.contentId}` //content의 번호가 index 됨(빈 인풋이 아닌 콘텐츠 번호의 객체를 보여줌)
      })
    }
  }
};
</script>
<style scoped>
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.content-detail-content-info-left {
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 250px;
  text-align: left;
}
.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
.update{
  background-color:rgb(52, 152, 219);
  color: white;
  border: rgb(52, 152, 219);
}
.delete{
  background-color:  rgb(14, 70, 106);
  color: white;
  border: rgb(14, 70, 106);
}
</style>