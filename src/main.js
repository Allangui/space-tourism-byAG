import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Vue3Mq } from "vue3-mq"


const app = createApp(App)

app.use(router)
app.use(Vue3Mq , {
    breakpoints:{
        s:0,
        m:768,
        xl:1200
    }
})
 app.mount('#app')