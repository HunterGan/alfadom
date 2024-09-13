'use client'

import { useAppStore } from "@/entities/app/model/provider/app-provider"
import SidebarButton from "./SidebarButton"
import useOnClickOutside from "@/shared/lib/hooks/useOutsideClick"
import { useRef } from "react"

const MobileSidebar = () => {
  const {isShownSidebar, setSidebarVisible} = useAppStore(state => state)

  const contentRef = useRef(null)

  useOnClickOutside(contentRef, () => setSidebarVisible(false))

  return (
    <div ref={contentRef} className={`${isShownSidebar ? 'fixed' : 'hidden'} w-[250px] h-svh max-h-svh bg-[pink]  flex items-center justify-center inset-0 sm:hidden transition duration-300 ease-in-out`}>
      <SidebarButton/>
      Sidebar content
    </div>
  )
}

export default MobileSidebar