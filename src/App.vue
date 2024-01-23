<template>
    <AppHeader />
    <router-view></router-view> 
</template>

<script>

import AppHeader from "./components/AppHeader.vue";
import { store } from '../src/store';

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
  },
  
}
</script>

<style lang="scss" scoped>
@use "./assets/style/partials/variables" as *;
</style>