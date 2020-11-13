<template>
    <b-card>
        {{roomno}}
        {{manager}}
        {{max_num}}
    </b-card>
</template>
<script>
export default {
    name: "room_info",
    data(){
        const roomno = string(this.$route.params.roomno);
        const manager = string(this.$route.params.manager);
        const max_num = Number(this.$route.params.max_num);
        return{
            roomno : roomno,
            manager : manager,
            max_num : max_num
        };
    },
};

</script>