import styled from '@emotion/styled'

export const OutletContainer = styled.div`
  background-color: ${({ theme }) => {
    return theme.colors.dark[8]
  }};

  height: 100vh;
  overflow: auto;

  display: flex;
`
