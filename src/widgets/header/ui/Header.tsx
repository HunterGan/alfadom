import { FC } from "react"
import Breadcrumbs from "./breadcrumbs/Breadcrumbs"
import SidebarButton from "./SidebarButton"

const Header:FC = () => {
  return (
    <header className=" w-full sticky bg-[#aeae] top-0">
      
      {/* Call top bar on mobile */}
      <div className="h-[25px] flex justify-between items-center bg-[blue] w-full sm:hidden">
        <span>Order call</span>
        <span>993932932</span>
      </div>
      {/* Main header part */}
      <div className="bg-[#ffe] max-w-screen-xl	my-0 mx-auto h-[75px] bg-[#ffe] sm:h-[100px]">
        <SidebarButton/>
        <h1 className="text-center text-xl">Header</h1>
      </div>
      <Breadcrumbs/>
    </header>
  )
}

export default Header
