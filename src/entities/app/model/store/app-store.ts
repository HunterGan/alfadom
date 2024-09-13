import { createStore } from 'zustand/vanilla'

export type AppState = {
  user: User | null
  isShownSidebar: boolean
}

export type AppActions = {
  setSidebarVisible: (value?: boolean) => void
}

export type AppStore = AppState & AppActions

export const initialState: AppState = {
  user: null,
  isShownSidebar: false
}

export const createAppStore = (
  initState: AppState = initialState,
) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setSidebarVisible: (value) => set((state) => ({ isShownSidebar: value !== undefined ? value : !state.isShownSidebar})),
  }))
}