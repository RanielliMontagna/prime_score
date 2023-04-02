import { useTheme } from '@emotion/react'
import { Button, Checkbox, TextInput } from '@mantine/core'

import { Icon123 } from '@tabler/icons-react'

import { DivFields, IconHeader } from './styles'
import { SimpleGridContainer, Header } from '../styles'
import { useGeradorNumerosFormContext } from '..'

interface IGeradorProps {
  loading: boolean
}

export function Gerador({ loading }: IGeradorProps) {
  const { colors, primaryColor } = useTheme()
  const form = useGeradorNumerosFormContext()

  return (
    <SimpleGridContainer>
      <Header>
        <IconHeader>
          <Icon123 size={40} color={colors[primaryColor][6]} />
        </IconHeader>
        <h1>Gerador de Números Aleatórios</h1>
        <p>
          Gere uma lista de números aleatórios com base em um intervalo de
          valores.
        </p>
      </Header>
      <DivFields>
        <TextInput
          id="min"
          name="min"
          type="number"
          label="Valor mínimo"
          required
          disabled={loading}
          {...form.getInputProps('min')}
          onFocus={(e) => e.target.select()}
        />
        <TextInput
          id="max"
          name="max"
          type="number"
          label="Valor máximo"
          required
          disabled={loading}
          {...form.getInputProps('max')}
          onFocus={(e) => e.target.select()}
        />
        <TextInput
          id="amount"
          name="amount"
          type="number"
          label="Quantidade de números"
          required
          disabled={loading}
          {...form.getInputProps('amount')}
          onFocus={(e) => e.target.select()}
        />
        <Checkbox
          id="duplicates"
          name="duplicates"
          label="Permitir números duplicados?"
          {...form.getInputProps('duplicates')}
        />
      </DivFields>
      <div style={{ paddingBottom: 16 }}>
        <Button type="submit" fullWidth size="lg" loading={loading}>
          Gerar
        </Button>
      </div>
    </SimpleGridContainer>
  )
}
