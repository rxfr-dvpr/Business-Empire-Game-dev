<template>
  <router-view/>

  <NavBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { useIncomeStore } from "@/stores/incomeStore.js";

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      incomeStore: useIncomeStore()
    }
  },
  // mounted() {
  //   this.incomeStore.incrBalanceRealTime()
  // }
}

</script>

<style lang="scss" scoped>

</style>
