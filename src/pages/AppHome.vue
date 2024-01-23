<template>
    <div>
      <!-- <h1>Projects</h1> -->
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { store } from "../store";
  export default {
    name: 'AppHome',
    data() {
      return {
  
      }
    },
    component: {
        
    },
    methods: {
    },
    created() {
  
    },
    mounted() {
      axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  
      }).catch((error) => {
      })
    }
  
  }
  </script>
  
  <style lang="scss" scoped>
  @use "../assets/style/partials/_variables.scss" as *;
  </style>