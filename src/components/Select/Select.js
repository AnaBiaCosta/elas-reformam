import React from 'react'
import {
  Wrapper,
  Label,
  SelectWrapper
} from './Select.style'

const Select = ({
  label,
  placeholder,
  data,
  onChange
}) => {
  return (
    <Wrapper>
      <Label>{label}:</Label>
      <SelectWrapper onChange={e => onChange(e)}>
        <option>{placeholder}</option>

        {data.map(item => (
          <option
            key={item.id}
            value={item.slug}
          >
            {item.name}
          </option>
        ))}
      </SelectWrapper>
    </Wrapper>
  )
}

export { Select }
