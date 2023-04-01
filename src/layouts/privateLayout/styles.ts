import styled from '@emotion/styled'

export const PrivateLayoutContainer = styled.div`
  display: flex;
  overflow: auto;

  height: 100vh;

  background-color: ${({ theme }) => {
    if (theme.colorScheme === 'dark') {
      return theme.colors.dark[7]
    } else {
      return theme.colors.gray[1]
    }
  }};
`

export const OutletContainer = styled.div`
  flex: 1;
  overflow: auto;
`
