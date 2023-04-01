import { useEffect } from 'react'
import { Button } from '@mantine/core'

import { Header, SimpleGridContainer } from '../styles'
import { Footer, NumerosContainer, NumeroContainer } from './styles'
import { useGeradorNumerosFormContext } from '..'
import { notifications } from '@mantine/notifications'
import { IconCheck } from '@tabler/icons-react'

interface IResultadoProps {
  numbers: number[]
  setNumbers: React.Dispatch<React.SetStateAction<number[]>>
}

export function Resultado({ numbers, setNumbers }: IResultadoProps) {
  const form = useGeradorNumerosFormContext()

  return (
    <SimpleGridContainer withoutcenter="true">
      <Header>
        <h1>Resultado obtido</h1>
        <p>Gerado aleatoriamente com base nos valores informados.</p>
      </Header>

      <NumerosContainer>
        {numbers.map((number, index) => (
          <NumeroContainer key={index}>
            <span>{number}</span>
          </NumeroContainer>
        ))}
      </NumerosContainer>

      <Footer>
        <Button
          type="button"
          onClick={() => {
            form.setValues({ duplicates: false })
            setNumbers([])
          }}
        >
          Gerar novamente
        </Button>
        <Button
          type="button"
          mb={32}
          onClick={() => {
            navigator.clipboard.writeText(numbers.join(', '))

            notifications.show({
              title: 'Sucesso!',
              message: 'Números copiados para área de transferência',
              color: 'teal',
              icon: <IconCheck />,
            })
          }}
        >
          Copiar para área de transferência
        </Button>
      </Footer>
    </SimpleGridContainer>
  )
}
