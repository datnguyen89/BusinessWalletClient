import React from 'react'
import { inject, observer } from 'mobx-react'
import { BREADCRUMB_DATA } from '../../utils/constant'
import MainBreadCrumb from '../../components/MainBreadCrumb'
import HomeWidgets from '../../components/HomeWidgets'
import HomeServices from '../../components/HomeServices'
import { CarouselWrapper, HomePageWrapper } from './HomePageStyled'
import IMAGES from '../../images'
import { Helmet } from 'react-helmet/es/Helmet'

const HomePage = props => {

  return (
    <>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <HomePageWrapper>
        <MainBreadCrumb breadcrumbData={BREADCRUMB_DATA.HOME} />
        <HomeWidgets />
        <HomeServices />
        <CarouselWrapper>
          <img src={IMAGES.HOME_CAROUSEL} alt={''} />
        </CarouselWrapper>
      </HomePageWrapper>
    </>
  )
}

HomePage.propTypes = {}

export default inject('commonStore')(observer(HomePage))