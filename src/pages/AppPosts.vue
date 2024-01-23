<template>
    <div>
        <h1>Project List</h1>
        <ul>
            <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
        </ul>
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
            projects: [], 
        }
    },
    mounted() {
        this.getAllPosts(); 
    },
    methods: {
        getAllPosts(){
            axios.get(`${this.store.apiBaseUrl}projects`).then((res)=>{
                this.projects = res.data.result;
                console.log(res.data);
            }).catch((err)=>{

            });
        },
    },
   
}
</script>

<style lang="scss" scoped>

</style>