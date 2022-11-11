import { ThemeProvider } from 'styled-components'

import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
