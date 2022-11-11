import { ButtonHTMLAttributes, ReactNode } from "react"
import { Container } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary"
  size?: "small" | "medium" | "large"
}

export function Button({ children, size = "large", variant = "primary", ...props }:ButtonProps) {
  return (
    <Container size={size} variant={variant} {...props}>
      {children}
    </Container>
  )
}