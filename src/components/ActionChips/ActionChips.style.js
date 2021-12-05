import styled from 'styled-components'
import { tokens } from '../../shared/tokens'

export const ActionChipWrapper = styled.button`
  border: 1px solid ${tokens.colors.purpleDarker};
  border-radius: 4px;
  font-size: ${tokens.fonts.textSmall};
  line-height: ${tokens.lineHeight.textSmall};
  font-weight: 800;
  color: ${tokens.colors.purpleDarker};
  background-color: ${tokens.colors.white};
  padding: 4px ${tokens.spaces.tiny};
  margin-right: ${tokens.spaces.small};
  cursor: pointer;

  ${({ selected }) => selected && `
    color: ${tokens.colors.white};
    background-color: ${tokens.colors.purpleDarker};
  `}
`
