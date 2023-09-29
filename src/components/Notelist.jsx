// NoteList.js
import React, { useState } from "react";
import Pagination from "./Pagination";

const NoteList = ({ notes }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const notesPerPage = 6;

  // Calculate the start and end index for the currently displayed notes
  const startIndex = currentPage * notesPerPage;
  const endIndex = startIndex + notesPerPage;
  const displayedNotes = notes.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      {/* Display the notes here */}
      {displayedNotes.map((note) => (
        <div key={note.id}>
          {/* Display note content */}
        </div>
      ))}

      {/* Render pagination component */}
      <Pagination
        pageCount={Math.ceil(notes.length / notesPerPage)}
        onPageChange={handlePageChange}
      />
      
    </div>
  );
};

export default NoteList;
