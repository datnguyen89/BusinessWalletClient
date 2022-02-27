import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import commonStore from '../../stores/commonStore'

const DataProvider = props => {

  const { children, profileStore, authenticationStore, commonStore } = props

  const { accessToken, coreSysToken } = authenticationStore
  const { ipAddress } = commonStore

  useEffect(() => {
    if (!accessToken || !coreSysToken) return
    profileStore.getProfile()
  }, [accessToken, coreSysToken])

  return (
    <>
      {children}
    </>
  )
}

DataProvider.propTypes = {}

export default inject('profileStore', 'authenticationStore', 'commonStore')(observer(DataProvider))