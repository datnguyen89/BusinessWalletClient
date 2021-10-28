import React from 'react'
import PropTypes from 'prop-types'
import { TransactionManagePageWrapper } from './TransactionManagePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const TransactionManagePage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Quản lý giao dịch</title>
      </Helmet>
      <TransactionManagePageWrapper>
        TransactionManagePage
      </TransactionManagePageWrapper>
    </DefaultLayout>
  )
}

TransactionManagePage.propTypes = {

}

export default TransactionManagePage