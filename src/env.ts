import { record } from 'power-helper'

const env = record.createStrictObject({
    Stage: [String, true, import.meta.env.VITE_APP_STAGE],
    Layout: [String, true, import.meta.env.VITE_APP_LAYOUT],
    AppId: [String, true, import.meta.env.VITE_APP_ID],
    Service: [String, true, import.meta.env.VITE_APP_SERVICE],
    WebSiteUrl: [String, false, import.meta.env.VITE_APP_WEBSITE_URL],
    ApiSseUrl: [String, true, import.meta.env.VITE_APP_SSE_URI],
    ApiBaseUrl: [String, true, import.meta.env.VITE_APP_API_URI],
    AppUrlScheme: [String, true, import.meta.env.VITE_APP_URL_SCHEME],
    ApiLogTraceUrl: [String, true, import.meta.env.VITE_APP_API_LOG_TRACE_URL]
})

export const useEnv = () => env
