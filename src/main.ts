import './styles/index.scss'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'github-markdown-css/github-markdown-light.css'

// vuetify
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// other
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app.vue'

const app = createApp(App)
const pinia = createPinia()

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    background: '#FAFAFA',
                    primary: '#36A9B0',
                    secondary: '#FFA000',
                    gray: '#757575',
                    red: '#B00020',
                    chip: '#dff2f2',
                    'e-grey': '#FAFAFA',
                    'e-gray': '#F5F5F5',
                    'e-yellow': '#FFE664',
                    'e-orange': '#FBE9E7'
                }
            }
        },
        variations: {
            colors: ['primary', 'secondary', 'gray'],
            lighten: 9,
            darken: 9
        }
    }
})

app.use(pinia)
app.use(vuetify)

app.mount('#app')
