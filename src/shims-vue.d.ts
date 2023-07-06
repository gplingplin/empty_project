/// <reference types="vite/client" />

declare module 'vue3-markdown-it'
declare module 'vite-raw-plugin'
declare module '*.md' {
  const value: string
  export default value
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_STAGE: string
  readonly VITE_APP_LAYOUT: string
  readonly VITE_APP_ID: string
  readonly VITE_APP_API_URI: string
  readonly VITE_APP_SSE_URI: string
  readonly VITE_APP_SERVICE: string
  readonly VITE_APP_WEBSITE_URL: string
  readonly VITE_APP_URL_SCHEME: string
  readonly VITE_APP_FACEBOOK_AUTH_CLIENT_ID: string
  readonly VITE_APP_GOOGLE_MAP_API_KEY: string
  readonly VITE_APP_APPLE_AUTH_CLIENT_ID: string
  readonly VITE_APP_WECHAT_AUTH_APP_ID: string
  readonly VITE_APP_WECHAT_AUTH_WEB_APP_ID: string
  readonly VITE_APP_AMAP_API_KEY: string
  readonly VITE_APP_AMAP_SERVICE_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
