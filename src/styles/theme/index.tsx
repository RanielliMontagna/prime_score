import { MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'grape',
  fontFamily: 'Inter, sans-serif',
  globalStyles: (theme) => ({
    '*': {
      '&::-webkit-scrollbar': {
        width: 8,
        height: 8,
      },
      '&::-webkit-scrollbar-track': {
        background:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[1],
      },
      '&::-webkit-scrollbar-thumb': {
        background:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[5]
            : theme.colors.gray[3],
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[4],
      },
    },
  }),
}

export type ThemeOverride = typeof theme
