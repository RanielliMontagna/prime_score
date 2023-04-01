import styled from '@emotion/styled'
import { rem } from '@mantine/core'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${rem(32)};
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
