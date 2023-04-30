import { Grid, Text, Title } from '@mantine/core'
import { LoginScreen } from '@quantun/login-screen'

import Illustration from 'assets/login/illustration.svg'
import Logo from 'assets/logo/logo-extend.svg'
import { useAuthStore } from 'store/auth/auth'

export function Login() {
  const { login } = useAuthStore()

  return (
    <LoginScreen
      beforeLoginContent={
        <>
          <Title order={3}>Bem vindo ao Prime Score!</Title>
          <Text size="sm" color="gray.6">
            Você está a um passo de começar a gerenciar seus torneios de forma mais eficiente.
          </Text>
        </>
      }
      welcomeContent={
        <>
          <img src={Logo} style={{ width: 250 }} />
          <Grid>
            <img src={Illustration} />
          </Grid>
          <Grid style={{ gap: 8, display: 'flex', flexDirection: 'column' }}>
            <Title order={3}>Transforme sua experiência de gerenciamento de torneios.</Title>
            <Text size="md" color="gray.6">
              Junte-se a nós agora e leve seus torneios para o próximo nível.
            </Text>
          </Grid>
        </>
      }
      onLogin={login}
    />
  )
}
