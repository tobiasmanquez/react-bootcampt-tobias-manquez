import { useEffect, useState } from 'react';

function CountClicks() {

  const [count, setCount] = useState(0);

  useEffect (() => {
    document.title = `Tobias - Click ${count}`
  },[count])


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

export default CountClicks;

