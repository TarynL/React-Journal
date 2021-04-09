import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {addEntry} from './modules/EntryManager'
import './Home.css';


export const Home = () => {

    const [entry, setEntry] = useState({
        topic:"",
        date: "",
        note: "",
        mood: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newEntry = {...entry}

        newEntry[event.target.id] = event.target.value
        setEntry(newEntry)
    }

    const handleClickSaveEntry = (event) => {
        event.preventDefault()
         addEntry(entry)
         .then(() => history.push("/entries"))
    }

    return (
        <>
        <div>
        <h1>A Daily Journal</h1>
        <p>"Either write something worth reading or do something worth writing."
            – Benjamin Franklin </p>
        </div>
		<form className="entryForm">
			<h2 className="entryForm__title">New Entry</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="topic">Entry Topic:</label>
					<input type="text" id="topic" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="entry topic" value={entry.topic} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="date">Entry Date:</label>
					<input type="text" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="entry date" value={entry.date} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="note">Entry:</label>
					<input type="text" id="note" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="entry note" value={entry.note} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="mood">Entry Mood:</label>
					<input type="text" id="mood" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="entry mood" value={entry.mood} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveEntry}>
				Submit
          </button>
		</form>
        </>
	)
    
        
    
    }