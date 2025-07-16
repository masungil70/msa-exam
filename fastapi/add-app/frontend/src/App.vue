<template>
  <div id="app">
    <h1>Vue.js 기본 앱</h1>
    <input v-model.number="num1" placeholder="숫자 1" />
    <input v-model.number="num2" placeholder="숫자 2" />
    <button @click="add">더하기</button>
    <p v-if="result !== null">결과: {{ result }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      num1: 10,
      num2: 20,
      result: null
    };
  },
  methods: {
    async add() {
      const response = await axios.get(`/api/add`, {
        params: {
          a: this.num1,
          b: this.num2
        }
      });
      this.result = response.data.result;
    }
  }
};
</script>

<style scoped>
/* 기본 스타일 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
input {
  margin: 5px;
  padding: 5px;
}
button {
  padding: 5px 10px;
}
</style>
