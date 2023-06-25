import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), vanillaExtractPlugin()],
  // build: {
  //   minify: false,
  //   sourcemap: true,
  // }
})
