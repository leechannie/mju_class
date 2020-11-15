<template>
    <v-container fluid grid-list-me>
        <v-layout>
            <v-flex xs5>
                <v-text-field v-model="title" label="title"></v-text-field>
            </v-flex>
            <v-flex xs5>
                <v-text-field v-model="content" label="content"></v-text-field>
            </v-flex>
            <v-flex xs2>
                <v-btn color="success" @click="post">post</v-btn>
            </v-flex>
        </v-layout>
        <v-data-iterator
            :item="items"
            :rows-per-page-items="rowsPerPageItems"
            :pagination.sync="pagination"
            content-tag="v-layout"
            row 
            wrap
        >  
            <template v-slot:item="props">
                <v-flex
                    xs12
                    sm6
                    md4
                    lg3
                >
                    <v-card>
                        <v-card-title><h4>{{props.item.title}}</h4></v-card-title>
                        <v-divider></v-divider>
                        <v-card-test>
                            {{props.item.content}}
                        </v-card-test>
                        <v-card-actions>
                            <v-space></v-space>
                            <v-btn @click="put(props.item)">put</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </template>
        </v-data-iterator>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        rowsPerPageItems:[4,8,12],
        pagination: {
            rowsPerPage:4
        },
        items:[],
        title: '',
        content: ''
    }),
    mounted () {

    },
    methods: {
        post () {
            this.items.push({
                title:this.ti
            })
        }
    }
}
</script>