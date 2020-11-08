export default {
    User: [
      {
        user_id: 1,
        name: '관리자1',
        created_at: '2018-09-11 11:42:11'
      },
      {
        user_id: 2,
        name: '명지대',
        created_at: '2018-09-11 11:42:11'
      },
      {
        user_id: 3,
        name: '관리자2',
        created_at: '2018-09-11 11:42:11'
      },
    ],
    Content: [
      {
        content_id: 1,
        user_id: 1,
        title: '[공지사항] 야간개방',
        context: '아직 미정입니다.',
        created_at: '2019-01-01 13:11:42',
        updated_at: null
      },
      {
        content_id: 2,
        user_id: 3,
        title: '[공지사항] 강의 예약',
        context: '화이팅!',
        created_at: '2019-01-02 13:11:42',
        updated_at: null
      },
      {
        content_id: 3,
        user_id: 2,
        title: '[공지사항] 최대인원',
        context: '^^',
        created_at: '2019-03-29 13:11:42',
        updated_at: null
      }
    ],
    Comment: [
      {
        comment_id: 1, 
        user_id: 1, //유저 번호
        content_id: 3,
        context: '내용1',
        created_at: '2019-03-29 14:11:11',
        updated_at: null
      },
      {
        comment_id: 2,
        user_id: 3,
        content_id: 3,
        context: '내용2',
        created_at: '2019-03-29 16:11:11',
        updated_at: null
      },
      {
        comment_id: 3,
        user_id: 2,
        content_id: 1, //게시글 번호 
        context: '내용3',
        created_at: '2019-03-29 14:11:11',
        updated_at: null
      }
    ],
    SubComment: [
      {
        subcomment_id: 1, //게시글 번호 
        comment_id: 3,
        user_id: 1,
        context: '리댓1',
        created_at: '2019-03-29 16:22:11',
        updated_at: null
      }
    ]
  }