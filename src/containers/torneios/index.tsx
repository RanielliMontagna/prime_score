import emptyState from 'assets/torneios/empty-state.svg'

import { Button, Text, Title } from '@mantine/core'

import { Header } from 'components/header'
import { Main, TorneiosContainer } from './styles'

export function Torneios() {
  return (
    <TorneiosContainer>
      <Header title="Seus torneios" button={{ children: 'Criar torneio' }} />
      <Main>
        <div>
          <div>
            <Title order={3}>Comece agora!</Title>
            <Text color="gray.6">
              Crie um torneio e comece a jogar com seus amigos.
            </Text>
          </div>
          <Button className="actionButton">Criar torneio</Button>
        </div>
        <div>
          <img src={emptyState} alt="Empty state" />
        </div>
      </Main>
    </TorneiosContainer>
  )
}
