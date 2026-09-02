import { useState } from "react";


type InfoCardProps = {
    text: string
    priority: "high"
}

function useToggle(initialValue = false) {
    const [deploy, setDeploy] = useState(initialValue)

    const toggle = () => {
        setDeploy((prevState) => !prevState)
    }

    return { deploy, toggle }
}

function InfoCard({ text, priority }: InfoCardProps) {
    const { deploy, toggle } = useToggle(false)


    return (
        <div className="info-card">
            <h3>{text}</h3>
            <p>Priority: {priority}</p>
            <button onClick={toggle}>
                {deploy ? "Hide details" : "Show details"}
            </button>
            {deploy && (
                <div className="detalles">
                    <p>These are the card details.</p>
                </div>
            )}
        </div>
    )
}

export default InfoCard