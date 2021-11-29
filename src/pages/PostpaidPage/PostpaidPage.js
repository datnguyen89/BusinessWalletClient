import React from 'react'
import PropTypes from 'prop-types'
import { PostpaidPageWrapper } from './PostpaidPageStyled'
import DefaultLayout from '../../layouts/DefaultLayout'
import { Helmet } from 'react-helmet/es/Helmet'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import { BREADCRUMB_DATA } from '../../utils/constant'

const PostpaidPage = props => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Nạp tiền điện thoại trả sau</title>
      </Helmet>
      <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.POSTPAID} />
      <PostpaidPageWrapper>
        PostpaidPage
      </PostpaidPageWrapper>
    </DefaultLayout>

  )
}

PostpaidPage.propTypes = {

}

export default PostpaidPage