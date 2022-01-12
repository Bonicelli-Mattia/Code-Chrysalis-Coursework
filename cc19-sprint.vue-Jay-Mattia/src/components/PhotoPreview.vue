<template>
  <div class="flex-container">
    <img :src="photoURL" />
    <button @click="$emit('doit')">SUBMIT</button>
  </div>
</template>

<script>
export default {
  name: "PhotoPreview",
  props: {
    photoURL: String
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1px;
}
img {
  margin-top: 50px;
  margin-bottom: 20px;
  display: block;
  max-width: 85vw;
  max-height: 60vh;
  width: auto;
  height: auto;
  align-self: center;
}

button {
  align-self: center;
  text-align: center;
  width: 5vw;
  height: 5vh;
  border-radius: 25%;
  background: darkred;
  border: 2px solid black;
}

button:hover {
  color: greenyellow;
  cursor: pointer;
  border-color: greenyellow;
}
</style>
