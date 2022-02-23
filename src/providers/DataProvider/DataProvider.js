import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import commonStore from '../../stores/commonStore'

const DataProvider = props => {

  const { children, profileStore, authenticationStore } = props

  const { accessToken, coreSysToken } = authenticationStore

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

export default inject('profileStore', 'authenticationStore')(observer(DataProvider))