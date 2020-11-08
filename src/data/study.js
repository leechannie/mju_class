export default {
    User: [
      {
        user_id: 1,
        name: '이찬희',
        created_at: '2018-09-11 11:42:11'
      },
      {
        user_id: 2,
        name: '융소',
        created_at: '2018-09-11 11:42:11'
      },
    ],
    Content: [
      {
        content_id: 1,
        user_id: 1,
        title: '오늘 5시에 s1530에서 공부할 사람?',
        context: '팀플할건데 최소 인원이 모자라',
        created_at: '2019-01-01 13:11:42',
        updated_at: null
      },
    ],
    Comment: [
      {
        comment_id: 1, 
        user_id: 1, //유저 번호
        content_id: 1,
        context: '헐 야 우리랑 같이하자!',
        created_at: '2019-03-29 14:11:11',
        updated_at: null
      },
      {
        comment_id: 2, 
        user_id: 2, //유저 번호
        content_id: 1,
        context: '나도 같이해',
        created_at: '2019-03-29 14:11:11',
        updated_at: null
      },
    ],
    SubComment: [
      {
        subcomment_id: 1, //게시글 번호 
        comment_id: 1,
        user_id: 1,
        context: '그래',
        created_at: '2019-03-29 16:22:11',
        updated_at: null
      }
    ]
  }