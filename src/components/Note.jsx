import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


export default function Note(props) {

  
  return (
    <div className="note" id={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => {
        props.function(props.id)
      }}><DeleteIcon/></button>
    </div>
  );
}


