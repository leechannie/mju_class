import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Board from '@/components/Board'
import Board_l from '@/components/Board_l'
import Board_s from '@/components/Board_s'
import ContentDetail_l from '@/components/ContentDetail_l';
import ContentDetail_s from '@/components/ContentDetail_s';
import ContentDetail from '@/components/ContentDetail';
import Create from '@/components/Create';
import Create_l from '@/components/Create_l';
import Create_s from '@/components/Create_S';
import CommentCreate from '@/components/CommentCreate';
import CommentCreate_l from '@/components/CommentCreate_l';
import CommentCreate_s from '@/components/CommentCreate_s';
import CommentList from '@/components/CommentList';
import CommentList_l from '@/components/CommentList_l';
import CommentList_s from '@/components/CommentList_s';
import CommentListItem from '@/components/CommentListItem';
import CommentListItem_l from '@/components/CommentListItem_l';
import CommentListItem_s from '@/components/CommentListItem_s';

Vue.use(Router)

export default new Router({
  routes: [
    //공지보드
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/board/free', // 공지보드 컴포넌트 연결
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:contentId',
      name: 'ContentDetail',
      component: ContentDetail
    },
    {
      path: '/board/free/create/:contentId?', //create로 가면 create 컴포넌트 보이기
      name: 'Create',
      component: Create
    },
    {
      path: '/board/free/CommentCreate/:comment_id?', 
      name: 'CommentCreate',
      component: CommentCreate
    },
    {
      path: '/board/free/CommentList/:comment_id?', 
      name: 'CommentList',
      component: CommentList
    }, 
    {
      path: '/board/free/CommentListItem/:comment_id?', 
      name: 'CommentListItem',
      component: CommentListItem
    },
    //분실물 보드
    {
      path: '/board_l/free', // 공지보드 컴포넌트 연결
      name: 'Board_l',
      component: Board_l
    },
    {
      path: '/board_l/free/detail/:contentId',
      name: 'ContentDetail_l',
      component: ContentDetail_l
    },
    {
      path: '/board_l/free/create/:contentId?', //create로 가면 create 컴포넌트 보이기
      name: 'Create_l',
      component: Create_l
    },
    {
      path: '/board_l/free/CommentCreate/:comment_id?', 
      name: 'CommentCreate_l',
      component: CommentCreate_l
    },
    {
      path: '/board_l/free/CommentList/:comment_id?', 
      name: 'CommentList_l',
      component: CommentList_l
    }, 
    {
      path: '/board_l/free/CommentListItem/:comment_id?', 
      name: 'CommentListItem_l',
      component: CommentListItem_l
    },
        //분실물 보드
    {
      path: '/board_l/free', // 공지보드 컴포넌트 연결
      name: 'Board_l',
      component: Board_l
    },
    {
      path: '/board_l/free/detail/:contentId',
      name: 'ContentDetail_l',
      component: ContentDetail_l
    },
    {
      path: '/board_l/free/create/:contentId?', //create로 가면 create 컴포넌트 보이기
      name: 'Create_l',
      component: Create_l
    },
    {
      path: '/board_l/free/CommentCreate/:comment_id?', 
      name: 'CommentCreate_l',
      component: CommentCreate_l
    },
    {
      path: '/board_l/free/CommentList/:comment_id?', 
      name: 'CommentList_l',
      component: CommentList_l
    }, 
    {
      path: '/board_l/free/CommentListItem/:comment_id?', 
      name: 'CommentListItem_l',
      component: CommentListItem_l
    },
      //분실물 보드
    {
      path: '/board_l/free', // 공지보드 컴포넌트 연결
      name: 'Board_l',
      component: Board_l
    },
    {
      path: '/board_l/free/detail/:contentId',
      name: 'ContentDetail_l',
      component: ContentDetail_l
    },
    {
      path: '/board_l/free/create/:contentId?', //create로 가면 create 컴포넌트 보이기
      name: 'Create_l',
      component: Create_l
    },
    {
      path: '/board_l/free/CommentCreate/:comment_id?', 
      name: 'CommentCreate_l',
      component: CommentCreate_l
    },
    {
      path: '/board_l/free/CommentList/:comment_id?', 
      name: 'CommentList_l',
      component: CommentList_l
    }, 
    {
      path: '/board_l/free/CommentListItem/:comment_id?', 
      name: 'CommentListItem_l',
      component: CommentListItem_l
    },
    // 스윗미 보드
    {
      path: '/board_s/free', // 공지보드 컴포넌트 연결
      name: 'Board_s',
      component: Board_s
    },
    {
      path: '/board_s/free/detail/:contentId',
      name: 'ContentDetail_s',
      component: ContentDetail_s
    },
    {
      path: '/board_s/free/create/:contentId?', //create로 가면 create 컴포넌트 보이기
      name: 'Create_s',
      component: Create_s
    },
    {
      path: '/board_s/free/CommentCreate/:comment_id?', 
      name: 'CommentCreate_s',
      component: CommentCreate_s
    },
    {
      path: '/board_s/free/CommentList/:comment_id?', 
      name: 'CommentList_s',
      component: CommentList_s
    }, 
    {
      path: '/board_s/free/CommentListItem/:comment_id?', 
      name: 'CommentListItem_s',
      component: CommentListItem_s
    },
  ]
})