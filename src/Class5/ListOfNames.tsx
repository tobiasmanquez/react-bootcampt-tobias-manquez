import { useState } from "react";

function ListOfNames() {
    const NAMES =
        [{ "id": 1, "name": "Gio" },
        { "id": 2, "name": "Jere" },
        { "id": 3, "name": "Barua" },
        { "id": 4, "name": "Gonza" }];

    const [names] = useState(NAMES)

    return (
        <div>

            <ul>
                {names.map((item) => (
                    <li key={item.id} style={{ listStyle: "none", margin: "10px", padding: "1px 100px", backgroundColor: "Green" }}>
                        <p>{item.name} {item.id}</p> 
                    </li>
                ))}
            </ul>
        </div>

    );
}
export default ListOfNames