let initialState = {
    notes: []
}

for (let i = 1; i <= 3; i++) {
    initialState.notes.push({
        message: `Message ${i}`,
        summary: `Summary ${i}`
    })
}

function App(init) {

    let appNotes = []

    for (let i=0;i<init.notes.length;i++) {
        appNotes.push(NoteThumb(init.notes[i]))
    }         

    return `<main id="app">
   <h1 class="app-title">Notes app</h1>
   <div class="sidebar">
        ${appNotes}
   </div>
   <div class="note">
     <h1 class="note-title">Note 2</h1>
     <p class="note-body">This is note 2!</p>
   </div>
 </main>`
}

function NoteThumb(note) {
    return `<div class="note-thumb">
    <h1 class="note-thumb-title">${note.message}</h1>
    <p class="note-thumb-summary">${note.summary}</p>
  </div>,`
}

document.body.innerHTML = App(initialState)