<template>
  <main id="app">
    <HelloWorld msg="QR component" />
  </main>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: "Outfit", sans-serif;
}
</style>
