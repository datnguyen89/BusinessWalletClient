import React from 'react'
import PropTypes from 'prop-types'
import { IconStatusLabelText, IconStatusLabelWrapper } from './IconStatusLabelStyled'
import { TRANSACTION_STATUS } from '../../utils/constant'
import ICONS from '../../icons'

const IconStatusLabel = props => {
  const { label, status, iconHeight, iconWidth, fontSize } = props

  const renderStatusIcon = (status) => {
    let icon = ''
    switch (status) {
      case TRANSACTION_STATUS.WAITING:
        icon = ICONS.WAITING_ICON
        break
      case TRANSACTION_STATUS.REJECTED:
        icon = ICONS.REJECTED_ICON
        break
      case TRANSACTION_STATUS.APPROVED:
        icon = ICONS.APPROVED_ICON
        break
      default:
        break
    }
    return icon
  }

  return (
    <IconStatusLabelWrapper>
      <img src={renderStatusIcon(status)} alt={''} height={iconHeight || 16} width={iconWidth || 16} />
      <IconStatusLabelText fontSize={fontSize || 'inherit'}>{label}</IconStatusLabelText>
    </IconStatusLabelWrapper>
  )
}

IconStatusLabel.propTypes = {
  iconHeight: PropTypes.number,
  iconWidth: PropTypes.number,
  fontSize: PropTypes.string,
  status: PropTypes.number.isRequired,
  label: PropTypes.node.isRequired,
}

export default IconStatusLabel