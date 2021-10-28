import React from 'react'
import PropTypes from 'prop-types'
import { TransactionHistoryPageWrapper } from './TransactionHistoryPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const TransactionHistoryPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Lịch sử giao dịch</title>
      </Helmet>
      <TransactionHistoryPageWrapper>
        TransactionHistoryPage
      </TransactionHistoryPageWrapper>
    </DefaultLayout>
  )
}

TransactionHistoryPage.propTypes = {

}

export default TransactionHistoryPage