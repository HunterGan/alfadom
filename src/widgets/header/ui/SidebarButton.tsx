'use client'

import { useAppStore } from "@/entities/app/model/provider/app-provider"

const SidebarButton = () => {
  const {setSidebarVisible, isShownSidebar} = useAppStore(state => state)

  return (
    <button
      onClick={() => setSidebarVisible(!isShownSidebar)}
      className="h-[20px] w-[20px] flex align-center justify-center"
    >
      |||
    </button>
  )
}

export default SidebarButton
