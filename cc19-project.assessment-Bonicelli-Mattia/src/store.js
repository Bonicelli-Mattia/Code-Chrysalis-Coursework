import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        viewNoteDisplay: true,
        createNoteDisplay: false,
        allNotes: [],
        selectedNote: {}
    },
    mutations: {
        setNotes(state, notesArray) {
            state.allNotes = notesArray;
        },
        openNote(state, id) {
            let textArea = document.getElementById("user-note");

            state.allNotes.forEach((elem) => {
                if (elem.id === id) {
                    textArea.value = elem.message;
                }
            })
        },
        createNote() {
            console.log("sad trumpet")
            // let noteContainer = document.getElementById("user-note");
            // let newNote = document.createElement("button");
            // newNote.class = "note-thumb";
        }
    },
    actions: {
        async fetchNotes({ commit }) {
            try {
                let temp = await axios.get("/api/?getNotes=placeholder");
                temp = temp.data
                commit("setNotes", temp);
            } catch (e) {
                console.log(e);
            }
        }
    }
});