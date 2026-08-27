import { useState, type FormEvent } from 'react';

type UserData = {
    id: number;
    name: string;
    lastname: string;
};

function SubscriptionForm() {

    const [users, setUsers] = useState<UserData[]>([]);
    const [nameInput, setNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");

    const addNewUser = (e: FormEvent) => {
        e.preventDefault();

        if (nameInput.trim() === "") {
            return;
        }

        const newId = users.length === 0 ? 0 : Math.max(...users.map((item) => item.id)) + 1;
        const newUser = { id: newId, name: nameInput, lastname: lastNameInput };

        console.log("New user added:", newUser);
        setUsers([...users, newUser]);
        setNameInput("");
        setLastNameInput("");
    };

    return (
        <form onSubmit={addNewUser}>
            <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
            />
            <input
                type="text"
                value={lastNameInput}
                onChange={(e) => setLastNameInput(e.target.value)}
            />
            <button type="submit">Subscribe</button>
        </form>
    );
}

export default SubscriptionForm;


