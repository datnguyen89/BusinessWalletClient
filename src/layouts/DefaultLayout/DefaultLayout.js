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
import { PAGES } from '../../utils/constant'

const DefaultLayout = props => {
  const { children, commonStore } = props
  const location = useLocation()

  useEffect(() => {
    const segment = location.pathname.split(PAGES.HOME.PATH).filter(item => item !== '')
    if (segment.length === 0) {
      commonStore.setPageName('home')
      return
    }
    switch (segment[0]) {
      case PAGES.HOME.NAME:
        commonStore.setPageName(PAGES.HOME.NAME)
        return
      case PAGES.IDENTITY.NAME:
        commonStore.setPageName(PAGES.IDENTITY.NAME)
        return
      case PAGES.TRANSACTION_MANAGE.NAME:
        commonStore.setPageName(PAGES.TRANSACTION_MANAGE.NAME)
        return
      case PAGES.TRANSACTION_HISTORY.NAME:
        commonStore.setPageName(PAGES.TRANSACTION_HISTORY.NAME)
        return
      case PAGES.TERM_OF_USE.NAME:
        commonStore.setPageName(PAGES.TERM_OF_USE.NAME)
        return
      case PAGES.SUPPORT.NAME:
        commonStore.setPageName(PAGES.SUPPORT.NAME)
        return
      case PAGES.ABOUT_US.NAME:
        commonStore.setPageName(PAGES.ABOUT_US.NAME)
        return
      case PAGES.CONTACT.NAME:
        commonStore.setPageName(PAGES.CONTACT.NAME)
        return
      case PAGES.POLICY.NAME:
        commonStore.setPageName(PAGES.POLICY.NAME)
        return
      case PAGES.PHONE_CARD.NAME:
        commonStore.setPageName(PAGES.PHONE_CARD.NAME)
        return
      case PAGES.PREPAID.NAME:
        commonStore.setPageName(PAGES.PREPAID.NAME)
        return
      case PAGES.POSTPAID.NAME:
        commonStore.setPageName(PAGES.POSTPAID.NAME)
        return
      case PAGES.PHONE_DATA.NAME:
        commonStore.setPageName(PAGES.PHONE_DATA.NAME)
        return
      case PAGES.CARD_DATA.NAME:
        commonStore.setPageName(PAGES.CARD_DATA.NAME)
        return
      case PAGES.ELECTRIC_BILL.NAME:
        commonStore.setPageName(PAGES.ELECTRIC_BILL.NAME)
        return
      case PAGES.WATER_BILL.NAME:
        commonStore.setPageName(PAGES.WATER_BILL.NAME)
        return
      case PAGES.INTERNET_BILL.NAME:
        commonStore.setPageName(PAGES.INTERNET_BILL.NAME)
        return
      case PAGES.TELEVISION_BILL.NAME:
        commonStore.setPageName(PAGES.TELEVISION_BILL.NAME)
        return
      case PAGES.SERVICE_RECHARGE.NAME:
        commonStore.setPageName(PAGES.SERVICE_RECHARGE.NAME)
        return
      case PAGES.APARTMENT_FEE.NAME:
        commonStore.setPageName(PAGES.APARTMENT_FEE.NAME)
        return
      case PAGES.EDUCATION_FEE.NAME:
        commonStore.setPageName(PAGES.EDUCATION_FEE.NAME)
        return
      case PAGES.DEPOSIT.NAME:
        commonStore.setPageName(PAGES.DEPOSIT.NAME)
        return
      case PAGES.TRANSFER_WALLET.NAME:
        commonStore.setPageName(PAGES.TRANSFER_WALLET.NAME)
        return
      case PAGES.TRANSFER_MULTIPLE.NAME:
        commonStore.setPageName(PAGES.TRANSFER_MULTIPLE.NAME)
        return
      case PAGES.RECEIVE_FROM_MM.NAME:
        commonStore.setPageName(PAGES.RECEIVE_FROM_MM.NAME)
        return
      case PAGES.TRANSFER_TO_MM.NAME:
        commonStore.setPageName(PAGES.TRANSFER_TO_MM.NAME)
        return
      case PAGES.LINK_BANK.NAME:
        commonStore.setPageName(PAGES.LINK_BANK.NAME)
        return
      case PAGES.WITHDRAW.NAME:
        commonStore.setPageName(PAGES.WITHDRAW.NAME)
        return
      case PAGES.LOGIN.NAME:
        commonStore.setPageName(PAGES.LOGIN.NAME)
        return
      case PAGES.FORGOT_PASSWORD.NAME:
        commonStore.setPageName(PAGES.FORGOT_PASSWORD.NAME)
        return
      case PAGES.NOT_PERMISSION.NAME:
        commonStore.setPageName(PAGES.NOT_PERMISSION.NAME)
        return
      default:
        return
    }
  }, [location.pathname])
  return (
    <DefaultLayoutWrapper color={commonStore.appTheme.solidColor}>
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