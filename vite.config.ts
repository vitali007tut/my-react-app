import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: 'https://vitali007tut.github.io/my-react-app/',
    plugins: [react()],
});
