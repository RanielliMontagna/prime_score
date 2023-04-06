import styled from '@emotion/styled'
import { rem } from '@mantine/core'

export const TorneiosContainer = styled.div`
  height: 100%;
`

const paddingVertical = rem(16)

export const Main = styled.main`
  overflow: auto;
  height: calc(100% - ${rem(100)});

  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${rem(32)};
  padding: ${paddingVertical} ${rem(64)};

  > div:first-of-type {
    display: grid;
    gap: ${rem(16)};
  }

  > div:last-of-type img {
    max-width: ${rem(300)};
    width: 100%;
  }

  @media (max-height: ${rem(430)}) {
    img {
      display: none;
    }
  }

  @media (max-width: ${rem(1200)}) {
    padding: ${paddingVertical} ${rem(32)};
  }

  @media (max-width: ${rem(768)}) {
    padding: ${paddingVertical};
    flex-direction: column;
    text-align: center;

    .actionButton {
      display: none;
    }

    > div:last-of-type img {
      width: 70%;
    }

    @media (max-height: ${rem(600)}) {
      img {
        display: none;
      }
    }
  }
`
