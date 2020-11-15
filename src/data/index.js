export default {
    User: [
      {
        user_id: 1,
        name: '관리자1',
        created_at: '2020-11-11 11:42:11'
      },
      {
        user_id: 2,
        name: '명지대',
        created_at: '2020-12-11 11:42:11'
      },
      {
        user_id: 3,
        name: '관리자2',
        created_at: '2020-11-12 11:42:11'
      },
    ],
    Content: [
      {
        content_id: 1,
        user_id: 1,
        title: '[공지사항] 강의실 개방 안내',
        context: '다음 주 기말고사 기간인 (11.30 ~ 12.05) 해당 기간 동안 학교 강의실을 개방합니다.\n\ 예약은 다음 게시물을 확인해주세요.',
        created_at: '2020-11-11 11:42:11',
        updated_at: null
      },
      {
        content_id: 2,
        user_id: 3,
        title: '[공지사항] 강의 예약',
        context: '최대 5명 이상이 모이면 예약이 가능합니다.\n\ 5명 이상이지만 사회적 거리두기를 꼭 준수해주시기 바라며 앞에 비치된 손소독제를 꼭 사용해주세요!',
        created_at: '2020-11-12 11:42:11',
        updated_at: null
      },
      {
        content_id: 3,
        user_id: 2,
        title: '[공지사항] 사용 주의사항',
        context: '사용시 꼭 해당 인원만 사용해주세요.',
        created_at: '2020-11-12 11:42:11',
        updated_at: null
      }
    ],
    Comment: [
      {
        comment_id: 1, 
        user_id: 1, //유저 번호
        content_id: 3,
        context: '개방 좋아요~~',
        created_at: '2020-11-12 11:42:11',
        updated_at: null
      },
      {
        comment_id: 2,
        user_id: 3,
        content_id: 3,
        context: '네 확인했습니다',
        created_at: '2020-11-12 11:42:11',
        updated_at: null
      },
      {
        comment_id: 3,
        user_id: 2,
        content_id: 1, //게시글 번호 
        context: '몇 시 몇시 예약 가능해요?',
        created_at: '2020-11-12 11:42:11',
        updated_at: null
      }
    ],
    SubComment: [
      {
        subcomment_id: 1, //게시글 번호 
        comment_id: 3,
        user_id: 1,
        context: '강의실 예약표를 참고해주세요.',
        created_at: '2020-11-12 11:42:11',
        updated_at: null
      }
    ]
  }