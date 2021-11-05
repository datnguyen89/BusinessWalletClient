import React, { useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {inject, observer} from 'mobx-react'

import {
  AreaInfo,
  AreaPanel, EnterpriseInfoWrapper,
} from './EnterpriseInfoStyled'

import AreaPanelAdmin from '../AreaPanelAdmin/AreaPanelAdmin'
import AreaCard from '../AreaCard/AreaCard'
import AreaEnterpriseInfo from '../AreaEnterpriseInfo'
import AreaAccountInfo from '../AreaAccountInfo'
import AreaAddCard from '../AreaAddCard'

const dataAdministratorPanel = []


const dataAccountInfo = [
  {
    id: '1', key: 'key', value: 'value',
  },
  {
    id: '2', key: 'key', value: 'value',
  },
  {
    id: '3', key: 'key', value: 'value',
  },
  {
    id: '4', key: 'key', value: 'value',
  },
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}

const EnterpriseInfo = props => {
  const {infoAccountStore} = props

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  useEffect(()=> {
    //todo : effect loading
    infoAccountStore.getInfoAccount()
      .then(res=>{
        // extra code
      })
  }, []);

  return (
    <EnterpriseInfoWrapper>
      <AreaInfo>
        <AreaEnterpriseInfo />
        <AreaAccountInfo dataAccountInfo={infoAccountStore.infoAccount} />
      </AreaInfo>
      <AreaPanel>
        <AreaPanelAdmin dataAdministratorPanel={dataAdministratorPanel} />
        {/*<AreaCard settings={settings}/>*/}
        <AreaAddCard />
      </AreaPanel>
    </EnterpriseInfoWrapper>
  )
}

EnterpriseInfo.propTypes = {}

export default inject('infoAccountStore')(observer(EnterpriseInfo))