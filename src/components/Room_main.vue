<template>
    <div>
    <b-table
        striped hover :items="items"
                      :fields="fields"
                      @row-clicked="checkinfo"
    ></b-table>
    <b-button>신청</b-button>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name :'Room_main',
    data() {
        return{
            fields : [
                {
                    key: 'roomno',
                    label: '강의실 명',
                },
                {
                    key: 'manager',
                    label: '담당자',
                },
                {
                    key: 'max_num',
                    label: '수용 인원',
                },
                {
                    key: 'phone',
                    label: '문의 번호'
                },
                {
                    key: 'schedule',
                    label: '일정'
                }

            ],
            items: [],
        };
    },
    computed:{
        rows(){
            return this.items.length;
        }
    },
    created(){
        this.read()
    },
    methods : {
        checkinfo(item) {
            this.$router.push({
                path: `/room/rsv/info/${item.roomno}`

            })
        },
        async read(){
            var db = firebase.firestore();
            const sn = await db.collection("room").orderBy("roomno","desc").get()
            this.items = sn.docs.map(v=> {
                const item = v.data()
                return {
                    roomno:item.roomno, manager:item.manager,max_num:item.max_num,phone:item.phone,schedule:item.schedule
                }
            })
        }
    }
}
</script>