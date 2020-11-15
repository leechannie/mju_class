<template>
<div>
    <b-card>
        <b-card-text>
            <h3>
            {{roomno}}
            </h3>
        </b-card-text>
    </b-card>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
    props:['document'],
    name: "Room_info",
    data(){
        const roomno = this.$route.params.roomno;
        //const schedule = this.$route.params.schedule;
        //const sn = await db.collction("room").doc(this.document).roomno
        return {
            roomno : roomno
        }
    },
    created() {
        this.read()
    },
    methods : {
        async read(){
            var db = firebase.firestore();
            var docRef = db.collection("room").doc(String(this.$route.params.roomno));
            console.log(docRef.get());
    }
    
    }
    }

</script>