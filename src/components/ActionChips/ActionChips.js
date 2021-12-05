import React, { useState } from 'react'
import { ActionChipWrapper } from './ActionChips.style'

const ActionChip = ({
  label,
  value,
  onClick
}) => {
  const [selected, setSelected] = useState(false)

  return (
    <ActionChipWrapper
      selected={selected}
      onClick={() => {
        if (selected) {
          setSelected(false)
        } else {
          setSelected(true)
          onClick(value)
        }
      }}
    >
      {label}
    </ActionChipWrapper>
  )
}

export { ActionChip }
