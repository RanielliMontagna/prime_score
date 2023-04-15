import { Link } from 'react-router-dom'

import { AppBar, useAppBarStyles } from '@quantun/core'
import { Group, Button, Divider, Box, Title } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'

import { useAuthStore } from 'store/auth/auth'

export function PublicHeader() {
  const { classes, theme } = useAppBarStyles()
  const { login } = useAuthStore()

  return (
    <Box>
      <AppBar
        logo={<Title order={2}>PS</Title>}
        customSpace={{
          center: (
            <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/termos" className={classes.link}>
                Termos de Serviço
              </Link>
              <Link to="/privacidade" className={classes.link}>
                Política de Privacidade
              </Link>
            </Group>
          ),
          right: (
            <Group className={classes.hiddenMobile}>
              <Button variant="gradient" leftIcon={<IconBrandGoogle size={18} />} onClick={login}>
                Entrar com o Google
              </Button>
            </Group>
          ),
        }}
        itemsDrawer={
          <>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/termos" className={classes.link} onClick={close}>
              Termos de Serviço
            </Link>
            <Link to="/privacidade" className={classes.link} onClick={close}>
              Política de Privacidade
            </Link>

            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

            <Group position="center" grow pb="xl" px="md">
              <Button variant="gradient" leftIcon={<IconBrandGoogle size={18} />} onClick={login}>
                Entrar com o Google
              </Button>
            </Group>
          </>
        }
      />
    </Box>
  )
}
