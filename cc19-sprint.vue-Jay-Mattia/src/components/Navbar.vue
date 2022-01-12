<template>
  <div class="flex-container">
    <a @click="goToAll()">CLICK HERE TO GO BACK</a>
    <Upload @photo-upload="dataCarryOver" />
  </div>
</template>

<script>
import Upload from "./Upload";

export default {
  name: "Navbar",
  components: {
    Upload
  },
  methods: {
    goToAll() {
      this.$emit("home-click");
    },
    dataCarryOver(value) {
      this.file = value;
      this.$emit("photo-upload", this.file);
    }
  },
  data: function() {
    return {
      file: {}
    };
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1px;
  background-color: darkred;
}

a {
  font-size: 20px;
  cursor: pointer;
  color: black;
  padding: 20px;
  text-shadow: 6px 6px 8px #fff;
}
a:hover {
  color: greenyellow;
  text-shadow: unset;
}
</style>
