import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  AreaInfo,
  AreaPanel, EnterpriseInfoWrapper,
} from './EnterpriseInfoStyled'

import AreaPanelAdmin from '../AreaPanelAdmin/AreaPanelAdmin'
import AreaCard from '../AreaCard/AreaCard'
import AreaEnterpriseInfo from '../AreaEnterpriseInfo'
import AreaAccountInfo from '../AreaAccountInfo'
import AreaAddCard from '../AreaAddCard'

const dataAdministratorPanel = [
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
  {
    id: '5', key: 'key', value: 'value',
  },
  {
    id: '6', key: 'key', value: 'value',
  },
  {
    id: '7', key: 'key', value: 'value',
  },
  {
    id: '8', key: 'key', value: 'value',
  },
];


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
  }
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const EnterpriseInfo = props => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <EnterpriseInfoWrapper>
      <AreaInfo>
        <AreaEnterpriseInfo />
        <AreaAccountInfo dataAccountInfo={dataAccountInfo} />
      </AreaInfo>
      <AreaPanel>
        <AreaPanelAdmin dataAdministratorPanel={dataAdministratorPanel} />
        <AreaCard settings={settings}/>
        {/*<AreaAddCard />*/}
      </AreaPanel>
    </EnterpriseInfoWrapper>
  )
}

EnterpriseInfo.propTypes = {}

export default EnterpriseInfo