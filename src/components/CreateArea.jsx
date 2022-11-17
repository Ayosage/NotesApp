import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [active, setActive] = useState(false)

  function handleChange(e) {
    const { value, name } = e.target;

    setNote((e) => {
      return {
        ...e,
        [name]: value
      }
    });
  }
  function submitNote(e) {
    e.preventDefault()
    props.function(note);
    setNote({
      title: "",
      content: ""
    });
  }
  function changeActive(){
    setActive(true)
  }

  return (
    <div>
      <form className="create-note">
       
        <input
          style={{display: active ? "initial" : "none"}}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
       
        <textarea
          onClick={changeActive}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={active ? 3 : 1} 
          value={note.content}
        />
        <Zoom in={active}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
