import { BCardImg } from "bootstrap-vue";

export default {
    User: [
      {
        user_id: 1,
        name: '라이언 처돌이',
        created_at: '2018-09-11 11:42:11'
      },
      {
        user_id: 2,
        name: '과잠 극혐러',
        created_at: '2018-09-11 11:42:11'
      },
    ],
    Content: [
      {
        content_id: 1,
        user_id: 1,
        title: '카드 잃어버린 사람?',
        context: 'S1350에서 주움',
        created_at: '2020-11-15 11:42:11',
        updated_at: null,
        //file: require("../data/img/card.jpg")
      },
      {
        content_id: 2,
        user_id: 2,
        title: '강의실에 과잠 두고간 학우?',
        context: '융소 과잠같아서 과방에 놔둠',
        created_at: '2020-11-12 11:42:11',
        updated_at: null,
        file: null
      },
    ],
    Comment: [
      {
        comment_id: 1, 
        user_id: 1, //유저 번호
        content_id: 1,
        context: '헐 야 나!',
        created_at: '2020-11-12 11:42:11',
        updated_at: null
      },
    ],
    SubComment: [
      {
        subcomment_id: 1, //게시글 번호 
        comment_id: 1,
        user_id: 1,
        context: '너인지 내가 어떻게 알아서 줘? 이름대봐',
        created_at: '2020-11-12 11:42:11',
        updated_at: null
      }
    ]
  }