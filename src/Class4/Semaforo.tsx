import { useState } from "react";

function TrafficLight () {
const [Colour, setColour]= useState ("Red")

const ChangeColour = () => {
    if (Colour === "Red")
        setColour ("Yellow")
    else if (Colour === "Green")
        setColour ("Red")
        else if (Colour === "Yellow")
            setColour ("Green")
}
    return (
        <div>
            <button type="button" onClick={ChangeColour}>
            <p>{Colour}</p>

            </button>
        </div>

    );
}
export default TrafficLight