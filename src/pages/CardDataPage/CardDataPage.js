import React from 'react'
import PropTypes from 'prop-types'
import { CardDataPageWrapper } from './CardDataPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const CardDataPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Mã thẻ data</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.CARD_DATA} />
      <CardDataPageWrapper>
        CardDataPage
      </CardDataPageWrapper>
    </DefaultLayout>

  )
}

CardDataPage.propTypes = {

}

export default CardDataPage