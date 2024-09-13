interface DataType {
  id: string
  type: string
}

export const getBreadcrumbs = (banyaKey: string = ''): { [key: string]: string | DataType } => {
  const breadcrumb = (...parts: string[]): string => {
    return parts.join("/")
  }

  return {
    [breadcrumb('/')]: 'Главная',
    [breadcrumb('bany')]: 'Бани',
    [breadcrumb('houses')]: 'Дома',

    // данные, которые передадутся в Breadcrumbs хедера
    [breadcrumb('bany', banyaKey)]: {id: banyaKey, type: 'banya'},
  }
}
