import { createApp } from "vue";

import App from "./App.vue";

async function main() {
  const app = createApp(App);

  app.mount("#app");
}

main();
