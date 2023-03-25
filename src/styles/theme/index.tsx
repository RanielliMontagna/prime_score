import { MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  primaryColor: 'grape',
  fontFamily: 'Inter, sans-serif',
}

export type ThemeOverride = typeof theme
