import React from 'react'
import PropTypes from 'prop-types'
import { ReportDetailPageWrapper } from './ReportDetailPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const ReportDetailPage = props => {
  return (
    <>
      <Helmet>
        <title>Báo cáo chi tiết</title>
      </Helmet>
      <ReportDetailPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.REPORT_DETAIL} />
        Báo cáo chi tiết
      </ReportDetailPageWrapper>
    </>
  )
}

ReportDetailPage.propTypes = {

}

export default ReportDetailPage