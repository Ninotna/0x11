import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // Use SWC instead of Babel

export default defineConfig({
  plugins: [react()],
});
