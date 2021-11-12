import React from 'react'
import PropTypes from 'prop-types'
import { EducationFeePageWrapper } from './EducationFeePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const EducationFeePage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Học phí</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.EDUCATION_FEE} />
      <EducationFeePageWrapper>
        EducationFeePage
      </EducationFeePageWrapper>
    </DefaultLayout>

  )
}

EducationFeePage.propTypes = {

}

export default EducationFeePage