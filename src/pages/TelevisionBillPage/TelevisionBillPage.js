import React from 'react'
import PropTypes from 'prop-types'
import { TelevisionBillPageWrapper } from './TelevisionBillPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const TelevisionBillPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Hóa đơn truyền hình</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.TELEVISION_BILL} />
      <TelevisionBillPageWrapper>
        TelevisionBillPage
      </TelevisionBillPageWrapper>
    </DefaultLayout>

  )
}

TelevisionBillPage.propTypes = {

}

export default TelevisionBillPage