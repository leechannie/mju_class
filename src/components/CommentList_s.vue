<template>
  <div>
    <div :key="item.comment_id" v-for="item in comments">
      <CommentListItem :commentObj="item"/>
    </div>
    <CommentCreate :contentId="contentId" :reloadComments="reloadComments"/>
  </div>
</template>
<script>
import data from "@/data/study.js";
import CommentListItem from './CommentListItem_s';
import CommentCreate from './CommentCreate_s';
export default {
  name: "CommentList",
  props: {
    contentId: Number
  },
  components: {
    CommentListItem,
    CommentCreate,
  },
  data() {
    return {
      comments: data.Comment.filter(item => item.content_id === this.contentId),
    }
  },
  methods: { //댓글이 실시간으로 바로 달리게 하는 메소드 
    reloadComments() {
      this.comments = data.Comment.filter(item => item.content_id === this.contentId)
    }
  }
};
</script>