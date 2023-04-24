import { useAppStore } from 'store/app/app'
import { Sidebar, ItemSidebar } from '@quantun/core'

import { useTheme } from '@emotion/react'
import { Avatar, Navbar, Stack, Title } from '@mantine/core'
import { IconLogout, IconMoonStars, IconSun } from '@tabler/icons-react'

import { rotas } from './static'

import { useAuthStore } from 'store/auth/auth'
import { useNavigate } from 'react-router-dom'

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
              <ItemSidebar
                icon={
                  theme === 'dark' ? (
                    <IconSun size="1.2rem" stroke={1.5} />
                  ) : (
                    <IconMoonStars size="1.2rem" stroke={1.5} />
                  )
                }
                label={theme === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                path="/"
                active={false}
              />
            </Stack>
          </Navbar.Section>
          <Navbar.Section>
            <Stack justify="center">
              <ItemSidebar
                icon={<IconLogout size="1.2rem" stroke={1.5} />}
                label="Sair"
                onClick={logout}
                path="/"
                active={false}
              />
            </Stack>
          </Navbar.Section>
          <Navbar.Section style={{ display: 'flex', justifyContent: 'center' }} mt={8}>
            <Avatar
              src={user?.photoURL}
              radius={8}
              size="md"
              style={{
                boxShadow: `0 0 0 2px ${colors?.[primaryColor][3]}`,
              }}
            />
          </Navbar.Section>
        </>
      }
    />
  )
}
