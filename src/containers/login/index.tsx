import { Button, Grid, Text, Title } from '@mantine/core'
import { LeftSide, LoginContainer, RightSide, TermosContainer } from './styles'

import Illustration from 'assets/login/illustration.svg'
import { IconBrandGoogle } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { useLogin } from './useLogin'

export function Login() {
  const { handleLogin } = useLogin()

  return (
    <LoginContainer>
      <LeftSide>
        {/* TODO implementar logo */}
        <Title>Prime Score</Title>
        <Grid>
          <img src={Illustration} />
        </Grid>
        <Grid style={{ gap: 8, display: 'flex', flexDirection: 'column' }}>
          <Title order={3}>
            Transforme sua experiência de gerenciamento de torneios.
          </Title>
          <Text size="md" color="gray.6">
            Junte-se a nós agora e leve seus torneios para o próximo nível.
          </Text>
        </Grid>
      </LeftSide>
      <RightSide>
        <div></div>
        <div>
          <div>
            <Title order={3}>Bem vindo ao Prime Score!</Title>
            <Text size="sm" color="gray.6">
              Você está a um passo de começar a gerenciar seus torneios de forma
              mais eficiente.
            </Text>
          </div>
          <div>
            <Button leftIcon={<IconBrandGoogle size="18" />}>
              <Text size="sm" onClick={handleLogin}>
                Entrar com o Google
              </Text>
            </Button>
          </div>
        </div>
        <TermosContainer>
          <Text size="sm" color="gray.6">
            Ao entrar, você concorda com os nossos
            <br /> <Link to="#">Termos de Serviço</Link> e{' '}
            <Link to="#">Política de Privacidade</Link>.
          </Text>
        </TermosContainer>
      </RightSide>
    </LoginContainer>
  )
}
