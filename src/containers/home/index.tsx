import { useMemo } from 'react'

import { Group, Paper, SimpleGrid, Text } from '@mantine/core'
import {
  IconArrowUpRight,
  IconArrowDownRight,
  IconArrowRight,
} from '@tabler/icons-react'

import { useStyles } from './styles'
import { data } from './static'
import { Header } from 'components/header'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const { classes } = useStyles()
  const navigate = useNavigate()

  const stats = data.map((stat) => {
    const Icon = stat.icon

    const DiffIcon = useMemo(() => {
      if (stat.diff > 0) {
        return IconArrowUpRight
      } else if (stat.diff < 0) {
        return IconArrowDownRight
      } else {
        return IconArrowRight
      }
    }, [stat.diff])

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
          <Text
            color={stat.diff > 0 ? 'teal' : stat.diff < 0 ? 'red' : 'dimmed'}
            fz="sm"
            fw={500}
            className={classes.diff}
          >
            <span>{stat.diff}%</span>
            <DiffIcon size="1rem" stroke={1.5} />
          </Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          Comparado ao mês anterior
        </Text>
      </Paper>
    )
  })
  return (
    <div>
      <Header
        title="Bem-vindo ao Prime Score!"
        button={{
          children: 'Ir para os seus torneios',
          onClick: () => navigate('/torneios'),
        }}
      />
      <main className={useStyles().classes.main}>
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: 'md', cols: 2 },
            { maxWidth: 'xs', cols: 1 },
          ]}
        >
          {stats}
        </SimpleGrid>
      </main>
    </div>
  )
}
