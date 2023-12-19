import { create } from "zustand";

type CounterStore = {
  count: number;

  decrement: () => void;

  decrementAsync: () => Promise<void>;

  increment: () => void;

  incrementAsync: () => Promise<void>;

  reset: () => void;
};

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,

  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),

  decrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    set((state) => ({
      count: state.count - 1,
    }));
  },

  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    set((state) => ({
      count: state.count + 1,
    }));
  },

  reset: () =>
    set((state) => ({
      count: 0,
    })),
}));

export { useCounterStore };
