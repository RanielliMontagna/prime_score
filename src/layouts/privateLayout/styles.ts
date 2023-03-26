import styled from '@emotion/styled'

export const PrivateLayoutContainer = styled.div`
  display: flex;
  overflow: auto;

  background-color: ${({ theme }) => {
    return theme.colors.dark[8]
  }};

  height: 100vh;
`

export const OutletContainer = styled.div`
  flex: 1;
  overflow: auto;
`
