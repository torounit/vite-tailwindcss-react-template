export default {
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "*.{js,css,md,html}": "prettier --write",
  "*.{js,ts,jsx,tsx}": "eslint --cache --fix",
};
