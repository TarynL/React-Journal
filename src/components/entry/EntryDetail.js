import React, { useState, useEffect } from 'react';
import { getEntryById, deleteEntry } from '../../modules/EntryManager';
import './EntryDetail.css'
import { useParams, useHistory } from "react-router-dom"

export const EntryDetail = () => {
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { entryId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getEntryById(entryId)
            .then(entry => {
                setEntry({
                    id: entry.id,
                    topic: entry.topic,
                    date: entry.date,
                    note: entry.note,
                    mood: entry.mood
                });
                setIsLoading(false);
            });
    }, [entryId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteEntry(entryId)
            .then(() => history.push("/entries"));
    };

    return (

        <section className="card">
            <div className="card-content">
                <h3 className="card_topic">Topic: {entry.topic}</h3>
                <div className="card_date">Date: {entry.date}</div>
                <div className="card_note">Entry: {entry.note}</div>
                <div className="card_mood">Mood: {entry.mood?.name}</div>
                <button type="button"
                    onClick={() => history.push(`/entries/${entry.id}/edit`)}>
                    Edit
                </button>
                <button type="button" disabled={isLoading} onClick={handleDelete}>Delete</button>
            </div>
        </section>
    )
}