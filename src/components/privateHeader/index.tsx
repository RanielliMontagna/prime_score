import { useNavigate } from 'react-router-dom'

import {
  Button,
  UnstyledButton,
  Divider,
  Center,
  Box,
  Collapse,
  Title,
  SimpleGrid,
} from '@mantine/core'
import { AppBar, LinkAppBar, useAppBarStyles } from '@quantun/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLogout, IconMoonStars, IconSun, IconChevronDown, IconHome2 } from '@tabler/icons-react'

import { rotas } from 'components/sidebar/static'
import { useAppStore } from 'store/app/app'
import { useAuthStore } from 'store/auth/auth'

import LogoBlack from 'assets/logo/logo-extend-black.svg'
import LogoWhite from 'assets/logo/logo-extend-white.svg'

export function PrivateHeader() {
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(true)

  const { classes, theme } = useAppBarStyles()
  const navigate = useNavigate()

  const { logout } = useAuthStore()
  const { theme: themeApp, setTheme } = useAppStore()

  return (
    <Box>
      <AppBar
        logo={
          <img
            src={themeApp === 'dark' ? LogoWhite : LogoBlack}
            alt="Logo"
            style={{ width: '150px' }}
          />
        }
        itemsDrawer={
          <>
            <LinkAppBar label="Home" icon={<IconHome2 />} onClick={() => navigate('/')} />

            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Funcionalidades
                </Box>
                <IconChevronDown size={16} color={theme.fn.primaryColor()} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>
              {rotas
                .filter((item) => item.path != '/')
                .map((item) => (
                  <LinkAppBar
                    key={item.label}
                    icon={<item.icon />}
                    label={item.label}
                    description={item.description}
                    onClick={() => navigate(item.path)}
                  />
                ))}
            </Collapse>

            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

            <SimpleGrid>
              <Button
                variant="gradient"
                leftIcon={themeApp === 'dark' ? <IconSun size="18" /> : <IconMoonStars size="18" />}
                onClick={() => setTheme(themeApp === 'dark' ? 'light' : 'dark')}
              >
                Tema {theme.colorScheme === 'dark' ? 'Claro' : 'Escuro'}
              </Button>
              <Button color="red" leftIcon={<IconLogout size="18" />} onClick={logout}>
                Sair
              </Button>
            </SimpleGrid>
          </>
        }
      />
    </Box>
  )
}
