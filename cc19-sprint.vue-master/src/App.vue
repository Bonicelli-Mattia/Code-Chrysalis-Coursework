<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ title }}</h1>
    <navbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    navbar: Navbar
  },
  data: () => ({
    title: "Photo Upload App"
  })
};
</script>

<style>
#app {
  text-align: center;
}
</style>
