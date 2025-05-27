import flowbitePlugin from "flowbite/plugin";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // Remix app files
    "./node_modules/flowbite/**/*.js",  // Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin,                     // carga estilos y scripts automáticamente
  ],
};
