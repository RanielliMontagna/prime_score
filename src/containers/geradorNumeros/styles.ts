import styled from '@emotion/styled'
import { SimpleGrid, rem } from '@mantine/core'

export const SimpleGridContainer = styled(SimpleGrid)<{
  withoutcenter?: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ withoutcenter }) =>
    withoutcenter ? 'flex-start' : 'center'};
  text-align: center;

  max-width: ${rem(700)};
  height: 100%;

  gap: ${rem(32)};
  margin: 0 auto;
  padding: ${rem(16)} ${rem(32)};
  padding-top: ${({ withoutcenter }) => (withoutcenter ? rem(64) : 0)};

  @media (max-width: 768px) {
    padding: ${rem(8)} ${rem(16)};
    padding-top: ${({ withoutcenter }) => (withoutcenter ? rem(32) : 0)};
  }

  @media (max-height: 670px) {
    justify-content: flex-start;
    padding-top: ${rem(16)};
  }
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  > p {
    color: ${({ theme }) => theme.colors.gray[6]};
  }
`
