import styled from 'styled-components'
import { tokens } from '../../shared/tokens'
import { breakpoints } from '../../shared/media'

export const PageWrapper = styled.main`
  padding: 48px ${tokens.spaces.default};

  ${breakpoints.small} {
    max-width: 1140px;
    margin: 0 auto;
    padding: 48px 0;
  }
`

export const Title = styled.h1`
  color: ${tokens.colors.black};
  font-size: ${tokens.fonts.subtitle1};
  line-height: ${tokens.lineHeight.subtitle1};
  font-weight: 800;

  ${breakpoints.small} {
    font-size: ${tokens.fonts.title2};
    line-height: ${tokens.fonts.title2};
  }
`
