import {defineConfig} from "vite";

export default defineConfig({
    optimizeDeps: {
        // 不进行依赖预构建的包
        exclude: []
    }
})