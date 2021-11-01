import React from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  AreaAddCard,
  AreaEnterpriseInfo,
  AreaEnterpriseInfoAreaDetail,
  AreaEnterpriseInfoAreaDetailBox,
  AreaEnterpriseInfoAreaDetailLineInfo,
  AreaEnterpriseInfoAreaDetailLineInfoLeft,
  AreaEnterpriseInfoAreaDetailLineInfoRight,
  AreaEnterpriseInfoLabel,
  AreaIdentityInfo,
  AreaIdentityInfoAreaDetailBox,
  AreaInfo,
  AreaPanel,
  AreaPanelAdmin, AreaPanelAdminAvatar, AreaPanelAdminCard,
  AreaPanelAdminLabel, AreaPannelAdminInfo,
  SpanAreaEnterpriseInfoLabel,
} from './EnterpriseInfoStyled'
import IMAGES from '../../images'
import { Carousel } from 'antd'

const dataTemp = [
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
    <div>
      <AreaInfo>
        <AreaEnterpriseInfo>
          <AreaEnterpriseInfoLabel>
            <SpanAreaEnterpriseInfoLabel>Thông tin doanh nghiệp</SpanAreaEnterpriseInfoLabel>
          </AreaEnterpriseInfoLabel>
          <AreaEnterpriseInfoAreaDetail>
            <AreaEnterpriseInfoAreaDetailBox>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Tên tổ chức</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>Công Ty Cổ phần thương mại Sài
                  Gòn</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Tên viết tắt</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>Solution Technologi
                  Componel</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Địa chỉ ĐKKD</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>Số 123 , Đường Yên Hòa, Cầu Giấy, Hà
                  Nội</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Địa chỉ giao dịch</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>Số 8 , Trần Duy Hưng, Cầu Giấy, Hà
                  Nội</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Mã số thuế</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>123456789</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
            </AreaEnterpriseInfoAreaDetailBox>
            <AreaEnterpriseInfoAreaDetailBox>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Tên tổ chức</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>Công Ty Cổ phần thương mại Sài
                  Gòn</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Tên viết tắt</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>Solution Technologi
                  Componel</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Địa chỉ ĐKKD</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>Số 123 , Đường Yên Hòa, Cầu Giấy, Hà
                  Nội</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Địa chỉ giao dịch</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>Số 8 , Trần Duy Hưng, Cầu Giấy, Hà
                  Nội</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Mã số thuế</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>123456789</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
            </AreaEnterpriseInfoAreaDetailBox>
          </AreaEnterpriseInfoAreaDetail>
        </AreaEnterpriseInfo>

        <AreaIdentityInfo>
          <AreaEnterpriseInfoLabel>
            <SpanAreaEnterpriseInfoLabel>Thông tin tài khoản</SpanAreaEnterpriseInfoLabel>
          </AreaEnterpriseInfoLabel>
          <AreaEnterpriseInfoAreaDetail>
            <AreaIdentityInfoAreaDetailBox>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Số tài khoản</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>123456789</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Số dư khả dụng</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>800.000.000đ</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Số dư đóng băng</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>0đ</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
              <AreaEnterpriseInfoAreaDetailLineInfo>
                <AreaEnterpriseInfoAreaDetailLineInfoLeft>Trạng thái</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                <AreaEnterpriseInfoAreaDetailLineInfoRight>Đang hoạt động</AreaEnterpriseInfoAreaDetailLineInfoRight>
              </AreaEnterpriseInfoAreaDetailLineInfo>
            </AreaIdentityInfoAreaDetailBox>
          </AreaEnterpriseInfoAreaDetail>
        </AreaIdentityInfo>
      </AreaInfo>
      <AreaPanel>
        <AreaPanelAdmin>
          <AreaPanelAdminLabel background={IMAGES.ADMIN_BG}>
            <AreaPanelAdminAvatar>
              <img src={IMAGES.AVATAR_ADMIN} alt='Avatar Administrator' />
            </AreaPanelAdminAvatar>
            <div class='label'>Adminstrator</div>
          </AreaPanelAdminLabel>
          <AreaPannelAdminInfo>
            {
              dataTemp.map(item =>
                <AreaEnterpriseInfoAreaDetailLineInfo key={item.id}>
                  <AreaEnterpriseInfoAreaDetailLineInfoLeft>{item.key}</AreaEnterpriseInfoAreaDetailLineInfoLeft>
                  <AreaEnterpriseInfoAreaDetailLineInfoRight>{item.value}</AreaEnterpriseInfoAreaDetailLineInfoRight>
                </AreaEnterpriseInfoAreaDetailLineInfo>)
            }
          </AreaPannelAdminInfo>
        </AreaPanelAdmin>
        <AreaPanelAdmin>

          <AreaPanelAdminCard
            arrowPrev={`${process.env.PUBLIC_URL}/assets/images/prev.png`}
            arrowNext={`${process.env.PUBLIC_URL}/assets/images/next.png`}>
            <AreaEnterpriseInfoLabel>
              <SpanAreaEnterpriseInfoLabel>Thông tin tài khoản</SpanAreaEnterpriseInfoLabel>
            </AreaEnterpriseInfoLabel>
            <Slider {...settings}>
              <div>
                <img src={`${process.env.PUBLIC_URL}/assets/images/card.png`} />
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/assets/images/card.png`} />
              </div>
              <div>
                <img src={`${process.env.PUBLIC_URL}/assets/images/card.png`} />
              </div>
            </Slider>
          </AreaPanelAdminCard>
          <AreaAddCard>
            <div>
              <img src={`${process.env.PUBLIC_URL}/assets/images/add.png`} />
            </div>
            <span>Liên kết thẻ mới</span>
          </AreaAddCard>
        </AreaPanelAdmin>
      </AreaPanel>
    </div>
  )
}

EnterpriseInfo.propTypes = {}

export default EnterpriseInfo