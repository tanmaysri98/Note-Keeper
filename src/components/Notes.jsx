import React from "react"
import { IoMdTrash } from "react-icons/io"

function Note({ title, content, onDelete, id }) {
    return (
        <div className="note">
            {title ? (
                <>
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <button onClick={title ? () => onDelete(id) : null}>
                        <IoMdTrash size={25} />
                    </button>
                </>
            ) : (
                null
            )}
        </div>
    );
}

export default Note; 
