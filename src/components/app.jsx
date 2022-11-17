import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
  const [Notes, setNotes] = useState([]);

  function saveNote(note) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { title: note.title, content: note.content }
      ];
    });
  }

  function deleteNote(id){
    
    setNotes(prevNotes =>{
       return prevNotes.filter((item, index ) => {
            return index !== id
        })
    })
  
  }
  return (
    <div>
      <Header />
      <CreateArea function={saveNote} />

      {Notes.map((note, index) => (
        <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            function={deleteNote}
          />
      ))}
      <Footer />
    </div>
  );
}


