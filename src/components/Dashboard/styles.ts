import styled, { css, DefaultTheme } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface DashboardCardProps {
  variant: 'green' | 'default'
}

const dashboardCardModifiers = {
  green: (theme: DefaultTheme) => css`
    background-color: ${theme['green-500']};
  `,
  default: (theme: DefaultTheme) => css`
    background-color: ${theme['gray-600']};
  `,
}

export const DashboardCard = styled.div<DashboardCardProps>`
  ${({ theme, variant }) => css`
    padding: 2rem;
    border-radius: 6px;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      color: ${theme['gray-300']};
    }

    strong {
      display: block;
      margin-top: 1rem;

      font: 700 2rem 'Roboto', sans-serif;
      line-height: 1.4;
    }

    &:nth-child(3) {
      background-color: ;
    }

    ${dashboardCardModifiers[variant](theme)}
  `}
`
