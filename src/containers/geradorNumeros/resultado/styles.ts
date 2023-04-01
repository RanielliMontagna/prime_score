import styled from '@emotion/styled'
import { rem } from '@mantine/core'

export const NumerosContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${rem(16)};
`

export const NumeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
  border-radius: ${rem(8)};

  width: ${rem(60)};
  height: ${rem(60)};

  font-size: ${rem(24)};
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
