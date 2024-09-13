import { Header } from "@/widgets/header"
import MobileSidebar from "@/widgets/header/ui/MobileSidebar"
import { FC, memo, ReactNode } from "react"

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = memo(({children}) => {
  return (
    <div className="w-full h-full flex min-h-screen flex-col">
      <Header/>
      <MobileSidebar/>
      <main className="flex-1 h-full bg-[green] min-h-[1000px]">
        {children}
      </main>
      <footer className="w-full h-[100px] bg-[#aeae]">footer</footer>
    </div>
  )
})

export default MainLayout
