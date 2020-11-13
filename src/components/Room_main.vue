<template>
    <b-table
        striped hover :items="items"
                      :fields="fields"
                      @row-clicked="checkinfo"
    ></b-table>
</template>
<script>
import firebase from 'firebase'
export default {
    name :'room',
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
                path:  `/room/rsv/info/${item.roomno}`
            })
        },
        async read(){
            var db = firebase.firestore();
            const sn = await db.collection("room").get()
            this.items = sn.docs.map(v=> {
                const item = v.data()
                return {
                    roomno:item.roomno, manager:item.manager
                }
            })
        }
    }
}
</script>