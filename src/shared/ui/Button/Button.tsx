import { Button } from "@mui/material"
import { useMemo } from "react"


interface IButton {
  children: React.ReactNode
  variant: 'filled' | 'outlined' | 'clear'
  className?: string
}

export const AppButton = (props: IButton) => {
  const {children, variant, className} = props

  const color = useMemo(() => {
    if (variant === "clear") {
      return undefined
    }

    if (variant === "filled") {
      return "#E3F5F5"
    }

    if (variant === "outlined") {
      return "#03B2A5"
    }
  }, [variant])

    const backgroundColor = useMemo(() => {
    if (variant === "clear") {
      return "rgba(0,0,0,0)"
    }

    if (variant === "filled") {
      return "#03B2A5"
    }

    if (variant === "outlined") {
      return "#E3F5F5"
    }
  }, [variant])

  return (
    <Button
      style={{
        color,
        backgroundColor,
        textTransform: 'none',
        padding: '14px 20px',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 'bold'
      }}
      className={className}
    >
      {children}
    </Button>
  )
}