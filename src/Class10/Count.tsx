import { useContador } from "./CountContext";


function Count() {

    const { contador, incrementar } = useContador()

    return (
        <div>
            <section id="counter">
                <div> {contador}</div>
                <button
                    type="button"
                    className="counter addition"
                    onClick={incrementar}
                >
                    Count Addition is
                </button>
                </section>
        </div>

    );
}

export default Count;

