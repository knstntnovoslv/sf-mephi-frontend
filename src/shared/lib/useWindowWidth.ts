import { useEffect, useState } from "react"


export const useWindowWidth = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)

    const cb = () => {setWidth(window.innerWidth)}
    window.addEventListener('resize', cb)

    return () => {window.removeEventListener('resize', cb)}
  }, [])

  return width
}