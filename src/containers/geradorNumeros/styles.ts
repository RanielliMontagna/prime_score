import styled from '@emotion/styled'
import { SimpleGrid, rem } from '@mantine/core'

export const SimpleGridContainer = styled(SimpleGrid)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: ${rem(700)};
  height: 100%;

  gap: ${rem(32)};
  margin: 0 auto;
  padding: ${rem(16)} ${rem(32)};

  @media (max-width: 768px) {
    padding: ${rem(8)} ${rem(16)};
  }
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${rem(32)};
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  > p {
    color: ${({ theme }) => theme.colors.gray[6]};
  }
`

export const IconHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${rem(64)};
  height: ${rem(64)};
  border-radius: ${rem(16)};

  background-color: ${({ theme: { primaryColor, colors } }) =>
    colors[primaryColor][7]}10;
`

export const DivFields = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${rem(16)};
`
