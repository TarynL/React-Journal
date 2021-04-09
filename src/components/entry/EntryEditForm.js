import React, { useState, useEffect} from "react";
import {updateEntry, getEntryId, getAllEntries, getEntryById} from "../../modules/EntryManager";
import "./EntryEditForm.css";
import {useHistory, useParams} from 'react-router-dom'

export const EntryEditForm = () => {
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { entryId } = useParams();
    const history = useHistory();

    const handleFieldChange = event => {
        const stateToChange = {...entry};

        stateToChange[event.target.id] = event.target.value
        setEntry(stateToChange)
    };

    const updateExistingEntry = event => {
        event.preventDefault()
        setIsLoading(true);

        const editedEntry = {
            id: entryId,
            topic: entry.topic,
            date: entry.date,
            note: entry.note,
            mood: entry.mood
        };

        updateEntry(editedEntry)
        .then(() => history.push("/entires"))
    }

    useEffect(() => {
        getEntryById(entryId)
        .then(entry => {
            setEntry(entry);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="topic"
                            value={entry.topic}
                        />
                        <label htmlFor="topic">Topic</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={entry.date}
                        />
                        <label htmlFor="date">Date</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="note"
                            value={entry.note}
                        />
                        <label htmlFor="note">Entry</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="mood"
                            value={entry.mood}
                        />
                        <label htmlFor="mood">Mood</label>



                        </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEntry}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )

}