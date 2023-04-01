import styled from '@emotion/styled'
import { rem } from '@mantine/core'

export const NumerosContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${rem(16)};
`

export const NumeroContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  border-radius: ${rem(8)};

  width: ${rem(70)};
  height: ${rem(70)};

  font-size: ${rem(24)};
`

export const NumeroPosicao = styled.span`
  position: absolute;

  top: 0;
  left: 0;

  width: ${rem(30)};
  height: ${rem(15)};

  background-color: ${({ theme }) => {
    if (theme.colorScheme === 'dark') return `${theme.colors.gray[7]}`

    return `${theme.colors.gray[3]}`
  }};

  border-radius: ${rem(8)} 0 ${rem(8)} 0;

  font-size: ${rem(10)};
`

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${rem(16)};
  justify-items: center;

  > button {
    max-width: ${rem(300)};
    width: 100%;
  }
`
