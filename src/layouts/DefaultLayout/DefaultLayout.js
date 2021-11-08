import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { DefaultLayoutWrapper } from './DefaultLayoutStyled'
import MainSideBar from '../../components/MainSideBar'
import MainContent from '../../components/MainContent/MainContent'
import MainHeader from '../../components/MainHeader'
import MainBody from '../../components/MainBody'
import MainFooter from '../../components/MainFooter'
import { useLocation } from 'react-router-dom'

const DefaultLayout = props => {
  const { children, commonStore } = props
  const { appTheme } = commonStore
  const location = useLocation()

  useEffect(() => {
    const segment = location.pathname.split('/').filter(item => item !== '')
    if (segment.length === 0) {
      commonStore.setPageName('home')
      return
    }
    switch (segment[0]) {
      case 'contract':
        commonStore.setPageName('contract')
        return
      case 'deposit':
        commonStore.setPageName('deposit')
        return
      case 'tranfer':
        commonStore.setPageName('tranfer')
        return
      case 'withdraw':
        commonStore.setPageName('withdraw')
        return
      case 'identity-info':
        commonStore.setPageName('identity-info')
        return
      case 'policy':
        commonStore.setPageName('policy')
        return
      case 'support':
        commonStore.setPageName('support')
        return
      case 'transaction-history':
        commonStore.setPageName('transaction-history')
        return
      case 'transaction-manage':
        commonStore.setPageName('transaction-manage')
        return
      case 'transfer-mobile-money':
        commonStore.setPageName('transfer-mobile-money')
        return
      case 'transfer-multiple':
        commonStore.setPageName('transfer-multiple')
        return
      default:
        return
    }
  }, [location.pathname])
  return (
    <DefaultLayoutWrapper fontColor={appTheme.fontColor}>
      <MainHeader />
      <MainContent>
        <MainSideBar />
        <MainBody>
          {children}
        </MainBody>
      </MainContent>
      <MainFooter />
    </DefaultLayoutWrapper>
  )
}

DefaultLayout.propTypes = {}

export default inject('commonStore')(observer(DefaultLayout))