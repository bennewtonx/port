// vite.config.js
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

export default {
  plugins: [react(), svgr()],
};
