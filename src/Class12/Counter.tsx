import { useState } from "react"

interface CounterProps {
    initialValue: number
}

function useCounter(initialValue: number) {
    const [count, setCount] = useState(initialValue)

    const increase = () => {
        setCount((count) => count + 1)
    }

    const decrement = () => {
        setCount((count: number) => count - 1)
    }

    const restart = () => {
        setCount(initialValue)
    }

    return { count, increase, decrement, restart}
}

function Counter({ initialValue }: CounterProps) {
    const { count, increase, decrement, restart } = useCounter (initialValue)

    return (
        <section>
            <button
                type="button"
                className="counter"
                onClick={increase}
            >
                 Click here to add
            </button>

            <p>Count: {count}</p>

            <button
                type="button"
                className="counter"
                onClick={decrement}
            >
                Click here to subtract
            </button>

            <button
                type="button"
                className="counter"
                onClick={restart}
                style={{ margin: '20px' }}
            >
                Click here to restart
            </button>
        </section>
    )
}
export default Counter