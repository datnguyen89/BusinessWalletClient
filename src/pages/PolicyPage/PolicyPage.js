import React from 'react'
import PropTypes from 'prop-types'
import { PolicyPageWrapper } from './PolicyPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const PolicyPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Điều khoản sử dụng</title>
      </Helmet>
      <PolicyPageWrapper>
        PolicyPage
      </PolicyPageWrapper>
    </DefaultLayout>
  )
}

PolicyPage.propTypes = {

}

export default PolicyPage