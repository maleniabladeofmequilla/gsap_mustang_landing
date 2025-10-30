import { create } from "zustand";

const useMustangStore = create((set) => ({
  car: "302",
  setCar: (car) => set({ car }),
}));

export default useMustangStore;
