import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { } from 'vite'
import resolve from 'rollup-plugin-node-resolve'
import path from 'path'
// import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    build: {
      rollupOptions: {
        plugins: [resolve()]
      }
    }
  })
  
}