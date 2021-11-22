import styled from 'styled-components'
import { tokens } from '../../shared/tokens'
import { breakpoints } from '../../shared/media'

export const Wrapper = styled.div`
  border: 1px solid ${tokens.colors.grayLighter};
  border-radius: 12px;
  padding: ${tokens.spaces.small};

  a {
    text-decoration: none;
    background-color: ${tokens.colors.pinkDarker};
    border-radius: ${tokens.spaces.default};
    padding: ${tokens.spaces.tiny} ${tokens.spaces.default};
    color: ${tokens.colors.white};
    font-weight: 800;
    font-size: ${tokens.fonts.textSmall};
    line-height: ${tokens.fonts.textSmall};
  }

  ${breakpoints.small} {
    padding: ${tokens.spaces.default};
    display: flex;
    justify-content: space-between;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${breakpoints.small} {
    flex-direction: row;

    > div {
      height: 100%;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${tokens.spaces.default};
  align-items: center;

  > div {
    text-align: center;
  }

  ${breakpoints.small} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0;
    align-items: ${({ notCenter }) => (notCenter ? 'flex-start' : 'center')};

    > div {
      text-align: ${({ notCenter }) => (notCenter ? 'left' : 'center')};
    }
  }
`

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  margin-bottom: ${tokens.spaces.small};

  ${breakpoints.small} {
    width: 150px;
    height: 150px;
    margin-bottom: 0;
    margin-right: ${tokens.spaces.larger};
  }
`

export const Name = styled.h3`
  font-weight: 800;
  color: ${tokens.colors.black};
  font-size: ${tokens.fonts.textDefault};
  line-height: ${tokens.fonts.textDefault};
  margin-bottom: ${tokens.spaces.tiny};

  ${breakpoints.small} {
    font-size: ${tokens.fonts.subtitle2};
    line-height: ${tokens.fonts.subtitle2};
  }
`

export const Where = styled.p`
  color: ${tokens.colors.grayDarker};
  font-size: ${tokens.fonts.textSmall};
  line-height: ${tokens.fonts.textSmall};
  margin-bottom: ${tokens.spaces.small};
`

export const Paragraph = styled.p`
  color: ${tokens.colors.black};
  font-size: ${tokens.fonts.textSmall};
  line-height: ${tokens.fonts.textSmall};
  display: flex;

  img {
    margin-right: ${tokens.spaces.tiny};
  }
`

export const Value = styled.p`
  color: ${tokens.colors.black};
  font-size: ${tokens.fonts.subtitle1};
  line-height: ${tokens.fonts.subtitle1};
  font-weight: 800;
  margin: ${tokens.spaces.small} 0;
`

export const Stars = styled.div`
  margin-bottom: ${tokens.spaces.default};
`
