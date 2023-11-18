import { env } from '@/env'
import { defineConfig } from 'cypress'

// const url = process.env.BASE_URL
const url = 'http://localhost:3000'

export default defineConfig({
  e2e: {
    baseUrl: url,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // this.baseUrl = url
    },
  },
})
