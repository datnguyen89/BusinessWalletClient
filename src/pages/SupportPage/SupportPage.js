import React from 'react'
import PropTypes from 'prop-types'
import { SupportPageWrapper } from './SupportPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const SupportPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Trợ giúp</title>
      </Helmet>
      <SupportPageWrapper>
        SupportPage
      </SupportPageWrapper>
    </DefaultLayout>

  )
}

SupportPage.propTypes = {

}

export default SupportPage