<template>
  <div>
    router
  </div>
</template>

<script>
import axios from 'axios';
import { store } from './store';
export default {
  name: 'App',
  data () {
    

    return {
      store,
    };
  },
  methods: {
    getApiTest(){
      axios.get(this.store.apiUrl + "projects").then((res) => {
        console.log(res.data)
      });
    },
  },
  
}
</script>

<style lang="scss" scoped>
@use "./assets/style/partials/variables" as *;
</style>