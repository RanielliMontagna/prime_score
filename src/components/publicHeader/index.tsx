import {
  Header as MantineHeader,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Title,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBrandGoogle } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

import { useStyles } from './styles'
import { useAuthStore } from 'store/auth/auth'

export function PublicHeader() {
  const [drawerOpened, { toggle, close }] = useDisclosure(false)
  const { classes, theme } = useStyles()
  const { login } = useAuthStore()

  return (
    <Box>
      <MantineHeader height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Title order={2}>PS</Title>

          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
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

          <Group className={classes.hiddenMobile}>
            <Button
              variant="gradient"
              leftIcon={<IconBrandGoogle size={18} />}
              onClick={login}
            >
              Entrar com o Google
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggle}
            className={classes.hiddenDesktop}
          />
        </Group>
      </MantineHeader>

      <Drawer
        opened={drawerOpened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navegação"
        className={classes.hiddenDesktop}
        zIndex={10}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/termos" className={classes.link} onClick={close}>
            Termos de Serviço
          </Link>
          <Link to="/privacidade" className={classes.link} onClick={close}>
            Política de Privacidade
          </Link>

          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button
              variant="gradient"
              leftIcon={<IconBrandGoogle size={18} />}
              onClick={login}
            >
              Entrar com o Google
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
