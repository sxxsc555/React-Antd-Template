import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolve = (dir) => path.join(__dirname, dir)

export default defineConfig({
  plugins: [react()],
	base: './',
	resolve: {
	  alias: {
	    '@': resolve('src')
	  }
	},
	server: {
		open: true,
		host: '0.0.0.0',
		port: 3001
	},
	build:{
    outDir: 'dist',
    assetsDir: 'assets',
    brotliSize: false,
    chunkSizeWarningLimit: 2000
  },
	css: {
	    preprocessorOptions: {
	      scss: {
	        // 全局引入基本样式规范文件
	        additionalData: `
	          @import './src/styles/standard-style.scss';
	        `
	      }
	    }
	  }
})
