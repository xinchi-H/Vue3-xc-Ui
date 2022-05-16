import './lib/xc.scss';
import './index.scss';
import { createApp } from 'vue';
import { router } from './router';
import App from './App.vue';
import 'github-markdown-css';

const app = createApp(App);
app.use(router);
app.mount('#app');
 