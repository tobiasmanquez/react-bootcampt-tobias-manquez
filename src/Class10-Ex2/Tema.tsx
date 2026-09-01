import { useTheme } from "./TemaContext";


function Theme() {

    const { TemaOscuro, CambioTema } = useTheme()
    const Tema = TemaOscuro ? "oscuro" : "claro"

    return (
        <div>
            <section id="counter">
                <div> {Tema} </div>
                <button
                    type="button"
                    className="counter addition"
                    onClick={CambioTema}
                >
                    Change Theme is
                </button>
                </section>
        </div>

    );
}

export default Theme;
