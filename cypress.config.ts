import { defineConfig } from 'cypress'

export default defineConfig({
    video: true,
    env: {
        baseUrl: 'http://localhost:8080'
    },
    component: {
        devServer: {
            framework: 'vue',
            bundler: 'vite'
        }
    },
    fixturesFolder: 'tests/e2e/fixtures',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    chromeWebSecurity: false,
    e2e: {
        specPattern: 'tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'tests/e2e/support/index.ts'
    }
})
