import React from 'react'
import PropTypes from 'prop-types'
import { PhoneCardPageWrapper } from './PhoneCardPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'
import { Helmet } from 'react-helmet/es/Helmet'

const PhoneCardPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Mua mã thẻ điện thoại</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.PHONE_CARD} />
      <PhoneCardPageWrapper>
        PhoneCardPage
      </PhoneCardPageWrapper>
    </DefaultLayout>
  )
}

PhoneCardPage.propTypes = {}

export default PhoneCardPage