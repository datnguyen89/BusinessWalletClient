import React from 'react'
import PropTypes from 'prop-types'
import { TransactionManagePageWrapper } from './TransactionManagePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'

const TransactionManagePage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Quản lý giao dịch</title>
      </Helmet>
      <TransactionManagePageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TRANSACTION_MANAGE} />
        TransactionManagePage
      </TransactionManagePageWrapper>
    </DefaultLayout>
  )
}

TransactionManagePage.propTypes = {

}

export default TransactionManagePage