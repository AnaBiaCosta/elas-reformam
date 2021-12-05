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

export const SearchContainer = styled.div`
  margin-top: 48px;

  select {
    margin-bottom: ${tokens.spaces.default};
  }


  ${breakpoints.small} {
    margin-top: ${tokens.spaces.larger};
    display: flex;
    justify-content: space-between;

    select {
      margin-bottom: 0;
    }
  }
`

export const ActionsContainer = styled.div`
  p {
    color: ${tokens.colors.black};
    font-size:${tokens.fonts.textSmall};
    line-height: ${tokens.lineHeight.textSmall};
    margin-bottom: ${tokens.spaces.small};
  }

  button {
    margin-bottom: ${tokens.spaces.small};
  }

  ${breakpoints.small} {
    button {
      margin-bottom: 0;
    }
  }
`

export const ResultWrapper = styled.section`
  margin-top: 48px;
`

export const InitialState = styled.div`
  margin: 0 auto;
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    height: 177px;
  }

  p {
    color: ${tokens.colors.pinkDarker};
    font-weight: 800;
    font-size: ${tokens.fonts.textDefault};
    line-height: ${tokens.lineHeight.textDefault};
    margin-top: ${tokens.spaces.small};
  }

  ${breakpoints.small} {
    width: 230px;

    img {
      width: 221px;
      height: 324px;
    }

    p {
      font-size: ${tokens.fonts.subtitle1};
      line-height: ${tokens.lineHeight.subtitle1};
    }
  }
`
