import create from 'zustand';

export const useUserStateStore = create((set) => ({
  userState: false,
  userLogInAndOut: () => set((state:any) => ({ userState: !(state.userState) })),
}));