import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { Container, DashboardCard } from './styles'

export function Dashboard() {
  return (
    <Container>
      <DashboardCard variant="default">
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </DashboardCard>

      <DashboardCard variant="default">
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 1.259,00</strong>
      </DashboardCard>

      <DashboardCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} color="#ffff" />
        </header>

        <strong>R$ 16.141,00</strong>
      </DashboardCard>
    </Container>
  )
}
