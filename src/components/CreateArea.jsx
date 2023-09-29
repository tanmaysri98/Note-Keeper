import React, { useState } from "react";
import { MdAdd } from "react-icons/md"; // Import MdAdd from react-icons/md

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function showAlert() {
    const div = document.createElement("div");
    div.className = "alert error";
    div.appendChild(document.createTextNode("Please add all fields."));
    const createArea = document.querySelector(".create-area");
    const form = document.querySelector(".create-note");
    createArea.insertBefore(div, form);
    
    // Remove the alert after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  function submitButton(event) {
    if (note.title === "" || note.content === "") {
      showAlert();
    } else {
      onAdd(note);
    }
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="create-area"> {/* Add className for styling */}
      <form className="create-note"> {/* Add className for styling */}
        <input
          value={note.title}
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <p>
          <textarea
            value={note.content}
            name="content"
            placeholder="Take a note"
            onChange={handleChange}
          ></textarea>
        </p>
        {/* Use MdAdd component from react-icons */}
        <button onClick={submitButton}>
          <MdAdd />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
