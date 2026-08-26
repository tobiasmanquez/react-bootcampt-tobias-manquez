import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <section id="counter">
        <div id="count">{count}</div>
        <button
          type="button"
          className="counter addition"
        onClick={() => setCount((count) => count + 1)}
      >
        Count Addition is {count}
      </button>

      <button
        type="button"
        className="counter subtraction"
        onClick={() => setCount((count) => count - 1)}
      >
        Count Subtraction is {count}
      </button>
    </section>
    </div>
  );
}

export default Count;

