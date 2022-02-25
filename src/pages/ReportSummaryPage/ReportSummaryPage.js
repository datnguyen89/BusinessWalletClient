import React from 'react'
import PropTypes from 'prop-types'
import { ReportSummaryPageWrapper } from './ReportSummaryPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const ReportSummaryPage = props => {
  return (
    <>
      <Helmet>
        <title>Báo cáo tổng hợp</title>
      </Helmet>
      <ReportSummaryPageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.REPORT_SUMMARY} />
        Báo cáo tổng hợp
      </ReportSummaryPageWrapper>
    </>
  )
}

ReportSummaryPage.propTypes = {

}

export default ReportSummaryPage