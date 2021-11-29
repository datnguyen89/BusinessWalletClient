import React from 'react'
import PropTypes from 'prop-types'
import { WaterBillPageWrapper } from './WaterBillPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const WaterBillPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Hóa đơn tiền nước</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.WATER_BILL} />
      <WaterBillPageWrapper>
        WaterBillPage
      </WaterBillPageWrapper>
    </DefaultLayout>

  )
}

WaterBillPage.propTypes = {

}

export default WaterBillPage