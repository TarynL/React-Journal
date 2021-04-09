import React, { useState, useEffect } from "react";
import { updateEntry, getEntryById, getMoods } from "../../modules/EntryManager";
import "./Entry.css";
import { useHistory, useParams } from 'react-router-dom'

export const EntryEditForm = () => {
    const [entry, setEntry] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { entryId } = useParams();
    const history = useHistory();

    const [moods, setMoods] = useState([]);

    const handleFieldChange = event => {
        const stateToChange = { ...entry };

        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        stateToChange[event.target.id] = selectedVal
        setEntry(stateToChange)
    };

    const updateExistingEntry = event => {
        event.preventDefault()
        setIsLoading(true);

        const editedEntry = {
            id: entry.id,
            topic: entry.topic,
            date: entry.date,
            note: entry.note,
            moodId: entry.moodId
        };

        const moodId = entry.moodId

        if (moodId === 0) {
            window.alert("Please select a mood")
        } else {

            updateEntry(editedEntry)
                .then(() => history.push("/entries"))
        }
    }

    useEffect(() => {
        getEntryById(entryId)
            .then(entry => {
                setEntry(entry);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        getMoods()
            .then(moodsFromAPI => {
                setMoods(moodsFromAPI)
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

                        <select
                            value={entry.moodId}
                            name="moodId" id="moodId"
                            onChange={handleFieldChange}
                            className="form-control" >
                            <option value="0">Select a Mood</option>
                            {moods.map(m => (
                                <option key={m.id} value={m.id}>
                                    {m.name}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="mood">Mood</label>



                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEntry}
                            className="btn btn-primary "
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )

}