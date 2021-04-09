import React from "react";
import "./Entry.css"
import {Link} from "react-router-dom";

export const EntryCard = ({entry}) => (
    <div className="card">
        <div className="card-content">
            <h3 className="card_topic">Topic: {entry.topic}</h3>
            <div className="card_date">Date: {entry.date}</div>
            <div className="card_note">Entry: {entry.note}</div>
            <div className="card_mood">Mood: {entry.mood}</div>
            <Link to={`/entries/${entry.id}`}>
          <button>Details</button>
        </Link>
        
        </div>
    </div>
    )
   