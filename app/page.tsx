"use client";

import { useCounterStore } from "@/store";

import { useEffect } from "react";

import Component1 from "@/components/Component1";

import Component2 from "@/components/Component2";

const setCount = () => useCounterStore.setState({ count: 999 });

const logCount = () => console.log(useCounterStore.getState().count);

const HomePage = () => {
  const count = useCounterStore((state) => state.count);

  const decrement = useCounterStore((state) => state.decrement);

  const decrementAsync = useCounterStore((state) => state.decrementAsync);

  const increment = useCounterStore((state) => state.increment);

  const incrementAsync = useCounterStore((state) => state.incrementAsync);

  const reset = useCounterStore((state) => state.reset);

  useEffect(() => logCount(), []);

  return (
    <div>
      <div>HomePage: The count is {count}.</div>

      <Component1 />

      <Component2 />

      <div>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div>
        <button onClick={decrementAsync}>Decrement Async</button>
      </div>

      <div>
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <button onClick={incrementAsync}>Increment Async</button>
      </div>

      <div>
        <button onClick={setCount}>Set Count</button>
      </div>

      <div>
        <button onClick={logCount}>Log Count</button>
      </div>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default HomePage;
