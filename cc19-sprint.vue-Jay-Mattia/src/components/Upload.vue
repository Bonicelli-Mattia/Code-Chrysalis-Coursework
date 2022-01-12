<template>
  <div>
    <button @click="handleClick">UPLOAD</button>
    <input ref="fileInput" type="file" v-on:change="onFileChange" />
  </div>
</template>

<script>
export default {
  name: "Upload",
  methods: {
    handleClick() {
      this.$refs.fileInput.click();
    },
    onFileChange(e) {
      this.file = e.target.files[0];
      this.$emit("photo-upload", this.file);
    }
  }
};
</script>

<style scoped>
button {
  display: inline-block;
  padding: 20px;
  background: black;
  border-radius: 20px;
  border-color: darkred;
  vertical-align: middle;
}

button:hover {
  color: greenyellow;
  cursor: pointer;
  border-color: greenyellow;
}

input {
  display: none;
}
</style>
