import { useState } from "react";

function StockAlert() {

    const [amout, setAmout] = useState(0);
    const message = amout < 1 ? 'Out of stock' : amout >= 1 && amout <= 5 ? 'Last few units!' : 'In stock!'; 
    

    return (
        <div>
            <div style={{ margin: "15px", padding: "10px 20px", cursor: "pointer", backgroundColor: "red" }}>
                <p> {message}</p>
                <p>{amout}</p>
            </div>

            <div>
                <button
                    type="button"
                    className="counter addition"
                    onClick={() => {
                        setAmout((amout) => amout + 1)
                    }}
                >
                    Suma
                </button>

                <button
                    type="button"
                    className="counter subtraction"
                    onClick={() => {
                        setAmout((amout) => amout - 1)
                    }}
                >
                    resta
                </button>
            </div>
        </div>
    )
}
export default StockAlert

