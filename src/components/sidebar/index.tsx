import { useTheme } from '@emotion/react'
import {
  Avatar,
  Center,
  Navbar,
  Stack,
  Title,
  Tooltip,
  UnstyledButton,
} from '@mantine/core'
import { IconLogout, IconMoonStars, IconSun } from '@tabler/icons-react'

import { useStyles } from './styles'
import { rotas } from './static'
import type { NavbarLinkProps } from './types'

import { useAuthStore } from 'store/auth/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppStore } from 'store/app/app'

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
  const { logout, user } = useAuthStore()
  const { theme, setTheme } = useAppStore()

  const { pathname } = useLocation()
  const _navigate = useNavigate()

  const { colors, primaryColor } = useTheme()

  const links = rotas.map((link) => (
    <NavbarLink
      {...link}
      key={link.label}
      // TODO: adicionar lógica para mudar o estilo do link ativo
      active={pathname === link.path}
      onClick={() => _navigate(link.path)}
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
        border: 'none',
      })}
    >
      <Center>
        <Title order={2} sx={(theme) => ({ color: theme.white })}>
          PS
        </Title>
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" style={{ gap: 8 }}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center">
          <NavbarLink
            icon={theme === 'dark' ? IconSun : IconMoonStars}
            label={theme === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center">
          <NavbarLink icon={IconLogout} label="Sair" onClick={logout} />
        </Stack>
      </Navbar.Section>
      <Navbar.Section
        style={{ display: 'flex', justifyContent: 'center' }}
        mt={8}
      >
        <Avatar
          src={user?.photoURL}
          radius={8}
          size="md"
          style={{
            boxShadow: `0 0 0 2px ${colors[primaryColor][3]}`,
          }}
        />
      </Navbar.Section>
    </Navbar>
  )
}
