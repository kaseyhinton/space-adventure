import { createCompatibilityConfig } from "@open-wc/building-rollup";
import copy from "rollup-plugin-copy";

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

const configs = createCompatibilityConfig({ input: "./index.html" });

export default configs.map(config => ({
  ...config,
  plugins: [
    ...config.plugins,
    copy({
      targets: [{ src: "./assets/images/**/*", dest: "./dist/assets/images" }]
    })
  ]
}));
