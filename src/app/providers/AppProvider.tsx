import { useState, type ComponentProps } from "react";
import { AppContext } from "../../shared/context/AppContext";


export const AppProvider = (props: ComponentProps<"span">) => {
  const {children} = props
  const [articleTitle, setArticleTitle] = useState<string>()
  const [activeFilters, _setActiveFilters] = useState<string[]>(["self"])

  return (
    <AppContext.Provider value={{articleTitle, setArticleTitle, activeFilters}}>
      {children}
    </AppContext.Provider>
  )
}