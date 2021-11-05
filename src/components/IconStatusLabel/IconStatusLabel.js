import React from 'react'
import PropTypes from 'prop-types'
import { IconStatusLabelText, IconStatusLabelWrapper } from './IconStatusLabelStyled'
import { TRANSACTION_STATUS } from '../../utils/constant'
import ICONS from '../../icons'

const IconStatusLabel = props => {
  const { label, status, iconHeight, iconWidth, fontSize } = props

  const renderStatusIcon = () => {
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
        icon = ICONS.WAITING_ICON
        break
    }
    return icon
  }
  const renderStatusLabel = () => {
    let label = ''
    switch (status) {
      case TRANSACTION_STATUS.WAITING:
        label = 'Chờ duyệt'
        break
      case TRANSACTION_STATUS.REJECTED:
        label = 'Từ chối'
        break
      case TRANSACTION_STATUS.APPROVED:
        label = 'Đã phê duyệt'
        break
      default:
        label = 'Chờ duyệt'
        break
    }
    return label
  }
  return (
    <IconStatusLabelWrapper>
      <img src={renderStatusIcon()} alt={''} height={iconHeight || 16} width={iconWidth || 16} />
      <IconStatusLabelText fontSize={fontSize || 'inherit'}>{label || renderStatusLabel()}</IconStatusLabelText>
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