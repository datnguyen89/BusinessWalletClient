import React from 'react'
import PropTypes from 'prop-types'
import { PrepaidPageWrapper } from './PrepaidPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const PrepaidPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp tiền điện thoại</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.PREPAID} />
      <PrepaidPageWrapper>
        PrepaidPage
      </PrepaidPageWrapper>
    </DefaultLayout>

  )
}

PrepaidPage.propTypes = {

}

export default PrepaidPage