import './lib/xc.scss';
import './index.scss';
import 'github-markdown-css';
import './lib/svg.js'
import { createApp } from 'vue';
import { router } from './router';
import App from './App.vue';
import Markdown from './components/Markdown.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.component("Markdown", Markdown);
 