import React from 'react'
import PropTypes from 'prop-types'
import { ApartmentFeePageWrapper } from './ApartmentFeePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const ApartmentFeePage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Phí chung cư</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.APARTMENT_FEE} />
      <ApartmentFeePageWrapper>
        ApartmentFeePage
      </ApartmentFeePageWrapper>
    </DefaultLayout>

  )
}

ApartmentFeePage.propTypes = {

}

export default ApartmentFeePage