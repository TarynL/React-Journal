import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {addEntry, getMoods} from './modules/EntryManager'
import './Home.css';


export const Home = () => {

    const [entry, setEntry] = useState({
        topic:"",
        date: "",
        note: "",
        moodId: 0
    });

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const [moods, setMoods] = useState([]);

    const handleControlledInputChange = (event) => {
        const newEntry = {...entry}

        let selectedVal = event.target.value
        if(event.target.id.includes("Id")){
            selectedVal = parseInt(selectedVal)}

        newEntry[event.target.id] = selectedVal
        setEntry(newEntry)
    }

    useEffect(() => {
        getMoods()
        .then(moodsFromAPI => {
            setMoods(moodsFromAPI)
        });
    }, []);

    const handleClickSaveEntry = (event) => {
        event.preventDefault()

        const moodId = entry.moodId

        if (moodId === 0) {
            window.alert("Please select a mood")
        } else {

         addEntry(entry)
         .then(() => history.push("/entries"))
    }
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
					<input type="shortdate" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="entry date" value={entry.date} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="note">Entry:</label>
					<input type="text" name="date" id="note" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="entry note" value={entry.note} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="mood">Entry Mood:</label>
					<select value={entry.moodId} name="mood" id="moodId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a Mood</option>
						{moods.map(m => (
							<option key={m.id} value={m.id}>
								{m.name}
							</option>
						))}
					</select>
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