import React from 'react'
import PropTypes from 'prop-types'
import { TransferMultiplePageWrapper } from './TransferMultiplePageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'

const TransferMultiplePage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Chuyển tiền theo Lô</title>
      </Helmet>
      <TransferMultiplePageWrapper>
        TransferMultiplePage
      </TransferMultiplePageWrapper>
    </DefaultLayout>
  )
}

TransferMultiplePage.propTypes = {

}

export default TransferMultiplePage