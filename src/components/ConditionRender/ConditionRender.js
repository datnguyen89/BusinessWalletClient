import React from 'react'
import PropTypes from 'prop-types'
import { ConditionRenderWrapper } from './ConditionRenderStyled'

const ConditionRender = props => {
  const { isVisible, children } = props
  return (
    <ConditionRenderWrapper display={isVisible ? 'block' : 'none'}>
      {children}
    </ConditionRenderWrapper>
  )
}

ConditionRender.propTypes = {
  isVisible: PropTypes.bool.isRequired,
}

export default ConditionRender