<template>
  <div className="all-photos">
    <img
      @click="handleSingles(photo)"
      v-for="photo in photos"
      :src="'data:image/jpeg;base64,' + photo"
      :alt="photo"
      v-bind:key="photo"
    />
  </div>
</template>

<script>
export default {
  name: "AllPhotos",
  props: {
    photos: Array
  },
  methods: {
    handleSingles(photo) {
      this.$emit("singles-in-your-area", photo);
    }
  }
};
</script>

<style scoped>
img {
  max-block-size: 200px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}
img:hover {
  transform: scale(1.2);
}
</style>
