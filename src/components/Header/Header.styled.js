import styled from 'styled-components'
import { tokens } from '../../shared/tokens'
import { breakpoints } from '../../shared/media'

export const Wrapper = styled.header`
  background-color: ${tokens.colors.pinkLighter};

  > div {
    display: flex;
    justify-content: space-between;
    padding: ${tokens.spaces.tiny} ${tokens.spaces.default};
  }

  > img {
    height: 34px;
  }

  ${breakpoints.small} {
    > div {
      max-width: 1140px;
      padding: 10px 0;
      margin: 0 auto;
    }

    > img {
      height: 50px;
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    display: none;
    text-decoration: none;
    color: ${tokens.colors.white};
    font-size: ${tokens.fonts.textDefault};
    font-weight: 800;
    background-color: ${tokens.colors.pinkDarker};
    border-radius: 24px;
    padding: ${tokens.spaces.tiny} ${tokens.spaces.small};
    height: 33px;
  }

  ${breakpoints.small} {
    display: flex;

    a {
      display: block;
      margin-right: ${tokens.spaces.default};
    }
  }
`

export const Avatar = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 6px;
  cursor: pointer;

  ${breakpoints.small} {
    height: 50px;
    width: 50px;
  }
`
