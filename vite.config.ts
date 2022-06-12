import { defineConfig } from "vite";

import { DeepkitTypePlugin } from "./vite/deepkit-type-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [DeepkitTypePlugin()],
});
