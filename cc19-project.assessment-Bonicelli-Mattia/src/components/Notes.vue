<template>
  <div id="notes-container">
    <h1>Mild Vue Notes</h1>
    <div id="flex-container">
      <div id="notes-container" class="column">
        <button class="note-thumb" v-for="note in this.$store.state.allNotes" :key="note.id" @click="openNote(note.id)">
            <h1>#{{note.id}}, {{note.summary}}</h1>
        </button>
        <button id="create-btn" @click="createNote">CREATE NOTE</button>
      </div>
      <div class="column">
        <textarea id="user-note" maxlength ='500'/>
        <button id="edit-btn">SUBMIT CHANGES</button>
        <button id="delete-btn">DELETE NOTE</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Notes',
  methods: {
    openNote(id) {
      this.$store.commit("openNote", id)
    },
    createNote() {
      this.$store.commit("createNote")
    }
  },
  mounted() {
    this.$store.dispatch("fetchNotes");
  }
}
</script>

<style scoped>

button {
  background-color:#5f6481;
  color: white;
}

#flex-container{
  display: flex;
  justify-content: space-evenly;
}
.column {
    flex-basis: 45%;
}

textarea {
  background-color:#5f6481;
  color:#fff;
  width: 45vw;
  height: 30vh;
  resize: none;
  border: none;
  padding: 2vw;
  font-size: 3vh;
}

</style>
