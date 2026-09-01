import { useEffect, useState } from 'react';

interface CountDown {
    InitialSeconds: number

}

function CountDown({InitialSeconds}:CountDown) {

    const [seconds, setSeconds] = useState(InitialSeconds);

    useEffect(() => {
        if (seconds <= 0) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    return (
        <div>
            <h1>Time remaining: {seconds}</h1>

            <section id="counter">

                <button
                    type="button"
                    className="counter Reset"
                    onClick={() => setSeconds((InitialSeconds) => InitialSeconds = 5 )}
                >
                    Count Reset is {seconds}
                </button>
            </section>
        </div>
    );
}

export default CountDown;
