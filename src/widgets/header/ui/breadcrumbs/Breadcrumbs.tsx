'use client'

import { useAppStore } from "@/entities/app/model/provider/app-provider"
import useGetBreadcrumbs from "../../lib/hooks/useGetBreadcrumbs"

const Breadcrumbs = () => {
  const breadcrumbs = useGetBreadcrumbs()
  const appStore = useAppStore(state => state.isShownSidebar)
console.log('isShown is : ', appStore);

  if (breadcrumbs.length === 0) return null
console.log('BBBBBBBBBBBBBBBBBBBB', {breadcrumbs});

  return (
    <ul className="flex flex-row gap-[8px] items-center justify-start h-[20px] max-w-screen-xl	my-0 mx-auto">
      {breadcrumbs.map((breadcrumb) => {
        const {last, path, label} = breadcrumb
        return (
          <li key={breadcrumb.path}>
            {last
              ? <span>{label}</span>
              : <a href={path}>{label}</a>
            }
            {!last && ' -> '}
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumbs
