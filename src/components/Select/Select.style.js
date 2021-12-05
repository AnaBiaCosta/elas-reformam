import styled from 'styled-components'
import { tokens } from '../../shared/tokens'

export const Wrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: ${tokens.fonts.textSmall};
  line-height: ${tokens.fonts.textSmall};
  margin-bottom: ${tokens.spaces.tiny};
  color: ${tokens.colors.black};
  padding-left: 4px;
`

export const SelectWrapper = styled.select`
  padding: ${tokens.spaces.tiny} 0;
  font-size: ${tokens.fonts.textDefault};
  line-height: ${tokens.lineHeight.textDefault};
  border: none;
  border-bottom: 1px solid ${tokens.colors.grayLighter};
  cursor: pointer;
`
