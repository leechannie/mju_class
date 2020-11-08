<template>
  <div>
    <div class="comment-list-item">
      <div class="comment-list-item-name">
        <!-- 이름 날짜 불러오기 -->
        <div>{{name}}</div> 
        <div>{{commentObj.created_at}}</div>
      </div>
      <div class="comment-list-item-context">{{commentObj.context}}</div>
      <div class="comment-list-item-button">
        <!-- <b-button variant="info" @click="updateContent">수정</b-button>
        <b-button variant="info" @click="deleteComments">삭제</b-button> -->
        <b-button class="b" @click="subCommentToggle">답글</b-button> 
      </div>
    </div>
    <template v-if="subCommentCreateToggle">
      <CommentCreate
        :isSubComment="true"
        :commentId="commentObj.comment_id"
        :reloadSubComments="reloadSubComments"
        :subCommentToggle="subCommentToggle"
      />
    </template>
    <template v-if="subCommentList.length > 0">
      <div
        class="comment-list-item-subcomment-list"
        :key="item.subcomment_id"
        v-for="item in subCommentList"
      >
        <div class="comment-list-item-name">
          <div>{{item.user_name}}</div>
          <div>{{item.created_at}}</div>
        </div>
        <div class="comment-list-item-context">{{item.context}}</div>
        <div class="comment-list-item-button">
          <!-- <b-button variant="info">수정</b-button>
          <b-button variant="info">삭제</b-button> -->
          <b-button class="b" @click="subCommentToggle">답글</b-button> 
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import data from "@/data/lost.js"; //data에서 데이터를 불러오는 곳
import CommentCreate from "./CommentCreate_l";
export default {
  name: "CommentListItem",
  props: {
    commentObj: Object
  },
  components: {
    CommentCreate
  },
  data() {
    return { //한 게시글의 모든 댓글을 그 게시글로 가져오게 하는 데이터  
      name: data.User.filter(
        item => item.user_id === this.commentObj.user_id
      )[0].name,
      subCommentList: data.SubComment.filter(
        item => item.comment_id === this.commentObj.comment_id
      ).map(subCommentItem => ({
        ...subCommentItem,
        user_name: data.User.filter(
          item => item.user_id === subCommentItem.user_id
        )[0].name
      })),
      subCommentCreateToggle: false //현재 서브코멘트를 매칭해주는 거
    };
  },
  methods: {
    subCommentToggle() {
      this.subCommentCreateToggle = !this.subCommentCreateToggle;
    },
    reloadSubComments() {
      this.subCommentList = data.SubComment.filter(
        item => item.comment_id === this.commentObj.comment_id
      ).map(subCommentItem => ({
        ...subCommentItem,
        user_name: data.User.filter(
          item => item.user_id === subCommentItem.user_id
        )[0].name 
      }));
    },
    //수정 삭제 기능 구현 아직 x
    // updateContent() { //수정한 내용이 올라감
    //   this.updateObject.content_id = this.contentId,
    //   this.updateObject.context = this.context;
    //   this.$router.push({
    //     path: `/board/free/detail/${this.comment_id}` 
    //   })
    // },
    deleteComments() { //삭제 메소드 
      const comment_id = data.Comment.filter(item => item.comment_id === this.commentObj)
      data.Comment.splice(comment_index, 1) 
      this.$router.push({
        path: `/board_l/free/detail/${this.comment_id}`
      })
    },
  }
};
</script>
<style scoped>
.comment-list-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
}
.comment-list-item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 10px;
  width: 15em;
  min-height: 3em;
}
.comment-list-item-context {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50em;
  min-height: 3em;
  border: 0.5px solid black;
}
.comment-list-item-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width: 10em;
  min-height: 3em;
}
.btn {
  margin-bottom: 1em;
}
.comment-list-item-subcomment-list {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-left: 5em;
}
.b{ 
  background-color: rgb(14, 70, 106);
}
</style>