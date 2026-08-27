import { useState } from 'react';

interface Person {
    id: number;
    name: string;
}

function RemoveNames() {
    const [names, setNames] = useState<Person[]>([
        { id: 1, name: "Gio" },
        { id: 2, name: "Jere" },
        { id: 3, name: "Barua" },
        { id: 4, name: "Gonza" }
    ]);

    const [newName, setNewName] = useState('');

    const addName = () => {
        if (newName.trim() === '') return;

        const newPerson: Person = {
            id: Date.now(),
            name: newName
        };

        setNames([...names, newPerson]);
        setNewName('');
    };

    const deleteName = (idToRemove: number) => {
        const filteredNames = names.filter(person => person.id !== idToRemove);
        setNames(filteredNames);
    };

    return (
        <div style={{ padding: '20px' }}>

            <div style={{ marginBottom: '15px' }}>
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Write a name"
                />
                <button onClick={addName} style={{ marginLeft: '10px' }}>
                    Add name
                </button>
            </div>

            <ul>
                {names.map((person) => (
                    <li key={person.id} style={{ listStyle: "none", marginBottom: '5px' }}>
                        {person.name}
                        <button
                            onClick={() => deleteName(person.id)}
                            style={{ marginLeft: '10px', color: 'red' }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RemoveNames;
