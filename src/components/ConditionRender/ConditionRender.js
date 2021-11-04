import React from 'react'
import PropTypes from 'prop-types'
import { ConditionRenderWrapper } from './ConditionRenderStyled'

const ConditionRender = props => {
  const { visible, children } = props
  return (
    <ConditionRenderWrapper display={visible ? 'block' : 'none'}>
      {children}
    </ConditionRenderWrapper>
  )
}

ConditionRender.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default ConditionRender