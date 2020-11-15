<template>
<div>
    <b-card>
        <b-card-text>
            <h3>
            {{roomno}}
            </h3>
        </b-card-text>
    </b-card>
    <b-table
        striped hover :fields = "fields"  
                      :items = "items"              
    > 
    
    </b-table>
   
</div>
</template>

<script>
import data from "@/data/room.js"
import firebase from 'firebase'
export default {
    name: "Room_info",
    data(){
        
        const roomno = this.$route.params.roomno;
        //const schedule = this.$route.params.schedule;
        //const sn = await db.collction("room").doc(this.document).roomno
        return {
        fields : [
            {
                key: 'time',
                label: '시간'
            },
            {
                key: 'rsv_bool',
                label : '예약여부'
            }
        ],
        roomno : roomno,
        items : [
            {time : '9-10',
            rsv_bool:'o'},
            {time : '10-11',
            rsv_bool:'x'},
            {time : '11-12',
            rsv_bool:'o'},
            {time : '12-13',
            rsv_bool:'x'},
            {time : '13-14',
            rsv_bool:'o'},
            {time : '14-15',
            rsv_bool:'x'},
            {time : '15-16',
            rsv_bool:'o'},
            {time : '16-17',
            rsv_bool:'x'},
            
        ]
        };
    // },
    // created() {
    //     this.read()
    // },
    // methods : {
    //     async read(){
    //         //console.log(items.rsv_bool,items.time)
    //         return{
    //             rsv_bool : this.items.rsv_bool,
    //             time : this.items.time
                
    //         }
    //     }
    }    
    }

</script>