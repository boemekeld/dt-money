import igniteLogo from '../../assets/logo.svg'
import { Button } from '../Button'
import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img
          src={igniteLogo}
          alt="Dois triângulos verdes com um sobreposto acima e com um pequeno triângulo verde claro no centro."
        />

        <Button size="medium">Nova Transação</Button>
      </HeaderContent>
    </HeaderContainer>
  )
}
