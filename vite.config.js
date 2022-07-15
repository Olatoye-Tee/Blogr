import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: [
				`
				$light-red: hsl(356, 100%, 66%);
				$very-light-red: hsl(355, 100%, 74%); 
				$very-dark-blue: hsl(208, 49%, 24%); 
				$white: hsl(0, 0%, 100%);
				$grayish-blue: hsl(240, 2%, 79%); 
				$very-dark-grayish-blue: hsl(207, 13%, 34%);
				$very-dark-black-blue: hsl(240, 10%, 16%); 
				$very-light-red-gradient: hsl(13, 100%, 72%);
				$light-red-gradient: hsl(353, 100%, 62%);
				$very-dark-gray-blue: hsl(237, 17%, 21%);
				$very-dark-desaturated-blue: hsl(237, 23%, 32%);
			`,
		]
			}
		}
	}
})
