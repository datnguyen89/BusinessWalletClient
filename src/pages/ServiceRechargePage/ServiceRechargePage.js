import React from 'react'
import PropTypes from 'prop-types'
import { ServiceRechargePageWrapper } from './ServiceRechargePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const ServiceRechargePage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp dịch vụ</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.SERVICE_RECHARGE} />
      <ServiceRechargePageWrapper>
        ServiceRechargePage
      </ServiceRechargePageWrapper>
    </DefaultLayout>

  )
}

ServiceRechargePage.propTypes = {

}

export default ServiceRechargePage