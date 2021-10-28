import React from 'react'
import PropTypes from 'prop-types'
import { IdentityInfoPageWrapper } from './IdentityInfoPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const IdentityInfoPage = props => {

  return (
    <DefaultLayout>
      <Helmet>
        <title>Thông tin định danh</title>
      </Helmet>
      <IdentityInfoPageWrapper>
        IdentityInfoPage
      </IdentityInfoPageWrapper>
    </DefaultLayout>
  )
}

IdentityInfoPage.propTypes = {

}

export default IdentityInfoPage