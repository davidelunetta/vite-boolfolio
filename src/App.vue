<template>
    <AppHeader />
    <router-view></router-view> 
</template>

<script>

import AppHeader from "./components/AppHeader.vue";
import { store } from '../src/store';
import AppPosts from "./pages/AppPosts.vue";

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppPosts
},
  
}
</script>

<style lang="scss" scoped>
@use "./assets/style/partials/variables" as *;
</style>