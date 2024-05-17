import React from "react";
import "../styles/Note.css";

export default function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-UK")
    return (
        <div className="note-container">
            <h3 className="note-title">{note.title}</h3>
            <p className="note-ontent">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    )
}