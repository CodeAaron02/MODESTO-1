import { create } from "zustand";

interface sideBarType {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}

export const useSidebar = create<sideBarType>((set) => ({
  isOpen: false,
  setOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setClose: () => set({ isOpen: false }),
}));
