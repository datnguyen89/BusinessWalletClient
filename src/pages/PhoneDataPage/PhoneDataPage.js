import React from 'react'
import PropTypes from 'prop-types'
import { PhoneDataPageWrapper } from './PhoneDataPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const PhoneDataPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp data điện thoại</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.PHONE_DATA} />
      <PhoneDataPageWrapper>
        PhoneDataPage
      </PhoneDataPageWrapper>
    </DefaultLayout>

  )
}

PhoneDataPage.propTypes = {

}

export default PhoneDataPage