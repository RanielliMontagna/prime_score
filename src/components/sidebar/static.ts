import { IconHome2, IconTournament, IconListNumbers } from '@tabler/icons-react'

export const rotas = [
  {
    icon: IconHome2,
    label: 'Home',
    description: 'Página inicial do sistema',
    path: '/',
  },
  {
    icon: IconTournament,
    label: 'Torneios',
    description: 'Crie e gerencie seus torneios personalizados',
    path: '/torneios',
  },
  {
    icon: IconListNumbers,
    label: 'Gerador de números',
    description: 'Gere números aleatórios de forma rápida e fácil',
    path: '/gerador-de-numeros',
  },
]
