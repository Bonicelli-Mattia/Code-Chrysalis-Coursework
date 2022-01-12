<template>
  <div id="app">
    <div v-if="currentView === 'AllPhotos'">
      <img alt="Vue logo" src="https://i.imgur.com/9MIzImO.png" />
      <Navbar @home-click="goToAll()" @photo-upload="uploadPhotoPreview" />
      <AllPhotos v-bind:photos="photos" @singles-in-your-area="handleSingles" />
    </div>
    <div v-else-if="currentView === 'PhotoPreview'">
      <Navbar @home-click="goToAll()" @photo-upload="uploadPhotoPreview" />
      <PhotoPreview @doit="uploadPhoto" :photoURL="photoURL" />
    </div>
    <div v-else-if="currentView === 'Loading'">
      <Loading />
    </div>
    <div v-else>
      <img alt="Vue logo" src="https://i.imgur.com/9MIzImO.png" />
      <Navbar @home-click="goToAll()" @photo-upload="uploadPhotoPreview" />
      <SinglePhoto :photo="selectedPhoto" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AllPhotos from "./components/AllPhotos";
import SinglePhoto from "./components/SinglePhoto";
import PhotoPreview from "./components/PhotoPreview";
import Loading from "./components/Loading";
import { listObjects, getSingleObject, saveObject } from "../utils/index.js";

export default {
  name: "App",

  components: {
    Navbar,
    AllPhotos,
    SinglePhoto,
    PhotoPreview,
    Loading
  },

  data: function() {
    return {
      currentView: "Loading",
      photos: [],
      selectedPhoto: "",
      photoURL: "",
      key: 0,
      cachedPhoto: {}
    };
  },

  methods: {
    async imageFetch() {
      console.log("fetching photos...");
      this.currentView = "Loading";
      let source = await listObjects(45);

      let temp = source.map(async obj => await getSingleObject(obj.Key));

      this.photos = await Promise.all(temp);
      console.log("Finished Fetching Photos");
      this.currentView = "AllPhotos";
    },

    goToAll() {
      this.currentView = "AllPhotos";
      console.log("GOTOALL BUTTON IS WORKING");
    },

    uploadPhotoPreview(value) {
      this.photoURL = URL.createObjectURL(value);
      this.cachedPhoto = value;
      this.currentView = "PhotoPreview";
    },

    async uploadPhoto(value) {
      value = this.cachedPhoto;
      console.log("uploading...");
      saveObject(value);
      console.log("upload finished!");
      this.currentView = "AllPhotos";
      let newPhoto = await getSingleObject(value.name);
      this.photos.unshift(newPhoto);
    },

    handleSingles(value) {
      this.currentView = "SinglePhoto";
      this.selectedPhoto = value;
    }
  },

  created() {
    this.imageFetch();
  }
};
</script>

<style>
body {
  background-color: black;
  overflow: hidden;
}

body * {
  color: white;
}

img {
  max-height: 15vh;
}

#app {
  text-align: center;
}
</style>
