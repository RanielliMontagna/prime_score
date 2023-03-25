import styled from '@emotion/styled'
import { rem } from '@mantine/core'

export const LoginContainer = styled.div`
  display: flex;
  height: 100%;
  color: ${({ theme }) => theme.white};
  overflow: auto;
  min-height: 500px;

  > div {
    display: flex;
    flex-direction: column;

    flex: 1;
    padding: ${rem(128)};

    @media (max-width: 1300px) {
      padding: ${rem(64)};
    }

    @media (max-width: 1024px) {
      padding: ${rem(32)};
    }

    @media (max-height: 800px) {
      &:first-of-type {
        padding: ${rem(16)} ${rem(32)};
      }
      &:last-of-type {
        padding: ${rem(32)} ${rem(32)};
      }
    }

    @media (max-width: 768px) {
      &:first-of-type {
        display: none;
      }
    }
  }
`

export const LeftSide = styled.div`
  justify-content: space-around;

  img {
    max-width: 400px;
  }

  @media (max-height: 800px) {
    img {
      max-width: 300px;
    }
  }
`

export const RightSide = styled.div`
  justify-content: space-between;

  > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${rem(16)};
  }

  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};

  a {
    color: ${({ theme }) => theme.black};
  }
`

export const TermosContainer = styled.div``
