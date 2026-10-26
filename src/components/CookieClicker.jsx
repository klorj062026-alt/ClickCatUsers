import { useState } from "react";

export default function CookieClicker() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>cookieclicker</h2>
      <button onClick={() => setCount(count + 1)}>
        <img
          className="cookie-img"
          src="cookie-1-1.png"
          alt="Image of a Cookie"
        />
      </button>
      <p>{count}</p>
    </div>
  );
}
