export default {
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "*.{js,ts,jsx,tsx}": "eslint --cache --fix",
  "*.{js,css,md,html}": "prettier --write",
};
