<template>
  <div class="player">
    <video
      id="load-video"
      ref="video"
      src="@/assets/loadingVideo.mp4"
      autoplay
      loop
      muted
    />
    <audio
      ref="audio"
      src="@/assets/loadingScreen.mp3"
      loop
      autoplay
      muted
      id="audio"
    ></audio>
    <!-- <img src="@/assets/loadingBG.gif"/> -->
    <button ref="soundBtn" @click="toggleSound()" class="ghost"></button>
  </div>
</template>

<script>
export default {
  name: "Loading",
  methods: {
    toggleSound() {
      let audio = this.$refs.audio;
      audio.play();
      audio.muted = false;
    },
    pressButton() {
      this.$refs.soundBtn.click();
    }
  },
  created: function() {
    this.toggleSound();
  }
};
</script>

<style scoped>
.ghost {
  display: none;
}
</style>
