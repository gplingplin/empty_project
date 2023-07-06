import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vuetify from 'vite-plugin-vuetify'
import checker from 'vite-plugin-checker'
import vueJsx from '@vitejs/plugin-vue-jsx'
import basicSsl from '@vitejs/plugin-basic-ssl'
import rawPlugin from 'vite-raw-plugin'
import StylelintPlugin from 'vite-plugin-stylelint'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    base: '/',
    plugins: [
        vue(),
        vueJsx(),
        vuetify({
            autoImport: process.env.NODE_ENV === 'production'
        }),
        checker({
            vueTsc: true,
            typescript: true
        }),
        eslint({
            fix: true
        }),
        rawPlugin({
            fileRegex: /\.md$/
        }),
        basicSsl(),
        StylelintPlugin({
            fix: true
        }),
        createHtmlPlugin({
            inject: {
                data: {
                    title: 'EYT - 醫藥淘'
                }
            }
        })
    ],
    define: {
        'process.env': {}
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url))
            },
            {
                find: '@app',
                replacement: fileURLToPath(new URL('./node_modules/nextgen-app-lib/core', import.meta.url))
            },
            {
                find: '@lib',
                replacement: fileURLToPath(new URL('./node_modules/nextgen-front-lib/core', import.meta.url))
            },
            {
                find: '@vue/runtime-core',
                replacement: '@vue/runtime-core/dist/runtime-core.esm-bundler.js'
            }
        ],
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue'
        ]
    },
    server: {
        host: '0.0.0.0',
        port: 8080,
        https: true
    }
})
