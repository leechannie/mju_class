<template>
  <div>
    <b-table 
      striped hover :items="items" 
                    :per-page="perPage"
                    :current-page="currentPage" 
                    :fields="fields" 
                    @row-clicked="rowClick"></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
    <b-button @click="writeContent">글쓰기</b-button>
  </div>
</template>`

<script>
//import data from '@/data/index.js' //data 파일에서 데이터 불러오기
import firebase from 'firebase'
export default {
  name: 'Board',
  data() {
    //let items = data.Content.sort((a,b) => {return b.content_id - a.content_id}) //역순 정렬
    // items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}}) //일치하는 유저 이름, id을 가져옴.
    return {
      currentPage: 1,
      perPage: 10,
      fields: [ //필드 달기
      {
         key: 'content_id',
          label: '글번호',
        },
        {
          key: 'title',
          label: '제목',
        },
        {
          key: 'created_at',
          label: '등록일'
        },
        {
          key: 'user_name',
          label: '글쓴이'
        },
      ],
      items: [],
      };
    },
    computed: {
      rows() {
      return this.items.length;
    }
  },
  created(){
    this.read()
  },
  methods: {
    rowClick(item) {
      this.$router.push({
        path: `/board/free/detail/${item.content_id}`
      })
    },
    writeContent(){
      this.$router.push({
        path: '/board/free/create'
      })
    },
    async read(){
      var db = firebase.firestore();
      const sn = await db.collection("board").orderBy("content_id","desc").get()
      this.items = sn.docs.map(v=> {
        const item = v.data()
        return {
         content_id:item.content_id, title: item.title, user_name: item.user_id, created_at: item.created_at
        }
      })

    }
  }
}
</script>
