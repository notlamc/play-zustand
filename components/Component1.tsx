"use client";

import { useCounterStore } from "@/store";

const Component1 = () => {
  const count = useCounterStore((state) => state.count);

  return <div>Component1: The count is {count}.</div>;
};

export default Component1;
