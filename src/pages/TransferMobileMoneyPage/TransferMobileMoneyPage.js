import React from 'react'
import PropTypes from 'prop-types'
import { TransferMobileMoneyPageWrapper } from './TransferMobileMoneyPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'

const TransferMobileMoneyPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp/Rút Mobifone Money</title>
      </Helmet>
      <TransferMobileMoneyPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.MOBILE_MONEY} />
        TransferMobileMoneyPage
      </TransferMobileMoneyPageWrapper>
    </DefaultLayout>
  )
}

TransferMobileMoneyPage.propTypes = {

}

export default TransferMobileMoneyPage