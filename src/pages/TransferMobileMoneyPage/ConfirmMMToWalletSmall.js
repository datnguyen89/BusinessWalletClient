import React from 'react'
import PropTypes from 'prop-types'
import ConditionRender from '../../components/ConditionRender'

const ConfirmMMToWalletSmall = props => {
  const { visible } = props
  return (
    <ConditionRender visible={visible}>

    </ConditionRender>
  )
}

ConfirmMMToWalletSmall.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default ConfirmMMToWalletSmall