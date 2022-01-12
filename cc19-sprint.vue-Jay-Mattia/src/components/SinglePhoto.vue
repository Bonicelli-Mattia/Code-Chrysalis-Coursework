<template>
  <div>
    <img :src="'data:image/jpeg;base64,' + photo" />
  </div>
</template>

<script>
export default {
  name: "SinglePhoto",
  props: {
    photo: String
  }
};
</script>

<style>
img {
  margin-top: 50px;
  max-width: 85%;
}
</style>
