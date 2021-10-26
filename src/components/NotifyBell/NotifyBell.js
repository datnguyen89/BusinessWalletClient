import React from 'react'
import PropTypes from 'prop-types'
import ICONS from '../../icons'
import { Badge } from 'antd'

const NotifyBell = props => {
  return (
    <>
      <Badge count={9} size={'small'}>
        <img src={ICONS.NOTIFY_BELL} alt={''} />
      </Badge>

    </>
  )
}

NotifyBell.propTypes = {
  
}

export default NotifyBell