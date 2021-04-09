const remoteURL = "http://localhost:5002"

export const getEntryById = (entryId) => {
  return fetch(`${remoteURL}/entries/${entryId}`)
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