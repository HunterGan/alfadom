import { FC, ReactNode } from "react"
import { AppStoreProvider } from "./app/model/provider/app-provider"

interface StoreProviderProps {
  children: ReactNode
}

const StoreProvider: FC<StoreProviderProps> = ({children}) => {
  return (
    <AppStoreProvider>
      {children}
    </AppStoreProvider>
  )
}

export default StoreProvider
