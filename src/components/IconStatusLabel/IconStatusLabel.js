import React from 'react'
import PropTypes from 'prop-types'
import { IconStatusLabelWrapper } from './IconStatusLabelStyled'

const IconStatusLabel = props => {
  const { children, status } = props
  return (
    <IconStatusLabelWrapper>

    </IconStatusLabelWrapper>
  )
}

IconStatusLabel.propTypes = {
  status: PropTypes.number.isRequired,
}

export default IconStatusLabel