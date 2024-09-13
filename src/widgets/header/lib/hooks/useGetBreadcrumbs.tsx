'use client'

import { ParamsType } from "@/shared/types";
import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import { getBreadcrumbs } from "../helpers/getBreadcrumbs";

export type BreadcrumbType = {
  path: string
  last: boolean
  label?: string // существует, если из getBreadcrumbs пришла строка
  data?: {       // существует, если из getBreadcrumbs пришел объект
    id: string   // идентификатор из useParams
    type: string // по этому ключу определяем ноду в Breadcrumbs
  }
}

const useGetBreadcrumbs = (): BreadcrumbType[] => {
  const location = usePathname()

  if (!location) return []

  const params = useParams<ParamsType>()

  const breadcrumbs = useMemo(() => getBreadcrumbs(params?.banya_key), [])

  const pathname = useMemo(() => {
    return ['/', ...location.split('/').filter(x => x)]
  }, [location])

  return pathname.map((x, index) => {
    const last = index === pathname.length - 1;
    const to = x === '/' ? '/' : `${pathname.slice(1, index + 1).join('/')}`
    
    const key = typeof breadcrumbs[to] === 'string' ? 'label' : 'data'

    return {
      last,
      path: to,
      [key]: breadcrumbs[to]
    }
  })
}

export default useGetBreadcrumbs
