import { useState } from "react";

function TrafficLight() {
    const [colour, setColour] = useState("Red")

    const changeColour = () => {
        if (colour === "Red") setColour("Yellow")

        else if (colour === "Green") setColour("Red")

        else if (colour === "Yellow") setColour("Green")
    }
    return (
        <div>
            <button type="button" onClick={changeColour}
                style={{ backgroundColor: colour, color: colour === "Yellow" ? "black" : "white" }}
            >
                <p>{colour}</p>
            </button>
        </div>

    );
}
export default TrafficLight