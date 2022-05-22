import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {} from 'vite'
import resolve from 'rollup-plugin-node-resolve'
import path from 'path'
// import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          // modifyVars: {
          //   'primary-color': 'red',
          //   'link-color': 'red',
          //   'border-radius-base': '2px',
          // },
          javascriptEnabled: true,
        },
      },
    },
    build: {
      rollupOptions: {
        plugins: [resolve()],
      },
    },
  })
}
