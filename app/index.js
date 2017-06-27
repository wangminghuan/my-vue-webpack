import Vue from 'vue';
import App from "./container/app.vue";
new Vue({
 el: '#app',
 render: h => h(App)
})
/*
render: h => h(App) 等同 render: creatElment => creatElment(App) 
等同：（h只是vue中约定的代替creatElement的）
render: funciton(creatElment) {
    return creatElment(App)
}*/