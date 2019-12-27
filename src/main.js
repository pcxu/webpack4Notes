import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './style/config.less';

Vue.config.productionTip = false;
// 阻止浏览器默认鼠标右键
document.oncontextmenu = () => false;

console.log( 'main.js', Vue, App, 'process', process, process.env.NODE_ENV );

new Vue({
    router,
    data: {
      $bus: new Vue(),
    },
    render: (h) => h(App),
}).$mount('#app');