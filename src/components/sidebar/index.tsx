import {
  Center,
  Navbar,
  Stack,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
} from '@mantine/core'
import { IconLogout } from '@tabler/icons-react'

import { useStyles } from './styles'
import { rotas } from './static'
import type { NavbarLinkProps } from './types'
import { useAuthStore } from 'store/auth/auth'

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  )
}

export function SideBar() {
  const { logout } = useAuthStore()

  const links = rotas.map((link) => (
    <NavbarLink
      {...link}
      key={link.label}
      // TODO: adicionar lógica para mudar o estilo do link ativo
      // active={index === active}
    />
  ))

  return (
    <Navbar
      height="100%"
      width={{ base: 80 }}
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.fn.variant({
          variant: 'filled',
          color: theme.primaryColor,
        }).background,
      })}
    >
      <Center>
        <Title order={2}>PS</Title>
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconLogout} label="Sair" onClick={logout} />
        </Stack>
      </Navbar.Section>
    </Navbar>
  )
}
