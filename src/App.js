import React, { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Notes from "./components/Notes";
import Count from "./components/Count";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import NoteList from "./components/Notelist";

function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((prevValue) => {
      return [...prevValue.filter((note, index) => index !== id)];
    });
  }

  return (
    <div>
      <Header />
      <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing ${notes.length} Notes from the Database`
        }
      />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Notes
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
      <NoteList notes={notes} />
      <Footer />
      <Pagination />
    </div>
  );
}

export default App;
