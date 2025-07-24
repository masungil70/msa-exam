import { createApp } from 'vue';  // Vue 3.x
import App from './App.vue';      // App.vue 컴포넌트
import axios from 'axios';        // axios를 사용하여 FastAPI와 통신

const app = createApp(App);

app.config.globalProperties.$axios = axios; // Axios를 전역에서 사용할 수 있도록 설정

app.mount('#app');  // Vue 앱을 #app div에 마운트
