import React from 'react'
import PropTypes from 'prop-types'
import { ElectricBillPageWrapper } from './ElectricBillPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const ElectricBillPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Hóa đơn tiền điện</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.ELECTRIC_BILL} />
      <ElectricBillPageWrapper>
        ElectricBillPage
      </ElectricBillPageWrapper>
    </DefaultLayout>

  )
}

ElectricBillPage.propTypes = {

}

export default ElectricBillPage