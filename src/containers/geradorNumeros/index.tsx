import { Button, Checkbox, TextInput } from '@mantine/core'

import { Icon123 } from '@tabler/icons-react'
import { useGeradorNumeros } from './useGeradorNumeros'

import {
  DivFields,
  Form,
  Header,
  IconHeader,
  SimpleGridContainer,
} from './styles'
import { useTheme } from '@emotion/react'

export function GeradorNumeros() {
  const { colors, primaryColor } = useTheme()
  const { form, handleGenerate } = useGeradorNumeros()

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
      <Form onSubmit={form.onSubmit(handleGenerate)}>
        <DivFields>
          <TextInput
            id="min"
            name="min"
            type="number"
            label="Valor mínimo"
            required
            {...form.getInputProps('min')}
            onFocus={(e) => e.target.select()}
          />
          <TextInput
            id="max"
            name="max"
            type="number"
            label="Valor máximo"
            required
            {...form.getInputProps('max')}
            onFocus={(e) => e.target.select()}
          />
          <TextInput
            id="amount"
            name="amount"
            type="number"
            label="Quantidade de números"
            required
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
        <Button type="submit" fullWidth size="lg">
          Gerar
        </Button>
      </Form>
    </SimpleGridContainer>
  )
}
