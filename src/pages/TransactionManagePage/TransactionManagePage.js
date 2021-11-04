import React from 'react'
import PropTypes from 'prop-types'
import { TransactionManagePageWrapper, TransactionManagerBody } from './TransactionManagePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA, TRANSACTION_STATUS } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import uuid from 'uuid'

const MockupData = [
  {
    id: 1,
    transactionId: uuid(),
    transactionType: 'Liên kết',
    status: TRANSACTION_STATUS.APPROVED,
    
  },
]

const TransactionManagePage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Quản lý giao dịch</title>
      </Helmet>
      <TransactionManagePageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TRANSACTION_MANAGE} />
        <TransactionManagerBody>
        </TransactionManagerBody>
      </TransactionManagePageWrapper>
    </DefaultLayout>
  )
}

TransactionManagePage.propTypes = {}

export default TransactionManagePage