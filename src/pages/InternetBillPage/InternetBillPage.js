import React from 'react'
import PropTypes from 'prop-types'
import { InternetBillPageWrapper } from './InternetBillPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const InternetBillPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Hóa đơn internet</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.INTERNET_BILL} />
      <InternetBillPageWrapper>
        InternetBillPage
      </InternetBillPageWrapper>
    </DefaultLayout>

  )
}

InternetBillPage.propTypes = {

}

export default InternetBillPage