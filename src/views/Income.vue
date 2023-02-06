<template>
  <h1>Income view component</h1>

  <p class="balance-num">{{ store.balance }}</p>

  <div class="click__zone" @click="store.incrBalance">
    <span class="click__zone-icon"><i class="fal fa-hand-point-up"></i></span>
    <p class="click__zone-text">Кликайте в этой области, чтобы зарабатывать деньги</p>
  </div>

</template>

<script>
import { useIncomeStore } from "@/stores/Income.js";

export default {
  name: 'Income',
  data() {
    return {
      store: useIncomeStore()
    }
  },
  mounted() {
    this.store.getData()
  }
}

</script>

<style lang="scss" scoped>

.click__zone {
  width: 100%;
  height: 400px;
  user-select: none;
  cursor: pointer;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;

  &-icon i {
    font-size: 120px;
  }

  &-text {
    font-size: 20px;
  }
}

</style>
