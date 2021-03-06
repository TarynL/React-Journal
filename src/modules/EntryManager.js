const remoteURL = "http://localhost:5002"

export const getEntryById = (entryId) => {
  return fetch(`${remoteURL}/entries/${entryId}?_expand=mood`)
  .then(res => res.json())
}

export const getAllEntries = () => {
  return fetch(`${remoteURL}/entries`)
  .then(res => res.json())
}

export const deleteEntry = (id) => {
    return fetch(`${remoteURL}/entries/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  export const updateEntry = (editedEntry) => {
    return fetch(`${remoteURL}/entries/${editedEntry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEntry)
    }).then(data => data.json());
  } 

  export const addEntry = (newEntry) => {
    return fetch(`${remoteURL}/entries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    }).then(response => response.json())
}

export const getMoods = () => {
    return fetch(`${remoteURL}/moods`)
    .then(res => res.json())
}
