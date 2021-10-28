import React from 'react'
import PropTypes from 'prop-types'
import { TransferMobileMoneyPageWrapper } from './TransferMobileMoneyPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const TransferMobileMoneyPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp/Rút Mobifone Money</title>
      </Helmet>
      <TransferMobileMoneyPageWrapper>
        TransferMobileMoneyPage
      </TransferMobileMoneyPageWrapper>
    </DefaultLayout>
  )
}

TransferMobileMoneyPage.propTypes = {

}

export default TransferMobileMoneyPage