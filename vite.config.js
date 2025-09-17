import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { federation } from "@module-federation/vite"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "containerApp",
      remotes: {
        // 👇 force ESM remote
        remoteApp: {
          type: "module",
          name: "remoteApp",
          entry: "https://microfrontend-poc-wipro-remote.web.app/remoteEntry.js",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
})
