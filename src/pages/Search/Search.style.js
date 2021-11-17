import styled from 'styled-components'
import { tokens } from '../../shared/tokens'
import { breakpoints } from '../../shared/media'

export const PageWrapper = styled.main`
  margin: 48px ${tokens.spaces.default};

  ${breakpoints.small} {
    margin: 48px 150px;
  }


`
