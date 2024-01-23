<template>
    <div>
        <h1>Project List</h1>
    </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
export default {
    name: 'AppPosts',
    data(){
        return{
            store,
        }
    },
    methods: {
        getAllPosts(){
            axios.get(`${this.store.apiBaseUrl}projects`).then((res)=>{
                console.log(res.data);
            }).catch((err)=>{

            });
        },
    },
   
}
</script>

<style lang="scss" scoped>

</style>