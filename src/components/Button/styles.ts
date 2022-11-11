import styled, { css, DefaultTheme } from 'styled-components'

interface ContainerProps {
  variant: 'primary'
  size: 'small' | 'medium' | 'large'
}

const containerModifiers = {
  small: () => css`
    height: 2.375rem;

    font: 700 0.875rem 'Roboto', sans-serif;
    padding: 0.5rem 1rem;
  `,

  medium: (theme: DefaultTheme) => css`
    height: 3.125rem;
    font: 700 1rem 'Roboto', sans-serif;

    padding: 0.75rem 1.25rem;

    background-color: ${theme['green-500']};
  `,

  large: (theme: DefaultTheme) => css`
    height: 3.625rem;
    padding: 1rem 2rem;

    font: 700 1rem 'Roboto', sans-serif;

    background-color: ${theme['green-500']};
  `,

  primary: (theme: DefaultTheme) => css`
    background-color: ${theme['green-500']};
  `,
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, variant, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.white};
    border-radius: 6px;
    background-color: ${theme['green-500']};
    border: none;

    &:hover {
      background-color: ${theme['green-300']};
      transition: background-color 0.2s;
    }

    ${containerModifiers[size](theme)}
    ${containerModifiers[variant](theme)}
  `}
`
