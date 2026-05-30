import type { Dispatch, SetStateAction } from "react"

export interface IAppContext {
  articleTitle?: string
  setArticleTitle: Dispatch<SetStateAction<string | undefined>>
  activeFilters: string[]
}

export interface ITag {
  title: string
  icon?: string
}