
import { useContadorStore } from "./zustand";

function CountZustand() {

    const contador = useContadorStore((state) => state.contador)
    const incrementar = useContadorStore((state) => state.incrementar)

    return (
        <div>
            <section id="counter">
                <div>{contador}</div>
                <button
                    type="button"
                    className="counter addition"
                    onClick={() => incrementar()}
                >
                    Count Addition is
                </button>
            </section>
        </div>

    );
}

export default CountZustand;
