"use client";

import { useCounterStore } from "@/store";

const Component2 = () => {
  const count = useCounterStore((state) => state.count);

  return <div>Component2: The count is {count}.</div>;
};

export default Component2;
