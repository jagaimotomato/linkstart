import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from '../src/router'

// Vuetify
import 'vuetify/lib/styles/main.sass'
import { createVuetify } from "vuetify"
import * as components from 'vuetify/lib/components/index.d.mts'
import * as directives from 'vuetify/lib/directives/index.d.mts'

const vuetify = createVuetify({
    components,
    directives
})

createApp(App).use(Router).use(vuetify).mount('#app')
