import React, { useEffect, useState } from 'react';
import { getAllEntries, getEntryById } from '../../modules/EntryManager'
import { EntryCard } from './Entry';



export const EntryList = () => {
    const [entries, setEntries] = useState([]);
    

    const getEntries = () => {
        return getAllEntries()
            .then(entriesFromAPI => {
                setEntries(entriesFromAPI)

            });
    };

    useEffect(() => {
        getEntries();
    }, []);

    const handleDeleteEntry = (id) => {
        handleDeleteEntry(id)
        .then(() => getAllEntries()
        .then(setEntries));
    };

    return (
        <div className="container-cards">
            {entries.map(entry =>
                <EntryCard 
                key={entry.id} 
                entry={entry}
                handleDeleteEntry={handleDeleteEntry}
                />)}
        </div>
    );
};