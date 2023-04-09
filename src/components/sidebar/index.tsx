import { useAppStore } from 'store/app/app'
import { Sidebar } from '@quantun/core'

import { useTheme } from '@emotion/react'
import { Avatar, Navbar, Stack, Title, Tooltip, UnstyledButton } from '@mantine/core'
import { IconLogout, IconMoonStars, IconSun } from '@tabler/icons-react'

import { useStyles } from './styles'
import { rotas } from './static'
import type { NavbarLinkProps } from './types'

import { useAuthStore } from 'store/auth/auth'
import { useNavigate } from 'react-router-dom'

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles()

  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  )
}

export function SideBar() {
  const { logout, user } = useAuthStore()
  const { theme, setTheme } = useAppStore()

  const navigate = useNavigate()

  const { colors, primaryColor } = useTheme()

  return (
    <Sidebar
      logo={
        <Title order={2} sx={({ white }) => ({ color: white })}>
          PS
        </Title>
      }
      items={rotas.map((rota) => ({
        icon: <rota.icon size="1.2rem" stroke={1.5} />,
        label: rota.label,
        onClick: () => navigate(rota.path),
        path: rota.path,
      }))}
      footer={
        <>
          <Navbar.Section mt={8}>
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
          <Navbar.Section style={{ display: 'flex', justifyContent: 'center' }} mt={8}>
            <Avatar
              src={user?.photoURL}
              radius={8}
              size="md"
              style={{
                boxShadow: `0 0 0 2px ${colors[primaryColor][3]}`,
              }}
            />
          </Navbar.Section>
        </>
      }
    />
  )
}
