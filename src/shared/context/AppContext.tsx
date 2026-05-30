import { createContext } from "react"
import type { IAppContext } from "../model/types"

const defaultAppContext: IAppContext = {
  articleTitle: undefined,
  setArticleTitle: () => {},
  activeFilters: [],
}

export const AppContext = createContext<IAppContext>(defaultAppContext)